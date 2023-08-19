import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";

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
    
    const [product, setProduct] = useState({})
    async function getProduct(id) {
        try{
            useEffect(() => {
                async function fetcProducts () {
                    const Id = await id
                    const response = await api.get(`/products/${Id}`)
                    setProduct(response.data)
                }
                fetcProducts()
            }, [])
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

    async function updatedProducts({product, id}) {
      try{
        await api.put(`/products/${id}`, product)
      }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel fazer o login")
            }
        }
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
            updatedProducts,
            getProduct,
            user: data.user,
            product
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