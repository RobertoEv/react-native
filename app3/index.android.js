import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

const styles = StyleSheet.create({

  botaoEscolha: {
    width: 90,
    backgroundColor: '#fff',
    borderColor: '#48BBEC',
    borderWidth: 3,
    borderRadius: 5,
    margin: 10
  },
  textoBotao: {
    color: '#48BBEC',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco: {
    alignItems: 'center'
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    height: 40,
    marginBottom: 20
  }
});

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jogadaUsuario: '',
      jogadaComputador: '',
      resultadoJogo: ''
    };
  }

  jokenpo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    let resultado = '';

    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: break;
    }

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu!';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu!';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }
      if (escolhaUsuario === 'pedra') {
        resultado = 'Você Ganhou!';
      }
      if (escolhaUsuario === 'papel') {
        resultado = 'Você Perdeu!';
      }
    }
    this.setState({
      jogadaUsuario: escolhaUsuario,
      jogadaComputador: escolhaComputador,
      resultadoJogo: resultado
     });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Topo />

        <View style={styles.painelAcoes}>
          <TouchableOpacity
            style={styles.botaoEscolha}
            onPress={() => { this.jokenpo('pedra'); }}
          >
            <Text style={styles.textoBotao}>Pedra</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoEscolha}
            onPress={() => { this.jokenpo('papel'); }}
          >
            <Text style={styles.textoBotao}>Papel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoEscolha}
            onPress={() => { this.jokenpo('tesoura'); }}
          >
            <Text style={styles.textoBotao}>Tesoura</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultadoJogo}</Text>
          <Icone escolha={this.state.jogadaUsuario} jogador='Você' />
          <Icone escolha={this.state.jogadaComputador} jogador='Computador' />

        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('app3', () => app3);
