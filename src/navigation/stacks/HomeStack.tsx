import { ReactElement } from 'react'
import { HomeScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Home = createNativeStackNavigator()

const HomeStack = (): ReactElement => {
  return (
    <Home.Navigator>
      <Home.Screen name='Home' component={HomeScreen} />
    </Home.Navigator>
  )
}

export default HomeStack
