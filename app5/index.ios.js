import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContato from './src/components/CenaContato';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaNossosServicos from './src/components/CenaNossosServicos';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'principal' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal': return (<CenaPrincipal navigator={navigator} />);
            case 'cliente': return (<CenaClientes navigator={navigator} />);
            case 'contato': return (<CenaContato navigator={navigator} />);
            case 'empresa': return (<CenaEmpresa navigator={navigator} />);
            case 'nossosServicos': return (<CenaNossosServicos navigator={navigator} />);
            default: return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
