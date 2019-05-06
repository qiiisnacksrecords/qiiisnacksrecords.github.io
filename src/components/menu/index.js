/** @jsx h */
import { h } from 'preact'
import { Link } from 'preact-router'
import styles from './styles.less'

const Menu = () => (
  <main class={styles.menu}>
    <ul>
      <li>
        <Link href='/home/latest-releases'>最新发行<br />Latest Releases</Link>
      </li>

      <li>
        <Link href='/home/recent-events'>近期演出<br />Recent Events</Link>
      </li>

      <li>
        <Link href='#'>BANDCAMP</Link>
        <br /><Link href='#'>DOUBAN</Link>
        <br /><Link href='#'>FB</Link>
      </li>
    </ul>
  </main>
)

export default Menu
