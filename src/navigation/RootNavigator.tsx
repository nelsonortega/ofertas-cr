import { ReactElement } from 'react'
import { HomeStack, ProfileStack } from './stacks'
import { NavigationContainer } from '@react-navigation/native'
import { HOME_TAB_OPTIONS, PROFILE_TAB_OPTIONS } from './options'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={HomeStack} options={HOME_TAB_OPTIONS} />
        <Tab.Screen name='ProfileTab' component={ProfileStack} options={PROFILE_TAB_OPTIONS} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
