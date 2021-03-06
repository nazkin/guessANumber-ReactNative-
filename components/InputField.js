import React from 'react'
import { TextInput, StyleSheet } from 'react-native'


/**
* @author
* @function Input
**/
const Input = (props) => {

const { input } = styles
 return(
    <TextInput {...props} style={{...input, ...props.style}} />

  )
}


const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginVertical: 15

    }
})
export default Input