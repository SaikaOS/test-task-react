import Header from '../../components/Header/Header'
import styles from './NotFound.module.scss'

const NotFound = () => {
  // not found page
  return (
    <div className={styles.app}>
      <Header />
      <p className={styles.title}>This page does not exist</p>
    </div>
  )
}

export default NotFound