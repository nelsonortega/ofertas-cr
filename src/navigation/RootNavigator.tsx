import { ReactElement } from 'react'
import { HomeStack, ProfileStack } from './stacks'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { CREATE_TAB_OPTIONS, HOME_TAB_OPTIONS, INFO_TAB_OPTIONS, LOCATION_TAB_OPTIONS, PROFILE_TAB_OPTIONS } from './options'

const Tab = createMaterialBottomTabNavigator()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={HomeStack} options={HOME_TAB_OPTIONS} />
        <Tab.Screen name='LocationTab' component={HomeStack} options={LOCATION_TAB_OPTIONS} />
        <Tab.Screen name='CreateTab' component={HomeStack} options={CREATE_TAB_OPTIONS} />
        <Tab.Screen name='InfoTab' component={HomeStack} options={INFO_TAB_OPTIONS} />
        <Tab.Screen name='ProfileTab' component={ProfileStack} options={PROFILE_TAB_OPTIONS} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
