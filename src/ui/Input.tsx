import classNames from 'classnames'
import { typeStyledInput } from '../Style/Style'

interface IInput extends React.HTMLAttributes<HTMLInputElement>{
  type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
  name: string
}
export const Input = ({type = "primary",className,content,onChange,...props}:IInput) => {

  const styleInput = classNames(
    className,
    typeStyledInput[type],
    "border-2 border-stone-400 outline-none rounded-md p-2 shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.1)] transition"
  )

  return ( 
    <>
      <input className={styleInput} type="text" name='vs' value={content} onChange={onChange}/>
    </>
   );
}
export const InputNumber =({type = "primary",className,content,onChange,...props}:IInput)=>{

  const styleInput = classNames(
    className,
    typeStyledInput[type],
    "border-2 border-stone-400 outline-none rounded-md p-2 shadow-[inset_0_0_10px_2px_rgba(0,0,0,0.1)]"
  )

  return ( 
    <>
      <input className={styleInput} type="text" name='vs' value={content} onChange={onChange}/>
    </>
   );
}