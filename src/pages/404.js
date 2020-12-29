import styles from '../styles/pages/Error.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const Error = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>error</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default Error;