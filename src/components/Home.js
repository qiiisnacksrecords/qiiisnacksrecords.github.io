/** @jsx h */
import { h } from 'preact'
import Header from './header'
import Menu from './menu'
import styles from './home.less'

const Home = () => (
  <main class={styles.home}>
    <Header />
    <Menu />
    <section class={styles.main}>
      This is a main section
    </section>
  </main>
)

export default Home
