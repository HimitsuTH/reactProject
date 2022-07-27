import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const ModalTest = () => {
  const [modal, setModal] = useState(true);
  const colorName = {
    title: "closeSwitch",
  };

  return modal ? (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.textSty}>คุณลืมปิดไฟในห้อง!!!</Text>
        <Button
          title="กรุณากดปุ่มเพื่อปิดไฟ"
          color="#b40000"
          onPress={() => setModal(!modal)}
        />
      </View>
    </View>
  ) : (
    <View style={[styles.container, styles[colorName.title]]}>
      <View>
        <Text style={[styles.textColorWhite, styles.textSty]}>
          ไฟในห้องปิดอยู่
        </Text>
        <Button
          title="กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง"
          color="#2196F3"
          onPress={() => setModal(!modal)}
        />
      </View>
    </View>
  );
};

export default ModalTest;

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textSty: {
    textAlign: "center",
    marginBottom: 10,
  },
  textColorWhite: {
    color: "#fff",
  },

  closeSwitch: {
    backgroundColor: "#333",
  },
});
