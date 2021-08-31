import React, { InputHTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onInput?: (...args: any[]) => any
}

const Input: React.FC<Props> = (props) => {
  const { className, children, onInput, ...rest } = props

  const rootClassName = cn(className)

  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>): any => {
    if (onInput !== undefined) {
      onInput(event.target.value)
    }
    return null
  }

  return <input className={rootClassName} onInput={handleOnInput} autoCorrect="off" autoCapitalize="off" spellCheck="false" {...rest} />
}

export default Input
