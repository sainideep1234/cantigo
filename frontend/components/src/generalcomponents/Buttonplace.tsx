import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Buttonplace() {
  return (
    <View>
     
      <View style={styles.container}>
        <Text style={styles.Text}>Proceed to Checkout</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"95%",
    height:50,
    backgroundColor:"#20a7db",
    borderRadius:15,
    marginLeft:10,
    marginTop:25
  },
  Text:{
    textAlign:"center",
    fontWeight:800,
    fontSize:22,
    marginTop:9.5,
    color:"#fffafa"
  }

})