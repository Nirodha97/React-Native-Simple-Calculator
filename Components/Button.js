import React from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button:{
        padding:10,
        marginHorizontal:10,
        backgroundColor:'green',
        width: 60,
        height:60,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:50,
       
    },
});


const Button =({text, onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={[style.button]}>
            <Text style={[{color:'white',fontSize:20,fontWeight:'bold'}]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;