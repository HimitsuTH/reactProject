import { View, Text ,Button} from 'react-native'
import React, {useState, useEffect}from 'react'

const Count = ({num, title}) => {
    const [count1 , setCount1] = useState(num);
    const [count2 , setCount2] = useState(0);


    useEffect(()=> {
        console.log('use effect 1')
    })
    useEffect(()=> {
        console.log('use effect 2')
    },[count1])
    useEffect(()=> {
        console.log('use effect 3')
    },[])

  return (
    <View >
      <Text style={{ color: "#333", fontSize: 24, textAlign: "center" , marginBottom: 20,marginTop: 15}}>
        {`${title} : ${count1}`}
      </Text>
      <View style={{ marginBottom: 15 }}>
        <Button
          title="Click ME 1"
          onPress={() => setCount1(count1 + 1)}
          color="#002ab5"
        />
      </View>
      <View>
        <Button
          title="Click ME 2"
          onPress={() => setCount2(count2 + 1)}
          color="#002ab5"
        />
      </View>
    </View>
  );
}

export default Count