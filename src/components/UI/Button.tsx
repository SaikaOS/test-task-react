import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface IButton {
    className: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode
}

const Button:FC<IButton> = (props) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button