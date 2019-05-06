/** @jsx h */
import { h } from 'preact'
import { Link } from 'preact-router'
import Logo from '../../assets/logo.jpg'
import styles from './styles.less'

const Header = () => (
  <aside class={styles.header}>
    <ul>
      <li>
        <Link href='/home'><img alt='logo' src={Logo} /></Link>
      </li>

      <li>
        <Link href='/home/news'>新闻<br />News</Link>
      </li>

      <li>
        <Link href='/home/artists'>音乐人<br />Artists</Link>
      </li>

      <li>
        <Link href='/home/events'>演出<br />Events</Link>
      </li>

      <li>
        <Link href='/home/discography'>发行<br />Discography</Link>
      </li>

      <li>
        <Link href='/home/merch'>商店<br />Merch</Link>
      </li>

      <li>
        <Link href='/home/about'>关于<br />About</Link>
      </li>
    </ul>
  </aside>
)

export default Header
