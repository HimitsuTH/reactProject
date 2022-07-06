import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Greeting = ({name}) => {
  return (
    <View>
      <Text style={styles.GreetingColor}>{`Hello, ${name}`}</Text>
    </View>
  )
}

export default Greeting


const styles = StyleSheet.create({
  GreetingColor: {
    color: '#333',
    fontSize: 18,
    margin: 15,
  }
})