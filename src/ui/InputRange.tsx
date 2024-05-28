
export interface IInputRange extends React.HTMLAttributes<HTMLButtonElement>{
	type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
}

const InputRange = () => {
    return ( 
        <>
            <input type="range" />
        </>
     );
}
 
export default InputRange;