
import styles from '../styles/pages/Index.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const Home = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Home</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default Home;