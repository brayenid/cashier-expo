import { createContext, ReactNode, useContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

interface RegisterProps {
  name: string
  email: string
  password: string
  role: string
}

interface LoginProps {
  email: string
  password: string
}

interface AuthStateProps {
  isAuthenticated: boolean
  token: string
}

interface AuthProps {
  onRegister?: (props: RegisterProps) => Promise<any>
  onLogin?: (props: LoginProps) => Promise<any>
  onLogout?: () => Promise<any>
  authState?: AuthStateProps
}

const AuthContext = createContext<AuthProps>({})

// Use Context Hook
export const useAuth = () => {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthStateProps>({ token: '', isAuthenticated: false })

  const value: AuthProps = {
    onRegister(props) {
      return Promise.resolve('registered')
    },
    onLogin(props) {
      return Promise.resolve('logged in')
    },
    onLogout() {
      return Promise.resolve()
    },
    authState
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
