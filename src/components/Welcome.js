/** @jsx h */
import { h } from 'preact'
import { Link } from 'preact-router'
import Logo from '../assets/logo.jpg'

const styles = {
  main: {
    width: '100%',
    height: '100%'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '50%',
    height: 'auto'
  }
}

const Welcome = () => (
  <main style={styles.main}>
    <Link href='/home' style={styles.link}>
      <img style={styles.img} alt='welcome' src={Logo} />
    </Link>
  </main>
)

export default Welcome
