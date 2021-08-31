export interface SessionDTO {
  user: User
  token: string
}

interface User {
  name: string
  email: string
}
