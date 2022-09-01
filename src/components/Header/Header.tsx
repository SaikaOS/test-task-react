import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import Button from '../UI/Button'
import styles from './Header.module.scss'

const Header:FC = () => {
  const {username, password, isLoggedIn} = useAppSelector(state => state.slice)
  const locate = useLocation()

  return (
    <div className={styles.header}>
      {
       isLoggedIn && locate.pathname !== '/auth' &&
        <div className={styles.wrapper}>
          <div>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
        <Button className={styles.btn}>
          <Link to='/auth'>
            Exit
          </Link>
        </Button>
        </div>
      }
    </div>
  )
}

export default Header