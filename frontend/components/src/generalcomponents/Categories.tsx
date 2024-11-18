import {View, ScrollView } from 'react-native'
import React from 'react'
import CategoriesComponent from './CategoriesComponent'

const Item = [{
  id:1,
  name: 'Thali',
  image: require('../CatigoriesImage/Thali.jpg')
}, {
  id:2,
  name: 'Chinese',
  image: require('../CatigoriesImage/Chowmein.jpg')
}, {
  id:3,
  name: 'Soft Drink',
  image: require('../CatigoriesImage/Softdrink.jpg')
}, {
  id:4,
  name: 'Fast Food',
  image: require('../CatigoriesImage/Samosa.jpg')
}];


export default function Categories() {
  return (
    <View>
     

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Item.map(({id ,  name, image }) => (
          <CategoriesComponent key={id} name={name} image={image}></CategoriesComponent>
        ))}
      </ScrollView>

    </View>
  )
}

