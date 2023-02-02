import {Button,Text} from "react-native"
import DataModel from "./DataManager/DataModel"
import AsyncStorage from '@react-native-async-storage/async-storage';
const FLASHCARDS_KEY ="@FLASHCARDS"
const DUMMY = [{"title":"default title","cards":[{"question":"1+1=?","answer":"2"}]},{"title":"default 2","cards":[{"question":"2+1=?","answer":"2"}]},{"title":"default 3","cards":[{"question":"3+1=?","answer":"2"}]}]

export default function App  (props){
  return (<>
  <Button title="Clear reminders" onPress={async ()=>{
    const reminders = await  DataModel.getReminders();
    console.log(reminders);
    
  }}/>
  <Button title="load in new user" onPress={async ()=>{
    await DataModel.saveUser({"totalHours":0,"numSessions":0,"numFlashcards":0})
    console.log(reminders);
  }}/>
  </>
 )
}