import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.textColor}>TNI</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    textBox: {
        position: 'absolute',
        top: 10,
        shadowColor: '#eee',
        backgroundColor: "#fff",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: "10px",
        borderRadius: 10,
        width: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    textColor: {
      color: "#070f6e",
      fontSize: 30,
      fontWeight: 'bold',
    }

})