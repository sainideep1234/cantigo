
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React from 'react'



interface MainMenuProps {
  name: string;
  image: string; // Use ImageSourcePropType for image
  price: string;
}


export default function FancyCard({ name, image, price }: MainMenuProps) {
  return (
    <View>

      <View style={[styles.card, styles.elevated]}>
        <View style={styles.cardbody}>
          <Image source={image} style={styles.imageStyle}></Image>
          <Text style={styles.cardTitle}>{name} </Text>
          <Text style={styles.cardprice}>{price}</Text>
          <View style={styles.button}> <Text style={styles.buttonText}> Remove to cart</Text></View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    height: 70,
    width: "95%",
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginStart: 10,
    marginBottom: 10



  },
  elevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: 'grey',
  },
  imageStyle: {
    height: 50,
    width: '20%',
    borderRadius: 10,
  },
  cardbody: {
    flex: 1,
    // flexGrow:1,
    padding: 5,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 400,
    // marginBottom: 10,
    color: '#000000',
    marginTop:15,
    // textAlign:'right'

  },

  icon: {},
  button: {
    backgroundColor: "#b70000",
    color: "white",
    width: "30%",
    height: 25,
    borderRadius: 10,
    padding: 2,
    marginTop:15

  },
  cardprice: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginBottom: 10,
    // marginRight:180,
    marginTop:15
  }, buttonText: {
    color: "white",
    fontWeight: '600',
    textAlign: 'center',

  }

})