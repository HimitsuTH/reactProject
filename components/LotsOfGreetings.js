import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
// import Greeting from './Greeting';

const Greeting = ({name, date}) => {
  return (
    <View>
      <Text style={styles.GreetingColor}>{`Hello, ${name} : ${date}`}</Text>
    </View>
  );
}


const LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: "center", Top: 50 }}>
      <Greeting name="Marry Chrismas" date="25/Dec/2022" />
      <Greeting name="Happy New Year" date="1/Jun/2023" />
      <Greeting name="SongKran Festival" date="13/Apr/2022" />
    </View>
  );
}

export default LotsOfGreetings



const styles = StyleSheet.create({
  GreetingColor: {
    color: "#333",
    fontSize: 18,
    margin: 15,
    alignItems: 'center',
  },
});