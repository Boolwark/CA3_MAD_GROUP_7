import * as React from 'react';
import {StyleSheet} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import DataModel from "./DataManager/DataModel"
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = ({navigation,route}) => {
 const percentage = route.params.percentage;
 console.log("percentage is "+ percentage)

  return (
 
  <Card>
    <Card.Title title={"You scored" + " ".repeat(5) + percentage*100 + "%"}  left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge" style={(percentage<0.5)?styles.fail:styles.pass }>Practice makes perfect</Text>
      
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
   
      <Button onPress={async ()=>{
        console.log("saving user prgoress");
        const user = await DataModel.getUser()
        
        user["numSessions"]+=1;
        console.log("new user is "+ JSON.stringify(user))
         await DataModel.saveUser(user);
        navigation.navigate("HomeScreen");
      }}>Ok</Button>
    </Card.Actions>
  </Card>
)};
const styles = StyleSheet.create({
  fail:{color:"red"},
  pass:{color:"green"}
})
export default MyComponent;