import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class OutrosJogos extends Component {
  render() {
    return (
      <View style={styles.cenaOutrosJogos}>
        <Text style={styles.txtOutrosJogos}>Informações sobre outros jogos do desenvolvedor</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaOutrosJogos: {
    flex: 1,
    backgroundColor: '#61DB8C'
  },
  txtOutrosJogos: {
    fontSize: 16,
    marginTop: 10
  }

});
