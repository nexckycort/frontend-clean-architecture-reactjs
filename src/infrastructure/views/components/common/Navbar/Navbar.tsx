/* eslint-disable multiline-ternary */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { useAuth, useRouter } from 'infrastructure/views/hooks'
import { routes } from 'infrastructure/views/routes'

import s from './Navbar.module.scss'

const Navbar = (): JSX.Element | null => {
  const { location } = useRouter()
  const { pathname } = location

  const { auth, logout } = useAuth()
  const { authenticated } = auth

  if (pathname === '/login') return null

  return (
    <div className={s.topnav} id="myTopnav">
      {routes
        .filter((route) => (authenticated ? true : route.public === true))
        .map(({ title, path }) => {
          const rootClass = pathname === path ? s.active : ''
          return (
            <Link className={rootClass} to={path} key={path}>
              {title}
            </Link>
          )
        })}
      {authenticated ? <a onClick={async () => await logout(true)}>Logout</a> : <Link to="/login">Login</Link>}
    </div>
  )
}

export default withRouter(Navbar)
