import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar
          //hidden
          backgroundColor='#ccc'
        />
        <BarraNavegacao />
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.menu}>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#b9c941'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'cliente' });
              }}
            >
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#61bd8c'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'contato' });
              }}
            >
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>

          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#ec7148'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'empresa' });
              }}
            >
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#19d1c8'}
              activeOpacity={0.3}
              onPress={() => {
                this.props.navigator.push({ id: 'nossosServicos' });
              }}
            >
              <Image style={styles.imgMenu} source={menuServico} />
            </TouchableHighlight>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  menu: {
    alignItems: 'center'

  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 10
  }

});
