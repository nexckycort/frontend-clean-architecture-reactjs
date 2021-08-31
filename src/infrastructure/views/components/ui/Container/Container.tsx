import React, { FC } from 'react'
import cn from 'classnames'

interface Props {
  className?: string
  children?: any
  el?: HTMLElement
}

const Container: FC<Props> = ({ children, className, el = 'div' }) => {
  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> = el as any

  const rootClass = cn(className)

  return <Component className={rootClass}>{children}</Component>
}

export default Container
