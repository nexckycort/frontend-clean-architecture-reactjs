import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'infrastructure/views/hooks'

const ToPage: React.FC = () => {
  const { auth } = useAuth()
  const { authenticated } = auth

  return <>{authenticated ? <Link to={'/admin'}>to Admin</Link> : <Link to={'/login'}>to Log In</Link>}</>
}

export default ToPage
