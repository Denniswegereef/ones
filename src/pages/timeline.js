import styles from '../styles/pages/Timeline.module.scss'
import MainLayout from '../layouts/Main'
import MainHead from '../components/Head'

const Timeline = () => {
  return (
    <>
      <MainHead/>
      <MainLayout>
        <main className={styles.main}>
          <h1>Timeline</h1>
        </main>
      </MainLayout>
    </>
  );
}

export default Timeline;