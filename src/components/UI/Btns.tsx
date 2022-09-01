import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { setAuth } from '../../store/slice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import styles from './Btns.module.scss'

interface IBtns {
  authUserName: string | number,
  authPassword: string | number
}

const Btns:FC<IBtns> = ({authUserName, authPassword}) => {
    const {username, password} = useAppSelector(state => state.slice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // Validate auth
    const handleClick = () => {
        if(authUserName === '' || authPassword === '') {
          alert('Error!')
          navigate('/auth')
        }
        if(authPassword.toString().length < 8) {
          alert('Error!')
          navigate('/auth')
        }
        if (authUserName && authPassword.toString().length >= 8) {
          dispatch(setAuth())
        }
        if(authUserName !== username || authPassword !== password) {
          alert('Incorrect username or password')
          navigate('/auth')
        }
        if(authUserName === '' || authPassword === '') {
          alert('Please regiester now')
          navigate('/auth')
        }
      }

  return (
    <div className={styles.btns}>
        <Button className={styles.btn} onClick={() => handleClick()}>
          <Link to='/'>Log in</Link>
        </Button>
        <p>or</p>
        <Button className={styles.btn}>
          <Link to='/reg'>Register now</Link>
        </Button>
        </div>
  )
}

export default Btns