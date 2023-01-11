import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { userApi } from '../api/userApi'


const UseLogin = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const { dispatch } = useAuthContext()



  const checkAuthorization = (loginData, mockedUsersData) => {

    const checkValues = mockedUsersData.find(person => person.email === loginData.email && person.password === loginData.password)
    if (checkValues){
      dispatch({ type: 'LOGIN', payload: loginData })
    }else{
      setError(true)
      setIsLoading(false)
      setErrorMsg('Email or / and password is incorect')
    }
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
  }

  return { login, isLoading, error, errorMsg }
}

export default UseLogin