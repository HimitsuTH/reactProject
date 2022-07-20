import { StyleSheet, Text, View , TextInput, Image} from 'react-native'
import React from 'react'

const ImageWithTextInput = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
            <Image
                source={require('../assets/input_username.png')}
                style={styles.imageStyle}
            />
            <TextInput
                style={{flex: 1}}
                placeholder='Enter Username...'
            />
        </View>
        <View style={styles.sectionStyle}>
            <Image
                source={require('../assets/input_phone.png')}
                style={styles.imageStyle}
            />
            <TextInput
                style={{flex: 1}}
                placeholder='Enter Number...'
            />
        </View>
      </View>
     
    </View>
  )
}

export default ImageWithTextInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    imageStyle: {
        width: 25,
        height: 25,
        padding: 10,
        margin: 10,
        resizeMode: 'stretch',
        alignItems: 'center'
    }

})