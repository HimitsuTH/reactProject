import { Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";
import styles from "./components/styles";
import TestText from "./components/TestText";
import TextInputEX from "./components/TextInputEX";
import Cafe from "./components/Cafe";

const App = () => {
  // const [name , setName ] = useState('')
  const [showLogo , setShowLogo] = useState(false)
  const showData = () => {
    alert("Hello, Something!!")

    setShowLogo(!showLogo)
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 48 }}>React Native</Text>

      {
        showLogo && <Logo />
      }

      <Button title="Click Me" onPress={showData} />
      {/* <View style={styles.boxColor}>
            
            <Text style={[styles.textStyles, styles.Title]}>Input Something</Text>
            <Text style={styles.textStyles}>{name}</Text>
            <TestText  text={name}/>
            <Text style={[styles.textStyles , styles.warning]}>This is your first app.</Text>
            <TextInput  style={styles.input}onChangeText={(e) => setName(e)} placeholder="Enter something...." value={name}/>
           
          </View> */}

      {/* <TextInputEX/> */}
      {/* <Cafe/> */}
    </View>
  );
};

export default App;
