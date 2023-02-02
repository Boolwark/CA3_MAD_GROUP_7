import * as React from 'react';
import { List } from 'react-native-paper';
import {Divider} from "react-native-paper"
const MyComponent = ({navigation}) => {return (
  <>
  <List.Item
    title="Calendar"
    description="Set exam dates"
    onPress={()=>{
      navigation.navigate("CalendarScreen")
    }}
    left={props => <List.Icon {...props} icon="calendar" />}
  />
  <Divider/>
    <List.Item
    title="Create decks"
    description=""
    onPress={()=>{
      navigation.navigate("CreateDeckScreen")
    }}
    left={props => <List.Icon {...props} icon="book" />}
  />
    <Divider/>
    <List.Item
    title="Settings"
    description=""
    onPress={()=>{
      navigation.navigate("SettingsScreen")
    }}
    left={props => <List.Icon {...props} icon="cog" />}
  />
  </>
)};

export default MyComponent;