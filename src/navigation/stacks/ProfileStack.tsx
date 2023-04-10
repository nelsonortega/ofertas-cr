import { ReactElement } from 'react'
import { ProfileScreen } from '../../screens'
import AuthStackWrapper from './AuthStackWrapper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ProfileStack = (): ReactElement => {
  return (
    <AuthStackWrapper>
      <Stack.Navigator>
        <Stack.Screen name='Profile' component={ProfileScreen} />
      </Stack.Navigator>
    </AuthStackWrapper>
  )
}

export default ProfileStack
