import {  Text, View, TextInput} from 'react-native'
import React, { useState }from 'react'
import Logo from './components/Logo'
import styles from './components/styles'


const App = () => {

  const [name , setName ] = useState('')

  const onChange = valueName => {
    setName(valueName)
  }

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333'}} >

          <Logo/>
          <View style={styles.boxColor}>
            <Text style={[styles.textStyles, styles.Title]}>Input Something</Text>
            <Text style={styles.textStyles}>{name}</Text>
            <Text style={[styles.textStyles , styles.warning]}>This is your first app.</Text>
            <TextInput  style={styles.input}onChangeText={onChange} placeholder="Enter something...." value={name}/>
  
          </View>
 
    </View>
  )
}

export default App

