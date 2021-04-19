import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


const style = StyleSheet.create ({
    bar : {
        alignItems:'center',
        padding:10,
        backgroundColor:'#008000',
       borderBottomEndRadius:10,
       borderBottomStartRadius:10,
    }
})


class Header extends  React.Component{
    render(){
        return(
            <View style={style.bar}>
                <Text style={[{fontSize:18,color:'white'}]}>Calculator</Text>
            </View>
        );
    }
}

export default Header;