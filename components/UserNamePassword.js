import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UserNamePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // งานใหม่
  const checkTextInput = () => {
    // if(!email.trim()){
    //   alert('Please Enter Email');
    //   return;
    // } else if(!password) {
    //   alert("Please Enter Password");
    // } else {
    //   alert('Success')
    // }
    !email.trim()
      ? alert("Please Enter Email")
      : !password
      ? alert("Please Enter Password")
      : alert("Success");
  };

  // งานเก่า
  // const showAlert = ()=> {

  //   if (!email) alert("Please Enter Email");
  //   else if (!password) alert("Please Enter Password");
  //   else alert(`Email : ${email}\n Password : ${password}`);

  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 400,
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Password"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        <View style={{ marginTop: 15 }}>
          <Button onPress={checkTextInput} title="Submit" color="#333" />
        </View>
      </View>
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    flex: 1,
    padding: 35,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginTop: 15,
  },
});
