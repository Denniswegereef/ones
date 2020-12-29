import styles from '../styles/pages/Sneakers.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'
import { fetchEntries } from '../utils/contentful'
import Link from 'next/link'

const Sneakers = ({ data }) => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Sneakers</h1>
          {data.map(item => (
            <div key={item.slug}>
              <Link href={`/sneaker/${item.slug}`}>
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

export default Sneakers;

export async function getStaticProps() {
  const res = await fetchEntries({
    content_type: 'sneakers'
  })
  const data = await res.map((p) => p.fields)

  return { props: { data },
  }
}