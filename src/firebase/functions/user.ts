import { firebaseAuth } from '../firebase'
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

interface AuthResponse {
  success: boolean
  errorMessage: string
  userResponse: Object
}

export async function loginUser (email: string, password: string): Promise<AuthResponse> {
  const loginResponse = {
    success: false,
    errorMessage: '',
    userResponse: {}
  }

  try {
    loginResponse.userResponse = await signInWithEmailAndPassword(firebaseAuth, email, password)
    loginResponse.success = true

    return loginResponse
  } catch (error) {
    error instanceof Error
      ? loginResponse.errorMessage = error.message
      : loginResponse.errorMessage = 'Unknown error'

    return loginResponse
  }
}

export async function registerUser (email: string, password: string): Promise<AuthResponse> {
  const registerResponse = {
    success: false,
    errorMessage: '',
    userResponse: {}
  }

  try {
    registerResponse.userResponse = await createUserWithEmailAndPassword(firebaseAuth, email, password)
    registerResponse.success = true

    return registerResponse
  } catch (error) {
    error instanceof Error
      ? registerResponse.errorMessage = error.message
      : registerResponse.errorMessage = 'Unknown error'

    return registerResponse
  }
}

export async function logoutUser (): Promise<unknown> {
  try {
    await signOut(firebaseAuth)
  } catch (error) {
    return error
  }
}

export function isUserAdmin (user: User): boolean {
  return user.uid === undefined
}
