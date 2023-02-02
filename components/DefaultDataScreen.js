import {Button} from "react-native"
import DataModel from "./DataManager/DataModel"
export default function App() {
  return <Button onPress={()=>{
      DataModel.saveDecks([{'title':"default deck title", 'cards':[{'question':"what is 1+1?","answer":"2"}]}])
  }}> </Button>
}