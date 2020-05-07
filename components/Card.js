import React from 'react'
import { View, StyleSheet } from 'react-native'


/**
* @author
* @function 
**/
const  Card= (props) => {


 return(
  <View style={{...styles.card, ...props.style}}>
    {props.children}
  </View>
  )
}


const styles = StyleSheet.create({
  card: {
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
  }
})
export default Card