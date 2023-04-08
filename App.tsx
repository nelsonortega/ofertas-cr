import { ReactElement } from 'react'
import { HomeScreen } from './src/screens'
import { Provider as PaperProvider } from 'react-native-paper'

const App = (): ReactElement => {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  )
}

export default App
