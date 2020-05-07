import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import mainColors from '../constants/colors'
import InputField from '../components/InputField';
/**
* @author
* @function 
**/
const  StartGame= (props) => {

const { screen, title, startButtons, inputContainer, inputCustom } = styles
 return(
  <View style={screen}>
    <Text style={title}>Lets Start the Game</Text>
    <Card style={inputContainer}>
        <Text>Select a Number</Text>
        <InputField  style={inputCustom} blurOnSubmit keyboardType="number-pad" maxLength={2}/>
        <View style={startButtons}>
            <Button accessibilityLabel="Reset Value" title="Reset" color={mainColors.primary} onPress={() => {}}/>
            <Button accessibilityLabel="Confirm Chosen Value" title="Confirm" color={mainColors.secondary} onPress={() => {}}/>
        </View>
    </Card>
  </View>
  )
}


const styles = StyleSheet.create({
    screen: {
     flex: 1,
     padding: 10,
     alignItems: 'center',
  },
  title:{
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer:{
    width: 300,
    maxWidth: '80%',
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 6,
    padding: 20,
    borderRadius: 10
  },
  startButtons:{
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between"
      
  },
  inputCustom: {
      width: 60,
      textAlign: "center"
  }
})
export default StartGame