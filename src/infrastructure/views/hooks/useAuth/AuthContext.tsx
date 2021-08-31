import React from 'react'

import { UserDTO } from 'infrastructure/dto/UserDTO'
import { Session } from 'domain/models/Session'
import { Auth } from './AuthProvider'

export interface AuthOptions {
  auth: Auth
  login: (userDTO: UserDTO) => Promise<{
    error: boolean
    response: {
      data: Session
      message: string
      statusCode: string
    }
  }>
  logout: (api?: boolean) => Promise<void>
}

const AuthContext = React.createContext<AuthOptions>({} as unknown as AuthOptions)

export { AuthContext }
