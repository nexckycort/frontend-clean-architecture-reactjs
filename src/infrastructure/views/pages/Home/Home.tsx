import React from 'react'

import { ToPage } from './components'

import s from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <div className={s.center}>
      <h1>HomeView</h1>
      <ToPage />
    </div>
  )
}

export default Home
