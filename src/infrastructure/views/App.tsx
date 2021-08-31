import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthProvider } from 'infrastructure/views/hooks/useAuth'

import { Container, Loader } from 'infrastructure/views/components/ui'
import { PrivateRoute } from 'infrastructure/views/components/auth'
import { Navbar } from 'infrastructure/views/components/common'
import { routes } from 'infrastructure/views/routes'

const HomeView = lazy(async () => await import('infrastructure/views/pages/Home'))
const LoginView = lazy(async () => await import('infrastructure/views/pages/Login'))

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/login" exact component={LoginView} />
            <Container className="container">
              {routes.map(({ path, component }) => (
                <PrivateRoute key={path} exact path={path} component={component} />
              ))}
            </Container>
          </Switch>
        </Suspense>
      </Router>
    </AuthProvider>
  )
}

export default App
