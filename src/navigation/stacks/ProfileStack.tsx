import { ReactElement } from 'react'
import { ProfileScreen } from '../../screens'
import AuthStackWrapper from './AuthStackWrapper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Profile = createNativeStackNavigator()

const ProfileStack = (): ReactElement => {
  return (
    <AuthStackWrapper>
      <Profile.Navigator>
        <Profile.Screen name='Profile' component={ProfileScreen} />
      </Profile.Navigator>
    </AuthStackWrapper>
  )
}

export default ProfileStack
