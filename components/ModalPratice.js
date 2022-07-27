import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Button
} from "react-native";
import React, { useState } from "react";

const ModalPratice = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
      >
        <View style={[styles.container, styles.modalBg]}>
          <View style={styles.modalView}>
            <Text style={styles.textSty}>คุณลืมปิดไฟในห้อง!!!</Text>
            <Button
              title="กรุณากดปุ่มเพื่อปิดไฟ"
              color="#b40000"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.textSty}>ไฟในห้องปิดอยู่</Text>
        <Button
          title="กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง"
          color="#2196F3"
          onPress={() => setShowModal(!showModal)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalPratice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBg: {
    backgroundColor: "#eee",
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
    // color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
