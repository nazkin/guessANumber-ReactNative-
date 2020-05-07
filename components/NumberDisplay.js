import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import mainColors from '../constants/colors';

/**
* @author
* @function NumberDisplay
**/
const NumberDisplay = (props) => {

const { number, numTxt } = styles
 return(
  <View style={number}>
    <Text style={numTxt}>{props.number}</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  number: {
   width: '30%',
   justifyContent: 'center',
   alignItems: 'center',
   padding: 10, 
   marginVertical: 10,
   borderColor: mainColors.secondary,
   borderWidth: 3

  },
  numTxt: {
      fontSize: 24,
      color: mainColors.secondary
  }
})
export default NumberDisplay