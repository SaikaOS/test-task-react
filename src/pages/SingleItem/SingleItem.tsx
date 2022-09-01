import { FC } from 'react'
import Header from '../../components/Header/Header'
import Table from '../../components/UI/Table'
import styles from './SingleItem.module.scss'

const SingleItem:FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Table />
      </div>
  )
}

export default SingleItem