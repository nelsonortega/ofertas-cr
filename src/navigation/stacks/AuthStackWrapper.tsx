import { ReactElement } from 'react'
import { LoginScreen, RegisterScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Auth = createNativeStackNavigator()

interface AuthStackWrapperProps {
  children: ReactElement
}

const AuthStackWrapper = (props: AuthStackWrapperProps): ReactElement => {
  const user = true

  if (user) {
    return props.children
  }

  return (
    <Auth.Navigator>
      <Auth.Screen name='Login' component={LoginScreen} />
      <Auth.Screen name='Register' component={RegisterScreen} />
    </Auth.Navigator>
  )
}

export default AuthStackWrapper
