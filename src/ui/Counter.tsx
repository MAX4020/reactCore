import classNames from "classnames"
import { FaLongArrowAltDown,FaLongArrowAltLeft,FaLongArrowAltRight,FaLongArrowAltUp,FaAngleLeft,FaAngleRight,FaAngleUp,FaAngleDown,FaRegArrowAltCircleDown,FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight,FaRegArrowAltCircleUp } from "react-icons/fa"
import { FaPlus,FaMinus} from "react-icons/fa6"
import { Button } from "./Button"
import { typeDirectionCounter} from "../Style/Style"

interface ICounter extends React.HTMLAttributes<HTMLElement>{
  type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
  direction?: 'col'|'row'
  typeIcon?: 'arrow'|'sign'|'angel'|'circleArrow'
  name: string
  value: number
  setValue: (value:number) => void
  step: number
  max:  number
  min:  number
  iconUp?:any
  iconDown?:any
}

const Counter = ({name,iconUp,iconDown,type = "primary",direction = "row",className, typeIcon = "sign",value,step,setValue,max,min,...props}:ICounter) => {
  const plusHandler = () => {
    if(value + step <= max ) 
      setValue(value + step)
  }
  const minusHandler = () => {
    if(value - step >= min ) 
    setValue(value - step)
  }

  const directionCounter = classNames(
    typeDirectionCounter[direction],
  )

    switch(typeIcon){
      case "arrow":
        if (direction === 'col'){
          iconUp = <FaLongArrowAltUp/>
        }
        else{
          iconUp = <FaLongArrowAltLeft/>
        }
        break
      case "sign":
        iconUp = <FaPlus/>
        break
      case "angel":
        if (direction === 'col'){
          iconUp = <FaAngleUp/>
        }
        else{
          iconUp = <FaAngleLeft/>
        }
        break
      case "circleArrow":
        if (direction === 'col'){
          iconUp = <FaRegArrowAltCircleUp/>
        }
        else{
          iconUp = <FaRegArrowAltCircleLeft/>
        }
        break
      }
    switch(typeIcon){
      case "arrow":
        if (direction === 'col'){
          iconDown = <FaLongArrowAltDown/>
        }
        else{
          iconDown = <FaLongArrowAltRight/>
        }
        break
        case "sign":
          iconDown = <FaMinus/>
          break
        case "angel":
          if (direction === 'col'){
            iconDown = <FaAngleDown/>
          }
          else{
            iconDown = <FaAngleRight/>
          }
          break
         case "circleArrow":
           if (direction === 'col'){
             iconDown = <FaRegArrowAltCircleDown/>
           }
           else{
             iconDown = <FaRegArrowAltCircleRight/>
           }
           break
         }

  return ( 
    <div className={classNames('flex items-center rounded-sm',className,directionCounter)}>
    <Button className={classNames("cursor-pointer flex justify-center items-center !shadow-none active:!top-0",directionCounter)} type={type} onClick={plusHandler}>{iconUp}</Button>
    <span className="w-full flex justify-center items-center overflow-hidden">{value}</span>
    <input type="text" name={name} value={value} readOnly hidden/>
    <Button className={classNames("cursor-pointer flex justify-center items-center !shadow-none active:!top-0",directionCounter)} type={type} onClick={minusHandler}>{iconDown}</Button>
  </div>
   );
}
 
export default Counter;