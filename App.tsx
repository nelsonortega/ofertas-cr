import { THEME } from './src/theme'
import { ReactElement } from 'react'
import { StatusBar } from 'expo-status-bar'
import { RootNavigator } from './src/navigation'
import { Provider as PaperProvider } from 'react-native-paper'

const App = (): ReactElement => {
  return (
    <PaperProvider theme={THEME}>
      <StatusBar style='auto' />
      <RootNavigator />
    </PaperProvider>
  )
}

export default App
