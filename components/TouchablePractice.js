import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Separtor = () => <View style={styles.buttonIconSepartorStyle}/>;

const TouchablePractice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.buttonFacebookStyle}>
            <View>
              <Image
                source={require("../assets/facebook.png")}
                style={styles.butttonImageIconStyle}
              />
            </View>
            <Separtor />
            <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.buttonGPlusStyle}>
            <View>
              <Image
                source={require("../assets/google-plus.png")}
                style={styles.butttonImageIconStyle}
              />
            </View>
            <Separtor/>
            <Text style={styles.buttonTextStyle}>Login Using Google Plusk</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  buttonContainer: {
    width: 400,
  },
  buttonGPlusStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dc4e41",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  butttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSepartorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});
