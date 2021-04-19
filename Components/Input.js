import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
    input:{
        borderColor:'#808080',
        borderWidth:1,
        borderRadius:10
        
    },

    container :{
        padding:20,
    }
}); 


const Input =({lable,onChangeText,placeholder}) =>{
    return(
        <View style={style.container}> 
            <View >
            <Text>{lable}</Text>
            <TextInput 
             style={style.input} 
             onChangeText={(text) => onChangeText(text) }
             placeholder={placeholder}
             keyboardType="numeric"
            />
            </View>

           
        </View>
    );
    
}

export default Input;