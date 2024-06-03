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
import { chunk, ckmeans, combinations, extent, interquartileRange, linearRegression, linearRegressionLine, max, mean, median, medianAbsoluteDeviation, min, mode, product, quantile, rSquared, sampleCorrelation, sampleCovariance, sampleSkewness, sampleVariance, standardDeviation, sum, tTest, tTestTwoSample, variance } from "simple-statistics";
import Counter from "../ui/Counter";
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
  const [typeRes,setTypeRes] = useState(1)
  const [col, setCol] = useState(0)
  const [rMin, setRMin] = useState()
  const [rMax, setRMax] = useState()
  const [rSum, setRSum] = useState()
  const [rQuantile, setRQuantile] = useState()
  const [rProduct, setRProduct] = useState()
  const [rMean, setRMean] = useState()
  const [rMode, setRMode] = useState()
  const [rMedian, setRMedian] = useState()
  const [rSkwen, setRSkwen] = useState()
  const [rVariance, setRVariance] = useState()
  const [rSVariance, setRSVariance] = useState()
  const [rStd, setRStd] = useState()
  const [rMad, setRMad] = useState()
  const [rQuantileR, setRQuantileR] = useState()
  const [rCovariance, setRCovariance] = useState()
  const [rRquad, setRRquad] = useState()
  const [rRegression, setRRegression] = useState()
  const [rTest, setRTest] = useState()
  const [rTestTwo, setRTestTwo] = useState()
  const [rBernouli, setRBernouli] = useState()
  const [rKmeans, setRKmeans] = useState()
  const [rChunk, setRChunk] = useState()
  const [rCombin, setRCombin] = useState()
  const [rCorel, setRCorel] = useState()
  const [rEcsces, setREcsces] = useState([])
  const [dataParse,setDataParse] = useState([])

  const [combin, setCombin] = useState(1)
  const [expectedValue, setExpectedValue] = useState(1)
  const [kmeansCol, setKmeansCol] = useState(1)
  const [quantileVal, setQuantileVal] = useState(0.1)

  const fileRef = useRef()
  const fileRefUpload = useRef()
  const regression = dataParse?.[0]?.map((item,index) => ([dataParse[0][index],dataParse[1][index]]))

  const sMin = () =>        {setRMin(min(dataParse[col]))}
  const sMax = () =>        {setRMax(max(dataParse[col]))}
  const sSum = () =>        {setRSum(sum(dataParse[col]))}  
  const sQuantile = () =>   {setRQuantile(quantile(dataParse[col],quantileVal))}
  const sProduct = () =>    {setRProduct(product(dataParse[col]))}
  const sMean = () =>       {setRMean(mean(dataParse[col]))}
  const sMode = () =>       {setRMode(mode(dataParse[col]))}
  const sMedian = () =>     {setRMedian(median(dataParse[col]))}
  const sSkwen = () =>      {setRSkwen(sampleSkewness(dataParse[col]))}
  const sVariance = () =>   {setRVariance(variance(dataParse[col]))}
  const sSVariance = () =>  {setRSVariance(sampleVariance(dataParse[col]))}
  const sStd = () =>        {setRStd(standardDeviation(dataParse[col]))}
  const sMad = () =>        {setRMad(medianAbsoluteDeviation(dataParse[col]))}
  const sQuantileR = () =>  {setRQuantileR(interquartileRange(dataParse[col]))}
  const sCovariance = () => {setRCovariance(sampleCovariance(dataParse[0],dataParse[1]))}
  const sRquad = () =>      {setRRquad(rSquared(regression,linearRegressionLine(linearRegression(regression))))}
  const sRegression = () => {setRRegression(linearRegression(regression))}
  const sTest = () =>       {setRTest(tTest(dataParse[col],expectedValue))}
  const sTestTwo = () =>    {setRTestTwo(tTestTwoSample(dataParse[0],dataParse[1],0))}
  const sKmeans = () =>     {setRKmeans(ckmeans(dataParse[col], kmeansCol))}
  const sChunk = () =>      {setRChunk(chunk(dataParse[col],combin))}
  const sCombin = () =>     {setRCombin(combinations(dataParse[col],combin))}
  const sCorel = () =>      {setRCorel(sampleCorrelation(dataParse[0],dataParse[1]))}
  const sEcsces = () =>     {setREcsces(extent(dataParse[col]))}

  const typeResOptions = [
    {value:1,title:<>статистика</>},
    {value:2,title:<>тенденции</>},
    {value:3,title:<>диспресия</>},
    {value:4,title:<>сходство</>},
    {value:5,title:<>регрессия</>},
    {value:6,title:<>к-среднее</>},
    {value:7,title:<>распределения</>},
    {value:8,title:<>дополнительно</>},
  ]
  const itemsOptions = [
    {value:1,title:<><p>Линейный</p></>},
    {value:2,title:<><p>Точечный</p></>},
  ]
  const lengthGraph = dataParse?.[0]?.map((item,index) => (index + 1))
  const options = {
    responsive: true,
  };
  const labels = lengthGraph
  const data = {
    labels,
    datasets: [
      {
        label: 'y1',
        data: dataParse[0],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y2',
        data: dataParse[1],
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
        data: dataParse[0],
        backgroundColor: 'rgba(255,99,132,1)', 
      },
      {
        label: 'dot',
        data: dataParse[1],
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
        setDataParse(XLSX.utils.sheet_to_json(ws, {header:1}))
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
            <div className = "mt-[20px] flex flex-col justify-center items-center">
            <h2 className="head">Выберите тип графика</h2>
            <Select 
            name={"vs"} 
            value={value}
            setValue={setValue}
            options={itemsOptions} 
            type={'primary'}/>
            {dataParse.length != 0 &&<div className="w-[1000px] h-[500px]">
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
            <div className="statistic">
              <h2 className="head">Блок статистики</h2>
              <div className="statistic__result">
                <Select
                value={typeRes}
                setValue={setTypeRes}
                options={typeResOptions}
                />
              <h2 className="text-xl text-center text-white">По какой переменной</h2>
                <Select
                value={col}
                setValue={setCol}
                options={[
                  {value:0,title:<>1</>},
                  {value:1,title:<>2</>}
              ]}
                />
                <div className="container__stat">
                  {typeRes == 1 && dataParse !=0 && 
                  <>
                  <h1 className="head">Основная статистика</h1> 
                  <h1 className="text-xl text-center mb-[20px] text-white">p для квантиля</h1>
                  <Counter className="mb-[20px] text-white" value={quantileVal} setValue={setQuantileVal} step={0.01} min={0} max={1}/>
                      <Button onClick={sMin} className="container__result">
                        <h1 className="head__2">Минимальное</h1>
                        <h1 className="text-xl text-center text-white">{ rMin }</h1>
                      </Button>
                      <Button onClick={sMax} className="container__result">
                        <h1 className="head__2">Максимальное</h1>
                        <h1 className="text-xl text-center text-white">{rMax}</h1>
                      </Button>
                      <Button onClick={sSum} className="container__result">
                      <h1 className="head__2">Сумма</h1>
                      <h1 className="text-xl text-center text-white">{rSum}</h1>
                      </Button>
                     
                      <Button onClick={sQuantile} className="container__result">
                      <h1 className="head__2">Квантиль</h1>
                      <h1 className="text-xl text-center text-white">{rQuantile}</h1>
                      </Button>
                      <Button onClick={sProduct} className="container__result">
                      <h1 className="head__2">Умножение</h1>
                      <h1 className="text-xl text-center text-white">{rProduct}</h1>
                      </Button>
                  </>
                  }
                  {typeRes == 2 && 
                  <>
                  <h1 className="head">Тенденции</h1>
                  <Button onClick={sMean} className="container__result">
                        <h1 className="head__2">Среднее</h1>
                        <h1 className="text-xl text-center text-white">{ rMean }</h1>
                      </Button>
                      <Button onClick={sMode} className="container__result">
                        <h1 className="head__2">Мода</h1>
                        <h1 className="text-xl text-center text-white">{rMode}</h1>
                      </Button>
                      <Button onClick={sMedian} className="container__result">
                      <h1 className="head__2">Медиан</h1>
                      <h1 className="text-xl text-center text-white">{rMedian}</h1>
                      </Button>
                      <Button onClick={sSkwen} className="container__result">
                      <h1 className="head__2">Ассиметрия</h1>
                      <h1 className="text-xl text-center text-white">{rSkwen}</h1>
                      </Button>
                  </>
                  }
                  {typeRes == 3 && 
                  <>
                  <h1 className="head">Дисперсия</h1>
                    <Button onClick={sVariance} className="container__result">
                      <h1 className="head__2">Дисперсия</h1>
                      <h1 className="text-xl text-center text-white">{ rVariance }</h1>
                    </Button>
                    <Button onClick={sSVariance} className="container__result">
                      <h1 className="head__2">Выборочная дисперсия</h1>
                      <h1 className="text-xl text-center text-white">{rSVariance}</h1>
                    </Button>
                    <Button onClick={sStd} className="container__result">
                    <h1 className="head__2">Стандартное отклонение</h1>
                    <h1 className="text-xl text-center text-white">{rStd}</h1>
                    </Button>
                    <Button onClick={sMad} className="container__result">
                    <h1 className="head__2">Абсолютное отклонение</h1>
                    <h1 className="text-xl text-center text-white">{rMad}</h1>
                    </Button>
                    <Button onClick={sQuantileR} className="container__result">
                    <h1 className="head__2">Квартиль диапозон</h1>
                    <h1 className="text-xl text-center text-white">{rQuantileR}</h1>
                    </Button>
                  </>
                  }
                  {typeRes == 4 && 
                  <>
                  <h1 className="head">Сходство</h1>
                  <Button onClick={sCorel} className="container__result">
                      <h1 className="head__2">Кореляция</h1>
                      <h1 className="text-xl text-center text-white">{ rCorel }</h1>
                    </Button>
                    <Button onClick={sCovariance} className="container__result">
                      <h1 className="head__2">Ковариация</h1>
                      <h1 className="text-xl text-center text-white">{rCovariance}</h1>
                    </Button>
                    <Button onClick={sRquad} className="container__result">
                    <h1 className="head__2">R квадрат</h1>
                    <h1 className="text-xl text-center text-white">{rRquad}</h1>
                    </Button>
                  </>
                  }
                  {typeRes == 5 && 
                  <>
                  <h1 className="head">Регрессия</h1>
                  <Button onClick={sRegression} className="container__result">
                    <h1 className="head__2">Регрессия</h1>
                    <h1 className="text-xl text-center text-white">{JSON.stringify(rRegression)}</h1>
                    </Button>
                  </>
                  }
                  {typeRes == 6 && 
                  <>
                  <h1 className="text-xl text-center mb-[20px] text-white">Введите число разбиений</h1>
                  <Counter className="mb-[20px] text-white" value={kmeansCol} setValue={setKmeansCol} step={1} min={1} max={10}/>
                  <Button onClick={sKmeans} className="container__result">
                    <h1 className="head__2">К-среднее</h1>
                    <h1 className="text-xl text-center text-white">{rKmeans?.join(' | ')}</h1>
                  </Button>
                  </>
                  }
                  {typeRes == 7 && 
                  <>
                  <h1 className="text-xl text-center mb-[20px] text-white">Введите ожидаемое значение</h1>
                  <Counter className="mb-[20px] text-white" value={expectedValue} setValue={setExpectedValue} step={0.2} min={1} max={10}/>
                  <Button onClick={sTest} className="container__result">
                    <h1 className="head__2">tTest</h1>
                    <h1 className="text-xl text-center text-white">{rTest}</h1>
                  </Button>
                  <Button onClick={sTestTwo} className="container__result">
                    <h1 className="head__2">tTest 2 var</h1>
                    <h1 className="text-xl text-center text-white">{rTestTwo}</h1>
                  </Button>
                  </>
                  }
                  {typeRes == 8 && 
                  <>
                  <h1 className="head">Остальное</h1>
                  <h1 className="text-xl text-center mb-[20px] text-white">Введите число разбиений</h1>
                  <Counter className="mb-[20px]" value={combin} setValue={setCombin} step={1} min={1} max={10}/>
                  <Button onClick={sChunk} className="container__result">
                    <h1 className="head__2">Чанки</h1>
                    <h1 className="text-xl text-center text-white">{rChunk?.join(' | ')}</h1>
                  </Button>
                  <Button onClick={sCombin} className="container__result">
                    <h1 className="head__2">Комбинации</h1>
                    <h1 className="text-xl text-center text-white">{rCombin?.join(' | ')}</h1>
                  </Button>
                  <Button onClick={sEcsces} className="container__result">
                    <h1 className="head__2">Вставление</h1>
                    <h1 className="text-xl text-center text-white">{rEcsces}</h1>
                  </Button>
                  </>
                  }
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
