import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Separator = () => {
  return <View style={styles.saparator} />;
};

const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibiliyLabel to help make your app useble by eveyone.
        </Text>
        <View>
          <Button
            title="Press me"
            onPress={() => alert("Simple Button Pressed")}
            color="#8a0020"
          />
        </View>
        <Separator />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <View>
          <Button
            title="Press me"
            color="#00358a"
            onPress={() => alert("Simple Button Pressed 2")}
          />
        </View>
        <Separator />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button 
            title="Press me" 
            disabled 
        />
        <Separator />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>
         This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
            <Button title='Left button' onPress={() => alert("Left Button pressed")} color="#0e8a00"/>
            <Button title='Right button'  onPress={() => alert("Left Button pressed")} color="#0e8a00"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: 380,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saparator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  //test 4
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20
//   },
});
