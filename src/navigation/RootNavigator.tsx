import { ReactElement } from 'react'
import { HomeScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}

export default RootNavigator
