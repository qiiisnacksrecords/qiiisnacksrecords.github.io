/** @jsx h */
import { h } from 'preact'
import { Router } from 'preact-router'
import { Welcome, Home } from './components'

import './styles.less'

const App = () => (
  <Router>
    <Welcome path='/' />
    <Home path='/home/:page?' />
  </Router>
)

export default App
