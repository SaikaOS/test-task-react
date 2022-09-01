import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Input from '../../components/UI/Input'
import { setExit } from '../../store/slice'
import { useAppDispatch } from '../../store/store'
import styles from './Auth.module.scss'
import Btns from '../../components/UI/Btns'

const Auth:FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [authUserName, setAuthUserName] = useState('')
  const [authPassword, setAuthPassword] = useState('')

  // logged out
  if(location.pathname === '/auth') {
    dispatch(setExit())
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.auth}>
        <h1 className={styles.title}>Authorization</h1>
        <Input 
        type='text' 
        placeholder='Username' 
        className={styles.input}
        value={authUserName}
        onChange={(e) => setAuthUserName(e.target.value)}
        />
        <Input 
        type='password' 
        placeholder='Password' 
        className={styles.input}
        value={authPassword}
        onChange={(e) => setAuthPassword(e.target.value)}
        />
        {/* btns container */}
        <Btns authUserName={authUserName} authPassword={authPassword}/>
    </div>
    </div>
  )
}

export default Auth