import { StyleSheet,  View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function TextInputCompo() {
  const [text, setText] = useState('');

  return (<>
    <View>
     
      <View  style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Item.."
          placeholderTextColor={"#000"}
          onChangeText={name => setText(name)}
          defaultValue={text}
        />
      </View></View>
   </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    height: 40,
    width: 400,
    marginLeft: 15,
    color: "#000",
    fontSize: 18,
    borderRadius: 6,
    padding: 2,
    paddingLeft: 8,
    

  },
  container:{
    flex:1,
    flexDirection:'row',
  marginBottom:15,
  marginTop:20,
  

  }
})