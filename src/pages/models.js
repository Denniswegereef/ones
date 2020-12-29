import styles from '../styles/pages/Models.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const Models = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Models</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default Models;