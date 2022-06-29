import { View, Text } from "react-native";
import React from "react";
import Cat from "./Cat";

const Cafe = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        color: "#333",
        width: 300,
      }}
    >
      <Text>Welcome to Cafe</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default Cafe;
