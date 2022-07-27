import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import React from "react";

const Touchable_Example = () => {
  const onPress = (msg) => {
    alert(`Alert for:  ${msg}`);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={() => onPress("Touchable Native Feedback")}
          >
            <View>
              <Text>Touchable Native Feedback (Only Android)</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => onPress("Touchable Highlight")}
          >
            <View>
              <Text>Touchable Highlight</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPress("Touchable Opacity")}
          >
            <View>
              <Text>Touchable Opacity</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => onPress("Touchable Without Feedback")}
          >
            <View   style={styles.button}>
              <Text>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Touchable_Example;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
