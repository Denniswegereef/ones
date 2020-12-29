
import styles from '../styles/pages/About.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const About = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>About</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default About;