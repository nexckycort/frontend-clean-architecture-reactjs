import { useEffect, useState } from 'react'

import { AuthContext } from 'infrastructure/views/hooks/useAuth/AuthContext'
import { sessionService } from 'domain/services/session.service'
import { Logger } from 'infrastructure/helpers/logger'
import { UserDTO } from 'infrastructure/dto/UserDTO'
import { User } from 'domain/models/User'

export interface Auth {
  token: string
  authenticated: boolean
  user: User
}

const useAuthProvider = () => {
  const token = localStorage.getItem('token') ?? ''
  const authenticated = token !== ''
  const [auth, setAuth] = useState({
    token,
    authenticated,
    user: null
  } as unknown as Auth)

  const login = async (userDTO: UserDTO) => {
    const { error, response } = await sessionService.auth(userDTO)
    if (!error) {
      setAuth({
        ...auth,
        token: response.data.token,
        authenticated: true,
        user: response.data.user
      })
      localStorage.setItem('token', response.data.token)
    }

    return { error, response }
  }

  const logout = async (api = false) => {
    if (api) await sessionService.logout()
    localStorage.removeItem('token')
    window.location.reload()
  }

  const verifyToken = async () => {
    const { error, response } = await sessionService.verify()
    if (error) throw new Error(response.message)
    return response
  }

  useEffect(() => {
    if (authenticated) {
      verifyToken()
        .then((response) => {
          setAuth({
            ...auth,
            token: response.data.token,
            user: response.data.user
          })
        })
        .catch(() => {
          alert('session vencida')
          setTimeout(() => {
            logout().catch(Logger.error)
          }, 2000)
        })
    }
  }, [])

  return {
    login,
    auth,
    logout
  }
}

const AuthProvider = ({ children }: any) => {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
