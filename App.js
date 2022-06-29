import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const App = () => {
  const showData = () => {
    alert("Hello");
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 48, color: '#fff', marginBottom: 20}}>Button Example</Text>
      <Button title="Click Me" onPress={showData} color="#070f6e" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#333',
  },
});
