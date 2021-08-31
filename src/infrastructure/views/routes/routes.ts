import { lazy } from 'react'

import { Routes, routing } from 'infrastructure/lib/routing'

const HomeView = lazy(async () => await import('infrastructure/views/pages/Home'))
const AdminView = lazy(async () => await import('infrastructure/views/pages/Admin'))

const appRoutes: Routes[] = [
  {
    title: 'Home',
    path: '/',
    public: true,
    component: HomeView
  },
  {
    title: 'Admin',
    path: '/admin',
    component: AdminView
  }
]

const routes = routing(appRoutes)

export default routes
