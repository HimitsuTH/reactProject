import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import styles from './components/styles'

const TestText = (props) => {
  console.log(props)
  return (
    <View>
      <Text style={styles.textStyles} >{props.text}</Text>
    </View>
  )
}

export default TestText

const styles = StyleSheet.create({
  textStyles: {
    textAlign: 'center',
    color: "#333",
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '#333',
    
  },

})