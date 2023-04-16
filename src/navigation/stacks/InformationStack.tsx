import { ReactElement } from 'react'
import { InformationScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const InformationStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Information' component={InformationScreen} />
    </Stack.Navigator>
  )
}

export default InformationStack
