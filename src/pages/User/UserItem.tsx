import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../../services/users'
import styles from './User.module.scss'

const UserItem:FC<IUser> = (user) => {
  // Each User Component
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`users/${user.id}`)}>  
          <p className={styles.name}>{user.first_name}</p>
          <img src={user.avatar} alt="avatar" className={styles.ava}/>
        </div>
  )
}

export default UserItem