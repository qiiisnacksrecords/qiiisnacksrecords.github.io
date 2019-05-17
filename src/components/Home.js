/** @jsx h */
import { h, Component } from 'preact'
import Header from './header'
import Menu from './menu'
import styles from './home.less'
import createStore from '../vendor/store'

export default class Home extends Component {
  componentDidMount () {
    createStore()
  }

  render () {
    return (
      <main class={styles.home}>
        <Header />
        <Menu />
        <section class={styles.main}>
          <h1>Under active development :D</h1>
        </section>
      </main>
    )
  }
}
