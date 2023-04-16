import { ReactElement } from 'react'
import { LocationScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const LocationStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Location' component={LocationScreen} />
    </Stack.Navigator>
  )
}

export default LocationStack
