import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function GamePlay
**/
const GamePlay = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>GamePlay</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default GamePlay