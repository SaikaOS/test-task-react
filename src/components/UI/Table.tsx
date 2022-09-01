import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleUserQuery } from '../../services/users'
import styles from '../../pages/SingleItem/SingleItem.module.scss'

const Table:FC = () => {
  const { id } = useParams()
  const {data} = useGetSingleUserQuery(id)
  return (
    <table className={styles.border}>
          <tr className={styles.border}>
            <th className={styles.border}>ID</th>
            <th className={styles.border}>First Name</th>
            <th className={styles.border}>Last Name</th>
            <th className={styles.border}>Email</th>
            <th className={styles.border}>Avatar</th>
          </tr>
          <tr className={styles.border}>
          <td className={styles.border}>{data?.id}</td>
          <td className={styles.border}>{data?.first_name}</td>
          <td className={styles.border}>{data?.last_name}</td>
          <td className={styles.border}>{data?.email}</td>
          <td>
          <img src={data?.avatar} className={styles.ava}/>
          </td>
          </tr>
        </table>
  )
}

export default Table