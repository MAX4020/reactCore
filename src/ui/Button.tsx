import classNames from 'classnames'
import React from 'react'
import { typeStyledButton } from '../Style/Style'

export interface IButton extends React.HTMLAttributes<HTMLButtonElement>{
	type?:	'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'contrast' | 'disabled'
	onClick?: () => void
}

export const Button = ({type="primary",className,children,onClick}:IButton) => {

	const styleButton = classNames(
		className,
		typeStyledButton[type],
		"p-2 rounded-md shadow-[0px_5px_0px_0px] active:shadow-none active:top-[5px] active:relative"
	)

	return (
			<button onClick={onClick} className={styleButton}>
				{children}
			</button>
	)
}
