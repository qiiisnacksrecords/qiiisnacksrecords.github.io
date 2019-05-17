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
        <a href='https://qiiisnacksrecords.bandcamp.com'>BANDCAMP</a>
        <br /><a href='https://site.douban.com/QSR'>DOUBAN</a>
        <br /><a href='https://www.facebook.com/QiiiSR'>FB</a>
      </li>
    </ul>
  </main>
)

export default Menu
