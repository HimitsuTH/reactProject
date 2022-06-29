import { View, Text , TextInput} from 'react-native'
import React from 'react'

const Cat = () => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontSize: 18, fontWeight: 500}}>Hello,Cat....</Text>
      <TextInput 
        placeholder='I am also a cat!'
        style={{borderWidth: 1, borderRadius: 10, padding: 10, marginTop: 15}}
      />
    </View>
  )
}

export default Cat