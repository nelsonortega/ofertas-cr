import { COLORS } from '../utils'
import { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { CreatePostStack, HomeStack, InformationStack, LocationStack, ProfileStack } from './stacks'
import { CREATE_TAB_OPTIONS, HOME_TAB_OPTIONS, INFO_TAB_OPTIONS, LOCATION_TAB_OPTIONS, PROFILE_TAB_OPTIONS } from './options'

const Tab = createMaterialBottomTabNavigator()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={COLORS.WHITE}
        inactiveColor={COLORS.WHITE}
        barStyle={{ backgroundColor: COLORS.GRAY }}
      >
        <Tab.Screen name='HomeTab' component={HomeStack} options={HOME_TAB_OPTIONS} />
        <Tab.Screen name='LocationTab' component={LocationStack} options={LOCATION_TAB_OPTIONS} />
        <Tab.Screen name='CreatePostTab' component={CreatePostStack} options={CREATE_TAB_OPTIONS} />
        <Tab.Screen name='InfoTab' component={InformationStack} options={INFO_TAB_OPTIONS} />
        <Tab.Screen name='ProfileTab' component={ProfileStack} options={PROFILE_TAB_OPTIONS} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
