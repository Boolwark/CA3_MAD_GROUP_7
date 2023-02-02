import * as React from 'react';
import {View,Button} from "react-native"
import { Avatar,  Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon={props.icon} />

const MyComponent = (props) => {
  const answer = props.answer;
  const correct = props.correct;
  const description = props.description
  const session = props.session
  console.log(answer)
  console.log(correct)
  return(
  <Card>
    <Card.Title title="Answer"/>
   
    <Card.Cover source={(answer===correct)? require("../correct.jpeg"):require("../wrong.png")} />
     <Card.Content>
      <Text variant="titleLarge">{(answer===correct)? <Text style={{color:"green" , alignSelf:"center"}}>correct</Text>:<Text style={{color:"red",alignSelf:"center"}}>Incorrect</Text>}</Text>
      <Text variant="bodyMedium">description : {description}</Text>
    </Card.Content>

 <View>
  <Button title="continue" onPress={()=>{
    props.onPressContinue();
  }}></Button>
  </View>
  </Card>

)
};

export default MyComponent;