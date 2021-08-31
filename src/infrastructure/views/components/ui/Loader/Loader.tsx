import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Loader.module.scss'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: string
  show?: boolean
}

const Loader: FC<Props> = ({ children, show = true }) => {
  return <div className={cn(s.loader, show ? s.loaderShow : '')}>{children}</div>
}

export default Loader
