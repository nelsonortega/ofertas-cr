import { firebaseAuth } from '../firebase'
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export async function loginUser (email: string, password: string) {
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

export async function registerUser (email: string, password: string) {
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

export async function logoutUser () {
  try {
    await signOut(firebaseAuth)
  } catch (error) {
    return error
  }
}

export async function isUserAdmin (user: User) {
  return user.uid === undefined
}
