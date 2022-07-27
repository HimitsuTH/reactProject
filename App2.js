import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import AlertComponent from "./components/AlertComponent";
import ImageWithTextInput from "./components/ImageWithTextInput";
import ButtonExample from "./components/ButtonExample";
import Touchable_Example from "./components/Touchable_Example";
const App = () => {
  return (
   <View style={{flex: 1}}>
     {/* <View style={styles.container}>
      <View style={styles.UserBox}>
        <ImageBackground
          source={require('./assets/facebook.png')}
          style={{width: 50, height: 50}}
        />
        <Text style={styles.textColor}>Hello, world</Text>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1655312106151-80d0b5551b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80.jpg",
            }}
            style={styles.img}
          />
        </View>
      </View>
    </View> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      <Touchable_Example/>
   </View>
  );
};

export default App;

const styles = StyleSheet.create({
    UserBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 400,
    backgroundColor: "#333",
    paddingVertical: 10
  },
  textColor: {
    color: '#fff',
    fontSize: 18,
    userSelect: 'none'

  },   
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    backgroundColor: "#eee",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
});
