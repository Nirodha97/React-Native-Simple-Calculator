import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Input from '../Components/Input';





class Firstpage extends React.Component{

    state={
        num1: 0 ,
        num2: 0,
        operator: "",
        result:0,
    };

   handleText = (text, inputNumber) => {
       if(Number.isInteger(+text)){
           inputNumber==1
            ?this.setState({num1: + text})
            : this.setState({num2: +text});
       }
   };

   handleOperation = (code) => {
       switch(code){
        case 1: 
            this.setState({result: this.state.num1 + this.state.num2});
            break;
        case 2: 
            this.setState({result: this.state.num1 - this.state.num2});
            break;
        case 3: 
            this.setState({result: this.state.num1 / this.state.num2});
            break;
        case 4: 
            this.setState({result: this.state.num1 * this.state.num2});
            break;
       }
   };

   clear =() =>{
    this.setState({result:0});
   };

   

    render(){

    
        return(
            <View >
               <Header/>
               <Input  
                    lable='First Number' 
                    onChangeText={(text) => this.handleText(text,1)} 
                    placeholder='Enter the First Number'
                />

               <Input  
                    lable='Second Number' 
                    onChangeText={(text) => this.handleText(text,2) }
                    placeholder='Enter the Second Number'
                />

                <View style={[{flexDirection: "row", justifyContent:'center',padding:10 }]}>
                    <Button text="+" onPress={()=>this.handleOperation(1)}/>
                    <Button text="-" onPress={()=>this.handleOperation(2)}/>
                    <Button text="/" onPress={()=>this.handleOperation(3)}/>
                    <Button text="*" onPress={()=>this.handleOperation(4)}/>
                </View>
                
               
               <View style={[{  alignItems:'center',top:10}]}>
                    <TouchableOpacity  style={[style.button]} onPress={()=>this.clear()}>
                    < Text style={[{color:'white',fontSize:20,fontWeight:'bold'}]}>CLEAR</Text>
                    </TouchableOpacity>
                <Text style={style.result}>{this.state.result}</Text>
               </View>
                
            </View>
        );
    }
}

const style = StyleSheet.create({
    result:{
        textAlign:'center',
        padding:10,
        fontSize:40,
        borderColor:'#808080',
        borderWidth:2,
        width:300,
        alignItems:'center',
        borderRadius:10,

    },

    button:{
        backgroundColor:'green',
        padding:10,
        marginBottom:20,
        borderRadius:5,
    }
});

export default Firstpage;