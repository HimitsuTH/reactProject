import { StyleSheet, Text, View, Alert, Button } from "react-native";
import React from "react";

const AlertComponent = () => {
  const simpleAlertHanler = () => {
    alert("hello");
  };
  const TwoOptionAlertHanler = () => {
    // use Alert from React Native
    Alert.alert(
      // title
      "Alert Title",
      // message
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
            text: 'No',
            onPress: ()=> alert('No pressed'),
            style: 'cancel'
        }
      ],
      {cancelable:false}
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Simple Alert" onPress={simpleAlertHanler} />
      <Button title="Alert with to Options" onPress={TwoOptionAlertHanler} />
    </View>
  );
};

export default AlertComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecfofo1",
  },
});
