import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useEffect, useRef, useState, useCallback } from "react";
import useOutsideMouseUp from "../hooks/useOutsideMouseUp";
import classNames from "classnames";

interface IScroll extends React.HTMLAttributes<HTMLElement>{
  type?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
}

const Scroll = ({children,className}:IScroll) => {
  
  const [scrollFocus , setScrollFocus] = useState<boolean>(false)
  const [scrollMove , setScrollMove] = useState<number>(0)
  const [scrollViewState , setScrollViewState] = useState<number>(0)
  const scrollView = useRef<number>(0)
  const [scrollViewMax , setScrollViewMax] = useState<number>(0)
  const [scrollSensetive , setScrollSensetive] = useState<number>(0.8)
  const [scrollSize,setScrollSize] = useState<number>(25)
  const [clientClick,setClientClick] = useState<any>(0)

  const area = useRef<any>(null)
  const scrollerArea = useRef<any>(null)

  useEffect(()=>{
    let percent_view = area.current.offsetParent.clientHeight
    let percent_all = area.current.clientHeight
    let percent_scroll_size = percent_view * 100 / percent_all
    let percent_scroll_max = 100-percent_scroll_size
    console.log(percent_all)
    console.log(percent_view)
    console.log(percent_scroll_size)
    console.log(`Диапазон работы scroll 0-${100-percent_scroll_size}`)
    console.log(`Диапазон работы scroll 0-${(100-percent_scroll_size) * percent_all / 100}`)

    setScrollSize(percent_scroll_size)
    setScrollViewMax(percent_scroll_max)
  },[])
  
  const mopuseEnterHandler = (event:any) => {setScrollFocus(true)}
  const mopuseLeaveHandler = (event:any) => {setScrollFocus(false)}

  const scrollHandler = (event:any) => {
    let percent_all = area.current.clientHeight
    let percent_view = area.current.offsetParent.clientHeight
    let percent_move = event.deltaY * scrollSensetive * 100 / percent_all
    console.log(percent_move)
    if(scrollView.current + percent_move > scrollViewMax){
      scrollView.current = (scrollViewMax)
      setScrollViewState(scrollView.current)
    }else if(scrollView.current + percent_move < 0){
      scrollView.current = (0)
      setScrollViewState(scrollView.current)
    }else{
      scrollView.current = (scrollView.current + percent_move)
      setScrollViewState(scrollView.current)
    }
  }

  const thumbMouseDown = (event:any) =>{
    // event.preventDefault()
    setClientClick(event.clientY)
    console.clear()
    document.addEventListener('mousemove', handleDrag)
  }
  const thumbMouseUp = () =>{
    document.removeEventListener('mousemove', handleDrag)
  }
  const thumb = useOutsideMouseUp(thumbMouseUp)

  const btnScrollUp = (event:any) =>{
    let percent_view = area.current.offsetParent.clientHeight
    let percent_all = area.current.clientHeight
    let percent_scroll_size = percent_view * 100 / percent_all
    let percent_scroll_max = 100-percent_scroll_size
    if(scrollView.current <= 0){
      scrollView.current = 0
      setScrollViewState(scrollView.current)
    }
    else{scrollView.current = (scrollView.current-10*scrollSensetive)
      setScrollViewState(scrollView.current)}
  }
  const btnScrollDown = (event:any) =>{
    let percent_view = area.current.offsetParent.clientHeight
    let percent_all = area.current.clientHeight
    let percent_scroll_size = percent_view * 100 / percent_all
    let percent_scroll_max = 100-percent_scroll_size
    if(scrollView.current >= percent_scroll_max){
      scrollView.current = (percent_scroll_max)
      setScrollViewState(scrollView.current)
    }
    else{scrollView.current = (scrollView.current+10*scrollSensetive)
      setScrollViewState(scrollView.current)}
  }

  const handleDrag = useCallback((event:any) =>{ 
    let percent_thumb_size = thumb.current.clientHeight
    let percent_view = scrollerArea.current.offsetParent.clientHeight
    let percent_all = scrollerArea.current.clientHeight
    let percent_scroll_size = percent_thumb_size * 100 / percent_all
    let percent_scroll_max = 100-percent_scroll_size
    let percent_move =((scrollView.current+(clientClick-event.clientY))/(percent_all/100))*(-1)
    console.group()
    console.log(event.clientY)
    console.log(clientClick)
    console.log(percent_all)
    console.log(percent_scroll_size)
    console.log("Текущая позиция",scrollView.current)
    console.log("Клик по scrollArea",scrollerArea.current.getAttribute("data-click"))
    console.log("Смещение мышки",event.clientY)
    console.log("Смещение относительно клика по scrollArea",scrollerArea.current.getAttribute("data-click")-event.clientY)

    if (percent_move >= percent_scroll_max){
      scrollView.current = (percent_scroll_max)
      setScrollViewState(scrollView.current)
    console.log("сраюотал макс")
    }
      
    else if (percent_move < 0){
      scrollView.current = (0)
      setScrollViewState(scrollView.current)
      console.log("сработал 0")
    }
    else{
      scrollView.current = (percent_move)
      setScrollViewState(scrollView.current)
      console.log("сраюотал скролл")
    }
    console.groupEnd()
  },[clientClick])

  const scrollAreaMouseDown = (event:React.MouseEvent<HTMLElement>) => {
    setClientClick(event.clientY)
  }

  useEffect(()=>{
    let percent_all = area.current.clientHeight
    setScrollMove(percent_all / 100 * scrollView.current)
  },[scrollView.current])

  const styleScrollArea =  classNames('overflow-hidden max-w-[800px] relative',className)
  const styleScroller = classNames({
    "opacity-25":!scrollFocus,
  },'absolute top-0 bottom-0 right-0 bg-stone-200 w-[25px] mt-[25px] mb-[25px]')
  
  return ( 
    <>
      <div className={styleScrollArea} onWheel={scrollHandler} onMouseEnter={mopuseEnterHandler} onMouseLeave={mopuseLeaveHandler}>
        <div className="absolute w-full" style={{top:`${-scrollMove}px`}} ref={area}>{children}</div>
        <button onClick={btnScrollUp} className="flex justify-center items-center absolute bg-stone-400 right-0 float-right w-[25px] h-[25px] rounded-none shadow-none active:bg-stone-600 hover:bg-stone-500"><FaLongArrowAltUp color="white"/></button>
        <div className={styleScroller} onMouseDown={scrollAreaMouseDown} ref={scrollerArea} data-click={clientClick}>
          <div className='absolute w-full p-2 bg-stone-400' 
            onMouseDown={thumbMouseDown}
            ref={thumb}
            data-scroll={scrollViewState}
            style={{
              top:`${scrollViewState}%`,
              height:`${scrollSize}%`,
            }}>
          </div>
        </div>
        <button onClick={btnScrollDown} className="flex justify-center items-center absolute bg-stone-400 right-0 bottom-0 float-right w-[25px] h-[25px] rounded-none shadow-none active:bg-stone-600 hover:bg-stone-500"><FaLongArrowAltDown color="white"/></button>
      </div>
    </>
   );

}
export default Scroll;