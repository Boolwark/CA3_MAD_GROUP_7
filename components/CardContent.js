import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import {TouchableOpacity,StyleSheet} from "react-native"

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => {
  
  return(
<Card>
    <Card.Title title={props.title || "default title"} subtitle={props.subtitle || "default"} left= {LeftContent} />
   <TouchableOpacity onPress={props.onPressContent}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700'}}  />
    </TouchableOpacity>
     <Card.Content>
      <Text variant="titleLarge">{props.contentIntro}</Text>
      <Text variant="bodyMedium">{props.contentDesc}</Text>
    </Card.Content>


   
  </Card>

)};

export default MyComponent;