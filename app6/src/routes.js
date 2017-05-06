import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Routes = () => (
    <Router sceneStyle={{ paddingTop: 60 }}>
      {/* initial default first Scene */}
      <Scene key='principal' component={Principal} title={'Cara ou Coroa'} />
      <Scene key='sobreJogo' component={SobreJogo} title={'Sobre o jogo'} />
      <Scene key='outrosJogos' component={OutrosJogos} title={'Outros jogos'} />
      <Scene key='resultado' component={Resultado} title={'Resultado'} />
    </Router>
  );
  
export default Routes;
