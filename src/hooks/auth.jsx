import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [data, setData] = useState({})
    async function signIn({email, password}) {
        try{
          const response = await api.post("/sessions", {email, password})
          const {user, token } = response.data

          localStorage.setItem("@RocketFood:user", JSON.stringify(user))
          localStorage.setItem("@RocketFood:token", token)

          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          setData({user, token})
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel fazer o login")
            }
        }
    }

    function signOut () {
      localStorage.removeItem("@RocketFood:user")
      localStorage.removeItem("@RocketFood:token")

      setData({})
    }

    useEffect(() => {
      const user = localStorage.getItem("@RocketFood:user")
      const token = localStorage.getItem("@RocketFood:token")

      if(token && user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setData({
            token,
            user: JSON.parse(user)
        })
      }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn, 
            signOut, 
            user: data.user
            }}>
           {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}