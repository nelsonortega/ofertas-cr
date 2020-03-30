import React from 'react'
import * as Font from 'expo-font'
import AppNavigator from './navigation/AppNavigator'

import { useState } from 'react'
import { AppLoading } from 'expo'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }
  
  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
        onError={error => console.log(error)}
      />
    )
  }

  return <AppNavigator />
}