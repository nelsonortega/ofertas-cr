import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'

const ICON_SIZE = 23

export const HOME_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name='home' color={color} size={ICON_SIZE} />
  )
}

export const PROFILE_TAB_OPTIONS: MaterialBottomTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => (
    <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color={color} size={ICON_SIZE} />
  )
}
