import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

import { useAuth } from 'infrastructure/views/hooks'

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { auth } = useAuth()
  const { authenticated } = auth

  if (authenticated) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default PrivateRoute
