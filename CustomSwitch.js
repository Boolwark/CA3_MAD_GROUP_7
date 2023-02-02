import * as React from 'react';
import {View} from "react-native"
import { Switch,Text,Card,Divider} from 'react-native-paper';

const MyComponent = (props) => {

  const {label,value,setValue} = props




  return (<View style={{justifyContent:"space-evenly",flexDirection:"row"}}>
  <Text style={{fontSize:20,fontWeight:"200"}}> {label} </Text>
  <Switch value={value} onValueChange={value=>{
    console.log(value);
    setValue(value);
  }} />
  </View>
 
);
};

export default MyComponent;