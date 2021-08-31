// import { sessionRepository } from 'infrastructure/repositories/session.repository'
import { UserDTO } from 'infrastructure/dto/UserDTO'
import { Session } from 'domain/models/Session'
import { delay } from 'infrastructure/utils/delay'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5NTY4Mjg4fQ.kvj4RI4sMLuSxMwFxR51yQhF4oOCc_fteqfW7NFT_tA'

export const sessionService = {
  auth: async (userDTO: UserDTO) => {
    // const result = await sessionRepository.auth(userDTO)
    await delay(2000)
    const result = {
      response: {
        data: {} as unknown as Session,
        message: '',
        statusCode: '2000'
      },
      status: 0,
      error: false
    }
    if (userDTO.email === 'admin@mail.com' && userDTO.password === 'admin') {
      result.status = 200
      result.response.message = 'ok'
      result.response.data = {
        user: {
          name: 'admin',
          email: 'admin@mail.com'
        },
        token: TOKEN
      }
    } else {
      result.error = true
      result.status = 401
      result.response.message = 'Incorrect email or password'
      result.response.statusCode = '4001'
    }
    return result
  },
  verify: async (token?: string) => {
    // const result = await sessionRepository.verify(token)
    const result = {
      response: {
        data: {} as unknown as Session,
        message: '',
        statusCode: '2000'
      },
      status: 0,
      error: false
    }
    if (localStorage.getItem('token') === TOKEN) {
      result.status = 200
      result.response.message = 'ok'
      result.response.data = {
        user: {
          name: 'admin',
          email: 'admin@mail.com'
        },
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5NTY4Mjg4fQ.kvj4RI4sMLuSxMwFxR51yQhF4oOCc_fteqfW7NFT_tA'
      }
    } else {
      result.error = true
      result.status = 401
      result.response.message = 'Invalid Token'
      result.response.statusCode = '4001'
    }
    return result
  },
  logout: async () => {
    localStorage.clear()
    await delay(1000)
    // await sessionRepository.logout()
  }
}
