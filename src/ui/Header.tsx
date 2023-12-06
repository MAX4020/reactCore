import classNames from "classnames";  

const Header = ({children,className}:React.HTMLAttributes<HTMLButtonElement>) => {

  const styleHeader = classNames(
    className,
    "flex justify-center items-center font-bold text-3xl border-b-4"
  )



  return (
    <span className={styleHeader}>{children}</span>
   );
}
 
export default Header;