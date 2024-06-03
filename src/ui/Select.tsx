import { useState } from "react";
import {Input} from "./Input";
import classNames from "classnames";
import useOutsideClick from "../hooks/useClickOutside";
import { typeStyledSelect, typeAlignSelect } from "../Style/Style";

interface IOption {
  value: string|number
  title: string|number|React.ReactNode
}

interface ISelect extends React.HTMLAttributes<HTMLElement> {
  type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
  align?: 'center'|'start'|'end'
  name: string
  value: string|number
  setValue: (value:number|string)=>void
  options: IOption[]
}

export const Select = ({name,className,options, type = "primary", align = 'start', value, setValue}:ISelect) => {
  const [show,setShow] = useState<boolean>(false)

  const showOptions = () => setShow(true)
  const hideOptions = () => setShow(false)
  const curnOptions = (item:IOption) => {
    hideOptions()
    setValue(item.value)
  }

  const opt = useOutsideClick(hideOptions)

  const styleSelect = classNames(
    className,
    typeStyledSelect[type],
    typeAlignSelect[align],
    "transition"
  )

  return ( 
  <div className="relative" ref={opt}>
      <Input className="hidden" name={name}/>
      <Title className={styleSelect} onClick={!show?showOptions:hideOptions}>{options.find(item=>item.value===value)?.title??"-"}</Title>
      {show && 
        <div className="absolute top-100 border-2 border-t-0 w-full rounded-b-md z-[1000]">
          {options.map((item:IOption,index)=><Options key={index} className={styleSelect} onClick={()=>curnOptions(item)}>{item.title}</Options>)}
        </div>
      }
  </div>
  );
}
const Title = ({className,children,onClick,...props}:React.HTMLAttributes<HTMLElement>) => {
  return(
    <>
    <div className={classNames("flex items-center w-[500px] border-stone-400 border-2 p-2 rounded-t-md shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.1)] cursor-pointer " + className)} onClick={onClick}>{children}</div>
    </>
  )
}

const Options = ({className,children,onClick,...props}:React.HTMLAttributes<HTMLElement>) =>{
  return(
    <>
      <span className={classNames("relative flex items-center border-stone-400 border-2 border-t-0 p-2 cursor-pointer shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.1)] ") + className} onClick={onClick}>{children}</span>
    </>
  )
}