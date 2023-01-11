import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { userApi } from '../api/userApi'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const UseLogin = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const { dispatch } = useAuthContext()
  const { user } = useContext(AuthContext)

  const checkAuthorization = (loginData, mockedUsersData) => {

    const checkValues = mockedUsersData.find(person => person.email === loginData.email && person.password === loginData.password)
    if (checkValues){
      dispatch({ type: 'LOGIN', payload: loginData })
    }
    console.log('gaidys', checkValues)

  }

  const login = async (values) => {
    setIsLoading(true)
    setError(null)
    userApi.userLogin(values)

      .then(({ data }) => {
        checkAuthorization(values, data)
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