import { ReactElement } from 'react'
import { LoginScreen, RegisterScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

interface AuthStackWrapperProps {
  children: ReactElement
}

const AuthStackWrapper = (props: AuthStackWrapperProps): ReactElement => {
  const user = false

  if (user) {
    return props.children
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStackWrapper
