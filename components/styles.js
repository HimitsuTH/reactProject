import { StyleSheet } from 'react-native'

const  styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: 24,
      backgroundColor: '#333',
      position: 'relative'
    },
    boxColor: {
      backgroundColor: "#fff",
      padding: 24,
      borderRadius: 10,
    },
    textStyles: {
      textAlign: 'center',
      color: "#333",
      padding: 24,
      fontSize: 18,
      fontWeight: 'bold',
      borderColor: '#333',
      
    },
    warning: {
      color: '#f33'
    },
    input: {
      padding: 10,
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 10,
    
    },
    Title: {
      fontSize: 24,
      textTransform: 'uppercase'
    },
    button: {
      marginTop: 15,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },  
  })


  export default styles
 