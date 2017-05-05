import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');


export default class CenaContato extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar
          //hidden
          backgroundColor='#61bd8c'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61bd8c' />

        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.contato}>
          <Text style={styles.txtContato}>TEL: (85) 1234-1234</Text>
          <Text style={styles.txtContato}>CEL: (85) 91234-1234</Text>
          <Text style={styles.txtContato}>EMAIL: contato@atomconsultoria.com</Text>
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
    color: '#61bd8c',
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 10
  },
  contato: {
    marginTop: 20,
    padding: 20
  },
  txtContato: {
    fontSize: 18
  }
});
