import { View } from 'react-native';
import React from 'react';
import Cartcard from "./Cartcard"


const Item = require('../MainMenuImage/prac');


interface MainMenuProps {
  id: number;
  name: string;
  image: string;
  price: string;
}

export default function MainMenu() {
  return (
    <View>

      {Item.map(({ id, name, image, price }: MainMenuProps) => (
        <Cartcard key={id} name={name} image={image} price={price} />
      ))}
    </View>
  );
}
