import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './pages/StartGame';
import GamePlay from './pages/GamePlay';
import GameOver from './pages/GameOver'

export default function App() {
  const [userNum, setUserNum] = useState();
  const [totalRounds, setTotalRounds] = useState(0);
  const startGameHandler = (number)=> {
    setUserNum(number);
    setTotalRounds(0);
  }
  const gameOverHandler = rounds => {
    setTotalRounds(rounds);
  }
  const refreshGameHandler = ()=> {
    setUserNum(null);
    setTotalRounds(0);
  }

  let content =  <StartGameScreen startGame={startGameHandler}/>

  if(userNum && totalRounds === 0){
    content = <GamePlay userChoice={userNum} gameOver={gameOverHandler}/> 
  }else if (totalRounds > 0){
    content = <GameOver userNum={userNum} refreshGame={refreshGameHandler} rounds={totalRounds} />
  }
  return (
    <View style={styles.container}>
      <Header title="pickA-n#mber"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
