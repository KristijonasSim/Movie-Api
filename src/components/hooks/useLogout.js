import { useAuthContext } from './useAuthContext'

const UseLogout = () => {

  const { dispatch } = useAuthContext()

  const logout = () => {
    dispatch({ type: 'LOGOUT'})
  }

return { logout }
}

export default UseLogout