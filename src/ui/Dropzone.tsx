import classNames from "classnames";
import {useState} from "react"
import { typeStyledDropzone, typeStyledLabel } from "../Style/Style";

export interface IDropzone extends React.HTMLAttributes<HTMLButtonElement>{
	type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
}

const Dropzone = ({type="primary",className}:IDropzone) => {
    const [dropzoneActive, setDropzoneActive] = useState(false);
  
    function handleDrop(e:any) {
      e.preventDefault();
    }
  
    function handleUpload(e:any) {
      e.preventDefault();
    }

    const styleBtn = classNames(
    "rounded-[5px] flex items-center justify-center w-[30%] h-[50%] mr-[20px]",
    typeStyledLabel[type])

    const styleDropzone = classNames(
      "border-2 border-stone-800 w-[70%] h-[100%] flex items-center justify-center",
      typeStyledDropzone[type],
      {"border-dashed ": dropzoneActive}
    )

    return ( 
        <>
        <div className={classNames("flex justify-center items-center " + className, typeStyledDropzone[type]+"/25")}>
          <input className="hidden" onChange={handleUpload} type="file" id="file" />
            <label htmlFor="file" className = {styleBtn} id="btn__open">
              Open
            </label>
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
              className={styleDropzone}
            >
              Drop files here
          </div> 
        </div>
        </>
     );
}
 
export default Dropzone;