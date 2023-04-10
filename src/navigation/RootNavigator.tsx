import { ReactElement } from 'react'
import { HomeScreen, SettingsScreen } from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const RootNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={23} />
            )
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='cog-outline' color={color} size={23} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
