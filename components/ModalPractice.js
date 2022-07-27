import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const ModalPractice = () => {
  const [modal, setModal] = useState(true);
  return modal ? (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.textSty}>คุณลืมปิดไฟในห้อง!!!</Text>
        <Button
          title="กรุณากดปุ่มเพื่อปิดไฟ"
          color="#F194FF"
          onPress={() => setModal(false)}
        />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View>
        <Text style={styles.textSty}>ไฟในห้องปิดอยู่</Text>
        <Button
          title="กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง"
          color="#2196F3"
          onPress={() => setModal(true)}
        />
      </View>
    </View>
  );
};

export default ModalPractice;

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
});
