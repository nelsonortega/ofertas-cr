import { ReactElement } from 'react'
import { HomeStack, ProfileStack } from './stacks'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='HomeTab'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={23} />
            )
          }}
        />
        <Tab.Screen
          name='ProfileTab'
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account' color={color} size={23} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
