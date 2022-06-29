import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import styles from "./stySheet";
const Logo = () => {
  const textLogo = "Thai-NichiInstitute of Technology";

  const isTH = true;

  const [isTHs, setIsTHs] = useState(true);

  const checkThai = () => {
    alert("Change!!!");
    setIsTHs(!isTHs);
  };

  return (
    <View style={styles.textBox}>
      <Text style={styles.textColor}>{`TNI+1`}</Text>
      <Text>{textLogo}</Text>
      <View style={{paddingTop: 15}}>
        <Button title="Test" onPress={() => checkThai()} />
      </View>
      {isTHs ? (
        <View>
          <Text style={{ fontSize: 24 }}>Thai</Text>
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 24 }}>English</Text>
        </View>
      )}
    </View>
  );
};

export default Logo;

