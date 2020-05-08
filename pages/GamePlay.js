import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import Card from '../components/Card';
import NumberDisplay from '../components/NumberDisplay';

/**
* @author
* @function GamePlay
**/
const generateGuess = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);

    const guess = Math.floor(Math.random()* (max-min)) + min;
    return guess;
}
const GamePlay = (props) => {
const [currentGuess, setCurrentGuess] = useState(generateGuess(1, 100));
const [rounds, setRounds] = useState(1);

const currentLow = useRef(1);
const currentHigh = useRef(100)

useEffect(()=>{
    if(currentGuess === props.userChoice){
        props.gameOver(rounds);
    }
}, [rounds])

const nextGuessHandler = direction => {
    if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'larger' && currentGuess > props.userChoice)){
        Alert.alert('You are not playing fairly', 'Select a correct direction');
        return;
    }
    if(direction === 'lower'){
        currentHigh.current = currentGuess;
    }else {
        currentLow.current = currentGuess;
    }
    const nextGuess = generateGuess(currentLow.current, currentHigh.current);
    setCurrentGuess(nextGuess);
    setRounds(rounds + 1);
  }

const { gamePlay, btnContainer } = styles
 return(
  <View style={gamePlay}>
    <Text>You selected number</Text>
    <NumberDisplay number={currentGuess}/>
    <Card style={btnContainer}>
      <Button title="Lower" onPress={()=> nextGuessHandler('lower')}/>
      <Button title="Greater" onPress={()=> nextGuessHandler('higher')}/>
    </Card>
  </View>
  )
}


const styles = StyleSheet.create({
  gamePlay: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 20,
   backgroundColor: '#dcdcdc'
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 300,
      maxWidth: '80%'
  }
})
export default GamePlay