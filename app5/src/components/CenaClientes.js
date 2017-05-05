import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');


export default class CenaClientes extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar
          //hidden
          backgroundColor='#b9c941'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#b9c941' />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
        <View style={styles.clientes}>
          <Image source={cliente1} />
          <Text style={styles.txtClientes}>Lorem ipsum dolor sit amet</Text>
        </View>
        <View style={styles.clientes}>
          <Image source={cliente2} />
          <Text style={styles.txtClientes}>Lorem ipsum dolor sit amet</Text>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#b9c941',
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 10
  },
  clientes: {
    marginTop: 10,
    padding: 20
  },
  txtClientes: {
    fontSize: 18,
    marginLeft: 20
  }
});
