import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');


export default class CenaContato extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar
          //hidden
          backgroundColor='#19d1c8'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19d1c8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.servicos}>
          <Text style={styles.txtServicos}>-Consultoria</Text>
          <Text style={styles.txtServicos}>-Processos</Text>
          <Text style={styles.txtServicos}>-Acompanhamento de Projetos</Text>
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
    color: '#19d1c8',
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 10
  },
  servicos: {
    marginTop: 20,
    padding: 20
  },
  txtServicos: {
    fontSize: 18
  }
});
