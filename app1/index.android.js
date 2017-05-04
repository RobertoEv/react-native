import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

const generateRandomNumber = () => {
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 10);

  alert(randomNumber);
};

const App = () => {
  return (
    <View>
      <Text>Gerador de Números Randômicos</Text>
      <Button
        title="Gerar um número randômico"
        onPress={generateRandomNumber}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
