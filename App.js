import {  Text, View } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import styles from './components/styles'


const App = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333'}} >

          <Logo/>
          <View style={styles.boxColor}>
            <Text style={styles.textStyles}>Hello test</Text>
            <Text style={[styles.textStyles , styles.warning]}>This is your first app.</Text>
 
          </View>
 
    </View>
  )
}

export default App

