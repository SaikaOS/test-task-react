import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import { setAuth, setFullName, setPassword, setUserName } from '../../store/slice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import styles from './Registration.module.scss'

const Registration:FC = () => {
  const {fullName, username, password} = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    if(username === '' || password === '') {
      alert('Error!')
      navigate('/auth')
    }
    if(password.toString().length < 8) {
      alert('Error!')
      navigate('/auth')
    }
    if (username && password.toString().length >= 8) {
      dispatch(setAuth())
    }
    if(username !== username || password !== password) {
      alert('Incorrect username or password')
      navigate('/auth')
    }
    if(username === '' || password === '') {
      alert('Please regiester now')
      navigate('/auth')
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <h1 className={styles.title}>Registration form</h1>
      <Input 
      className={styles.input} 
      type='text' 
      placeholder='Full Name'
      value={fullName}
      onChange={(e) => dispatch(setFullName(e.target.value))}
      />
      <Input 
      className={styles.input} 
      type='text' 
      placeholder='Username'
      value={username}
      onChange={(e) => dispatch(setUserName(e.target.value))}
      />
      <Input 
      className={styles.input} 
      type='password' 
      placeholder='Password'
      value={password}
      onChange={(e) => dispatch(setPassword(e.target.value))}
      />
      <Button className={styles.btn} onClick={() => handleClick()}>
        <Link to='/auth'>
          Let's Go
        </Link>
      </Button>
    </div>
  )
}

export default Registration