import { View, Text } from "react-native";
import React from "react";

const MassageText = ({ firstName, secondName }) => {
  return (
    <View>
      <Text
        style={{
          color: "#eee",
          marginTop: 20,
          backgroundColor: "#333",
          padding: 20,
          fontWeight: 600,
          borderRadius: 10,
          borderWidth: 5,
          borderColor: '#eeee'
        }}
      >
        {`Your First Name is '${firstName}' and Last Name is '${secondName}'`}
      </Text>
    </View>
  );
};

const MyCustomTextWith = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MassageText firstName="Kai" secondName="Wow" />
      <MassageText firstName="fuk" secondName="soCool" />
    </View>
  );
};

export default MyCustomTextWith;
