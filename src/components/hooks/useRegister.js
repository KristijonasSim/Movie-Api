import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { userApi } from "../api/userApi"


const UseRegister = () => {
const [ error, setError ] = useState(null)
const [ isLoading, setIsLoading ] = useState(false)
const { dispatch } = useAuthContext()


const signup = async (values) => {
  setIsLoading(true)
  setError(null)
  userApi.userRegister(values)
    .then(({ data }) => {
      dispatch({type: 'REGISTER', payload: data})
      setIsLoading(true)
    }
      )
      .catch(err => {
        setError(err)
        setIsLoading(false)}
      )
  }

  return { signup, isLoading, error}
}

export default UseRegister