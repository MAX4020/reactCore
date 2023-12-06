import React from "react";
type IUseOutsideClickCallback = ()=>void

export default function useOutsideMouseUp(callback:IUseOutsideClickCallback){
  const ref = React.useRef<any>();

  React.useEffect(() => {
    const handleClick = (event:any) => {
      ref.current && callback()
    };
    document.addEventListener('mouseup', handleClick);

    return () => {
      document.removeEventListener('mouseup', handleClick);
    };
  }, []);

  return ref;
};