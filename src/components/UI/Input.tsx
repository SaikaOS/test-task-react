import React, { ChangeEventHandler, FC } from 'react'

interface Input {
    type: string,
    placeholder: string,
    className: string,
    value?: string | number,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input:FC<Input> = (props) => {
  return (
   <input {...props} />
  )
}

export default Input