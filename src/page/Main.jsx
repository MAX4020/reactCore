import "./Main.css";
import { useEffect, useRef, useState } from "react";
import * as XLSX from 'xlsx'
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Button } from "../ui/Button";
import { Select } from "../ui/Select";
import { Bar, Line, Scatter } from "react-chartjs-2";
import { linearRegression } from "simple-statistics";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let chunkSize = 1 * 1024;

const Main = () => {
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(null);
  const [lastUploadFileIndex, setLastUploadedFileIndex] = useState(null);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(null);
  const [value,setValue] = useState(1)
  const [statData1, setStatData1] = useState([])
  const [statData2, setStatData2] = useState([])
  const [statDataRegression, setStatDataRegression] = useState({})
  const fileRef = useRef()
  const fileRefUpload = useRef()
  const itemsOptions = [
    {value:1,title:<><p>Линейный</p></>},
    {value:2,title:<><p>Точечный</p></>},
    {value:3,title:<><p>Диаграмма</p></>}
  ]
  const regression = linearRegression([statDataRegression])
  const lengthGraph = statData1.map((item,index) => (index + 1))
  const options = {
    responsive: true,
  };
  const labels = [...lengthGraph]
  const data = {
    labels,
    datasets: [
      {
        label: 'y1',
        data: [...statData1],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y2',
        data: [...statData2],
        borderColor: 'rgb(89, 99, 100)',
        backgroundColor: 'rgba(89, 99, 100, 0.5)',
      },
    ],
  }
  const dataScatter = {
    labels,
    datasets: [
      {
        label: 'dot',
        data: [...statData1],
        backgroundColor: 'rgba(255,99,132,1)', 
      },
      {
        label: 'dot',
        data: [...statData2],
        backgroundColor: 'rgba(89,99,100,1)', 
      },
    ]
  }

  function handleDrop(e) {
    e.preventDefault();
    setFiles([...files, ...e.dataTransfer.files]);
  }

  function handleUpload(e) {
    e.preventDefault();
    setFiles([...files, ...e.target.files]);
  }

  function readAndUploadCurrentChunk() {
    const reader = new FileReader();
    const file = files[currentFileIndex];
    if (!file) {
      return;
    }
    chunkSize = Math.ceil(file.size / 100);
    const from = currentChunkIndex * chunkSize;
    const to = from + chunkSize;
    const blob = file.slice(from, to);
    reader.onload = (e) => uploadChunck(e);
    reader.readAsDataURL(blob);
  }

  function uploadChunck(readerEvent) {
    const file = files[currentFileIndex];
    const data = readerEvent.target.result;
    const params = new URLSearchParams();
    params.set("name", file.name);
    params.set("size", file.size);
    params.set("currentChunkIndex", currentChunkIndex);
    params.set("totalChunks", Math.ceil(file.size / chunkSize));
    const headers = { "Content-Type": "application/octet-stream" };
    const url = "http://localhost:4001/upload?" + params.toString();
    axios.post(url, data, { headers }).then((response) => {
      const file = files[currentFileIndex];
      const filesize = files[currentFileIndex].size;
      const chunks = Math.ceil(filesize / chunkSize) - 1;
      const isLastChunk = currentChunkIndex === chunks;
      if (isLastChunk) {
        file.finalFilename = response.data.finalFilename;
        setLastUploadedFileIndex(currentFileIndex);
        setCurrentChunkIndex(null);
      } else {
        setCurrentChunkIndex(currentChunkIndex + 1);
      }
    });
  }

  const handleClick = () =>{
    fileRef.current.click()
  }
  const handleClickUpload = () =>{
    fileRefUpload.current.click()
  }

  const handleChange = (e) => {
    e.preventDefault();

    var files = e.target.files, f = files[0];
    var reader1 = new FileReader();
    reader1.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, {type: 'binary'});
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        setStatData1([...dataParse[0]])
        setStatData2([...dataParse[1]])
        setStatDataRegression([...dataParse])
        console.log(dataParse)
        console.log(regression)
    };
    reader1.readAsBinaryString(f)
}

  useEffect(() => {
    if (lastUploadFileIndex === null) {
      return;
    }
    const isLastFile = lastUploadFileIndex === files.length - 1;
    const nextFileIndex = isLastFile ? null : currentFileIndex + 1;
    setCurrentFileIndex(nextFileIndex);
  }, [lastUploadFileIndex]);

  useEffect(() => {
    if (files.length > 0) {
      if (currentFileIndex === null) {
        setCurrentFileIndex(
          lastUploadFileIndex === null ? 0 : lastUploadFileIndex + 1
        );
      }
    }
  }, [files.length]);

  useEffect(() => {
    if (currentFileIndex !== null) {
      setCurrentChunkIndex(0);
    }
  }, [currentFileIndex]);

  useEffect(() => {
    if (currentChunkIndex !== null) {
      readAndUploadCurrentChunk();
    }
  }, [currentChunkIndex]);
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="head">Загрузчик</h1>
        </div>
      </header>
      <main className="container">
        <div className="uploader">
          <input ref={fileRefUpload} onChange={handleUpload} type="file" style={{display: "none"}} />
          <Button onClick={handleClickUpload} className="btn">
            Выбрать файл
          </Button>
          <div
            onDragOver={(e) => {
              setDropzoneActive(true);
              e.preventDefault();
            }}
            onDragLeave={(e) => {
              setDropzoneActive(false);
              e.preventDefault();
            }}
            onDrop={(e) => handleDrop(e)}
            className={"dropzone " + (dropzoneActive ? "active" : "")}
          >
            Перетащите файл сюда
          </div>
        </div>
        <div className="uploader">
          <h1 className="head">Загруженные файлы</h1>
          <div className="files">
            {files.map((file, fileIndex) => {
              let progress = 0;
              let uploadedFileSize = 0;
              if (file.finalFilename) {
                progress = 100;
                uploadedFileSize = file.size
              } else {
                const uploading = fileIndex === currentFileIndex;
                const chunks = Math.ceil(file.size / chunkSize);
                
                if (uploading) {
                  uploadedFileSize = Math.ceil(file.size / chunks) * currentChunkIndex;
                  progress = Math.round((currentChunkIndex / chunks) * 100);
                } else {
                  progress = 0;
                }
              }
              return (
                <div className="progress__upload">
                <a key={fileIndex}
                  className="file"
                  target="_blank"
                  href={"http://localhost:4001/uploads/" + file.finalFilename}
                >
                  <div className="name">{file.name}</div>
                  <div
                    className={"progress " + (progress === 100 ? "done" : "")}
                    style={{ width: progress + "%" }}
                  >
                  </div><div className="prom__upload"><p className={"upload__text " + (progress === 100 ? "up" : "")}>Done</p></div>
                </a>
                <div className="byte__flex"><div key={fileIndex} className="byte">{uploadedFileSize}/{file.size}</div></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="uploader">
          <div className="statistic">
            <h1 className="head">Статистика</h1>
            <Button
            className="btn"
            onClick={handleClick}
            >
              Выгрузить таблицу
            </Button>
            <input 
            type="file" 
            ref={fileRef} 
            onChange={handleChange} 
            style={{display:'none'}}
            />
            <div className = "mt-[20px]">
            <h2 className="head">Выберите тип графика</h2>
            <Select 
            name={"vs"} 
            value={value}
            setValue={setValue}
            options={itemsOptions} 
            type={'primary'}/>
            {statData1.length != 0 &&<div className="w-[1000px] h-[500px]">
              {value == 1 && <Line
              type="Line"
              data={data}
              options={options}
              />}
              {value == 2 && <Scatter
              data={dataScatter}
              options={options}
              />
              }
            </div>}
            <div className="statistic__regression">
              <h2 className="head">Линейная регрессия</h2>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
