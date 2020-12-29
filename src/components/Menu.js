import styles from '../styles/components/Menu.module.scss'
import { menu } from '../static/menu.json'
import Link from 'next/link'

const Series = () => {
  return (
    <div className={styles.main}>
      <ul>
        {menu.map(item => (
          <li key={item.text}>
            <Link href={item.path}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Series;