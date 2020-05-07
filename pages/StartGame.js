import React, {useState} from 'react'
import {Alert, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../components/Card'
import NumberDisplay from '../components/NumberDisplay';
import mainColors from '../constants/colors'
import InputField from '../components/InputField';
/**
* @author
* @function 
**/
const  StartGame= (props) => {
    const [guessValue, setGuessValue] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    
    const inputValidatorHandler = (input) => {
        setGuessValue(input.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = ()=> {
        setGuessValue("");
        setIsConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenOne = parseInt(guessValue);
        if( isNaN(chosenOne)|| chosenOne <=0 || chosenOne > 99){
            Alert.alert('Invalid choice', 'Choose between 1 and 99', [{text: 'ok', onPress: resetInputHandler}]);
            return;
        }
        setIsConfirmed(true);
        setSelectedValue(chosenOne);
        setGuessValue("");
        Keyboard.dismiss();
    }

    let confirmedValue;
    if(isConfirmed){
        confirmedValue = (<Card style={styles.startContainer}>
                            <Text style={styles.startText}>You selected </Text> 
                            <NumberDisplay number={selectedValue} />
                                <Button title="Go!"/>   
                        </Card>)
    }
const { screen, title, startButtons, inputContainer, inputCustom } = styles
 return(
<TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
  <View style={screen}>
    <Text style={title}>Lets Start the Game</Text>
    <Card style={inputContainer}>
        <Text>Select a Number</Text>
        <InputField
          onChangeText={inputValidatorHandler}
          value={guessValue}
          style={inputCustom} blurOnSubmit keyboardType="number-pad" maxLength={2}/>
        <View style={startButtons}>
            <Button accessibilityLabel="Reset Value" title="Reset" color={mainColors.primary} onPress={resetInputHandler}/>
            <Button accessibilityLabel="Confirm Chosen Value" title="Confirm" color={mainColors.secondary} onPress={confirmInputHandler}/>
        </View>
    </Card>
    {confirmedValue}
  </View>
</TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    screen: {
     flex: 1,
     padding: 10,
     alignItems: 'center',
     marginVertical:15
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
  },
  startContainer:{
      marginTop: 5,
      width: '70%',
      alignItems: "center",
      justifyContent: "center",
      borderTopColor: "grey",
      borderTopWidth: 1
  },
  startText: {
      fontSize: 18,
      marginVertical: 10
  }
})
export default StartGame