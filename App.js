import { View, Text, Image} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Image
        source={{url: 'https://images.unsplash.com/photo-1655312106151-80d0b5551b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}
        style={{width: 200, height: 200}}
      />
    </View>
  )
}

export default App