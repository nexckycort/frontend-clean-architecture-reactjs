import React, { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

const Button: React.FC<Props> = (props) => {
  const { className, color = 'primary', children, ...rest } = props

  const rootClass = cn('btn', `btn-${color}`, className)

  return (
    <button className={rootClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
