import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState } from "react";
// import { Modal } from "react-native-web";

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* {!showModal && (
          <Button
            title="click to open modal"
            onPress={() => setShowModal(!showModal)}
          />
        )}

        {showModal && (
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is Open!</Text>
            <Button
              title="Click to Close modal"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        )} */}

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={showModal}
          onRequestClose={() => alert("modal")}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is Open</Text>
            <Button
              title="Click to Close modal"
              onPress={() => setShowModal(!showModal)}
            />
          </View>
        </Modal>

        <Button
          title="click to open modal"
          onPress={() => setShowModal(!showModal)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    marginTop: 10,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#113355",
    padding: 100,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
    padding: 10,
  },
});
