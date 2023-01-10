import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { userApi } from '../api/userApi'

const UseLogin = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (values) => {
    setIsLoading(true)
    setError(null)
    userApi.userLogin(values)
      .then(({ data }) => {
        dispatch({ type: 'LOGIN', payload: data })
        setIsLoading(false)
      }
      )
      .catch(err => {
        setError(err)
        setIsLoading(false)
        setErrorMsg('Email or / and password is incorect')
      }
      )
  }

  return { login, isLoading, error, errorMsg }
}

export default UseLogin