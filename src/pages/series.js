import styles from '../styles/pages/Series.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'
import { fetchEntries } from '../utils/contentful'
import Link from 'next/link'

const Series = ({ data }) => {
  console.log(data)

  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Series</h1>
          {data.map(item => (
            <div key={item.slug}>
              <Link href={`/serie/${item.slug}`}>
                <a>
                  {item.title} - {item.year}
                </a>
              </Link>
            </div>
          ))}
        </main>
      </MainLayout>
    </>
  );
}

export default Series;

export async function getStaticProps() {
  const res = await fetchEntries({
    content_type: 'series'
  })
  const data = await res.map((p) => p.fields)

  return { props: { data },
  }
}