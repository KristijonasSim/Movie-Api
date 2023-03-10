import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext({
  state: { 
    user: null, 
  },
  dispatch: () => {}
})

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
      };
    case 'REGISTER':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, [], () => {
    const localData = localStorage.getItem('userData');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(state))
  }, [state])


  console.log('AuthContext state: ', state)
 

  return (
    <AuthContext.Provider value={{ ...state,  dispatch }}>
      {children}
    </AuthContext.Provider>
  )

}
