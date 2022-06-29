import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const TextInputEX = () => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={"Course Goal"}
          style={{
            width: "80%",
            color: "#fff",
            borderColor: "#fff",
            borderWidth: 1,
            padding: 10,
          }}
        />
        <View style={{marginLeft: 20}}>
          <Button title="Add" />
        </View>
      </View>
    </View>
  );
};

export default TextInputEX;
