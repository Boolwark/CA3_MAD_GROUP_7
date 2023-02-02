import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';



const MyComponent = (props) => (
  <Card>
    <Card.Title title={props.title} subtitle={props.subtitle}   />
    <Card.Content>
    
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  
  </Card>
);

export default MyComponent;