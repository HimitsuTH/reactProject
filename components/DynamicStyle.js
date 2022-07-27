import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";

const DynamicStyle = () => {
  const [defaultStyle, setDefaultStyle] = useState(true);

  console.log(defaultStyle)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style= {styles.container}>
        <Text style={defaultStyle ? styles.style1 : styles.style2}>About React</Text>
        <Text >Change CSS Style</Text>

        <View style={{marginTop: 20}}>
          <Button title="Click Me!!" onPress={()=> setDefaultStyle(!defaultStyle)}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DynamicStyle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  style1: {
    fonSize: 20,
  },
  style2: {
    fontSize: 60,
    color: "red",
  },
});
