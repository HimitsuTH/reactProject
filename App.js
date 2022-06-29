import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'



const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#333'}}>
      <Logo/>
      <User/>
    </View>
  )
}

export default App