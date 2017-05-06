import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SobreJogo extends Component {
  render() {
    return (
      <View style={styles.cenaSobreJogo}>
        <Text style={styles.txtSobreJogo}>Informações sobre o jogo aqui disponível</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaSobreJogo: {
    flex: 1,
    backgroundColor: '#61DB8C',
  },
  txtSobreJogo: {
    fontSize: 16,
    marginTop: 10 
  }

});
