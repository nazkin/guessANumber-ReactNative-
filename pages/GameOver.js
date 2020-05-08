import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import colors from '../constants/colors';
import NumberDisplay from '../components/NumberDisplay';

/**
* @author
* @function GameOver
**/
const GameOver = (props) => {

const { overPage, overTitle, overBox, usrNum, overScore, finalScoreBox } = styles
 return(
  <View style={overPage}>
      <View style = {overBox}>
        <Text style={overTitle}>Game Over!!</Text>
        <Text style={usrNum}>You were thinking of #{props.userNum}</Text>
      </View>
    <View style={finalScoreBox}>
        <Text style={overScore}>Score</Text>
        <NumberDisplay number ={props.rounds} /> 
    </View>
    <Button title="Refresh" onPress={()=> props.refreshGame()} />  
  </View>
  )
}


const styles = StyleSheet.create({
  overPage: {
   flex: 1,
   justifyContent: 'space-around',
   alignItems: 'center',
  }, 
  overTitle: {
      fontSize: 40,
      letterSpacing: 1.5, 
      color: 'black',
      marginVertical: 20
  },
  overBox: {
    backgroundColor: colors.secondary, 
    width: '98%',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10
  },
  usrNum: {
    fontSize: 20, 
    color: 'ivory',
    marginTop: 20,
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    textAlign: 'center'
  }, 
  overScore: {
    fontSize: 30, 
    color: colors.secondary,
    width: '100%',
    backgroundColor: '#dcdcdc',
    fontWeight: "700",
    textAlign: 'center'
  },
  finalScoreBox: {
      width: '98%',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopColor: 'silver',
      borderTopWidth: 2,
      borderBottomColor: 'silver',
      borderBottomWidth: 2, 
      backgroundColor: '#dcdcdc'
  }
})
export default GameOver