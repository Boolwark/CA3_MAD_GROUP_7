import ReminderListing from "./ReminderListing"
import React from "react"
import Animated from "react-native-reanimated"
import Header from "./Header"
import CardContent from "./CardContent"
import {FAB} from "react-native-paper";
import {StyleSheet} from "react-native"

import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';
import DataModel from "./DataManager/DataModel"



export default function App({navigation}) {
   

    // Display a notification
    
 

  const[selected,setSelected] = React.useState({"title":"","desc":"","date":""}); // the reminder we chose to delete (long press)
  function onLongPress(reminder) {
    console.log("on long press selected.")
      setSelected(reminder);
      setVisible(true);
  }
  
const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (<>
  <Provider>
  <Header title="Home" subtitle="Flashcards" navigation={navigation} setVisible={setVisible} visible={visible}/>
  <CardContent title="daily challenge" subtitle="mix practice" onPressContent={()=>{
    console.log("Pressed content");
    navigation.navigate("BeginSessionScreen");
  }} onPressIcon={()=>{
    navigation.navigate("ShowAllCards");
  }}/>
    <ReminderListing onLongPress={onLongPress}></ReminderListing>
    <FAB icon="plus" onPress={()=>{
    navigation.navigate("CreateCardScreen")
    }} style={styles.fab}/>
    <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Delete this reminder?</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">{selected.title}</Text>
              <Text variant="bodyMedium">{selected.desc}</Text>
              <Text variant="bodyMedium">{selected.date}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={async ()=>{
                await DataModel.deleteReminder(selected);
                hideDialog()
                }}>YES</Button>
                
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
    </Provider>
  </>)

}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})