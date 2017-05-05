import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaContato extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar
          //hidden
          backgroundColor='#ec7148'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#ec7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.txtEmpresa}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras posuere eros at imperdiet accumsan. Cras elementum, mi in condimentum consequat,
            elit libero rhoncus justo, nec hendrerit augue augue tempus elit. Nunc luctus tellus
            dolor, in volutpat sapien volutpat.</Text>
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
    color: '#ec7148',
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 10
  },
  empresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
