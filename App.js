import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TouchablePractice from './components/TouchablePractice'
import ModalTest from './components/ModalTest'
import ModalExample from './components/ModalExample'
import DynamicStyle from './components/DynamicStyle'
import ModalPratice from './components/ModalPratice'

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <TouchablePractice/> */}
    {/* <DynamicStyle/> */}
    {/* <ModalExample/> */}
    <ModalPratice/>

    {/* เขียนเล่น */}
     {/* <ModalTest/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})