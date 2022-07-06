import { StyleSheet,View, Text, TextInput} from 'react-native'
import React,{useState} from 'react'
import Logo from './components/Logo'
import User from './components/User'
import UserNamePassword from './components/UserNamePassword'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import LotsOfGreetings from './components/LotsOfGreetings'
import InputTextEX2 from './components/InputTextEX2'



const App = () => {
  
  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count num={2} title="Click"/> */}
      {/* <InputTextEX2/> */}
      <UserNamePassword />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 500,
    padding: 10,
  },

});