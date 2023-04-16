import { ReactElement } from 'react'
import { CreatePostScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CreatePostStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='CreatePost' component={CreatePostScreen} />
    </Stack.Navigator>
  )
}

export default CreatePostStack
