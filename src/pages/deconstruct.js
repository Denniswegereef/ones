import styles from '../styles/pages/Deconstruct.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const Deconstruct = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Deconstruct</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default Deconstruct;