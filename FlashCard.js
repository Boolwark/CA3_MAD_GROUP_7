import * as React from 'react';
import {TouchableOpacity,View} from "react-native"
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => {
  const [flipped,setFlipped] = React.useState(false);
  const [text,setText] = React.useState(props.card&&props.card.question)
  return(
  <View>
    <Card.Title title={text} left={LeftContent} />
    <TouchableOpacity onPress={()=>{
      console.log("pressed on the card")
    if(!flipped) {
      // show the answer.
      setText(props.card&&props.card.answer);
    }
    else {
      setText(props.card&&props.card.question);
    }
    setFlipped(!flipped);
    }}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </TouchableOpacity>
    
  </View>
);}

export default MyComponent;