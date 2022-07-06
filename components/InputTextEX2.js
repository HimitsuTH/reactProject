import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const InputTextEX2 = () => {
  const [massage, setMassage] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            backgroundColor: "#eee",
            padding: 15,
            borderRadius: 10,
            shadowColor: "#333",
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.2,
          }}
        >
          Insert any text in below input
        </Text>

        <TextInput
          style={styles.inputStyle}
          placeholder="Hello..."
          onChangeText={(massage) => setMassage(massage)}
          value={massage}
        />

        <Text
          style={{
            color: "#333",
            padding: 10,
            borderBottomColor: "#333",
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        >
          {`Typing : ${massage}`}
        </Text>
      </View>
    </View>
  );
};

export default InputTextEX2;

const styles = StyleSheet.create({
  inputStyle: {
 
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8e8",
    borderRadius: 10,
  },
});
