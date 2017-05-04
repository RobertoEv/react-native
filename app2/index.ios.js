//Import
import React from 'react';
import {
  AppRegistry,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  View
} from 'react-native';

const logo = require('./img/logo.png');

//Formatações
const Styles = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //Frases
  const frases = Array(5);
  frases[0] = 'oi';
  frases[1] = 'olar';
  frases[2] = 'oie';
  frases[3] = 'bem vindo!';
  frases[4] = 'welcome!';

  const fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};


//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Styles;

  return (
    <View style={principal}>
      <Image source={logo} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}
      >
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
