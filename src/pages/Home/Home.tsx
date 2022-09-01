import { FC } from 'react'
import Header from '../../components/Header/Header'
import { useGetUsersQuery } from '../../services/users'
import UserItem from '../User/UserItem'
import styles from './Home.module.scss'

const Home:FC = () => {
  // fetching data from api
  const {data} = useGetUsersQuery()
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
      {data?.map(user => (
        /* render users */
        <UserItem {...user} key={user.id}/>
      ))}
      </div>
    </div>
  )
}

export default Home