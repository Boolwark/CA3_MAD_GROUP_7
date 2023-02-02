import * as React from 'react';
import { List } from 'react-native-paper';
import {View,FlatList,Text,Button} from "react-native"
import DataModel from "./DataManager/DataModel"
import DeckSelectionList from "./DeckSelectionList"
import Slider from '@react-native-community/slider';
const MyComponent = ({navigation}) => {
  
  
  //load data from RN async storage.
  const [decks,setDecks]=React.useState([])
  const [perc,setPerc] = React.useState(0);
  const [deckTitle,setDeckTitle] = React.useState("");
  React.useEffect(  ()=>{
    async function loadDecks(){
  
    const loadedDecks = await DataModel.getDecks()
    setDecks(loadedDecks);
  
    }
    loadDecks();

    
    },[decks])
  

  return (<>

    <List.Section title="Boxes">
     
      <DeckSelectionList decks={decks} setDecks={setDecks} deckTitle={deckTitle} setDeckTitle={setDeckTitle}/>

    </List.Section>
    <Text>% of cards to test from deck</Text>
    
     <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
     <Slider
  style={{width: 100, height: 40}}
  minimumValue={0}
  maximumValue={1}
  value={perc}
  onValueChange={setPerc}

  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>
    <Button title="Begin" onPress={async ()=>{
      const deck = await DataModel.getDeck(deckTitle);
      console.log("clicked start")
      console.log(deck);
      navigation.navigate("FlashCards",{deck:{...deck,"cards":deck.cards.slice(0,Math.floor(deck.cards.length * perc))}});
    }}></Button>
    <Button title="Mix" onPress={async ()=>{
      const deck = await DataModel.getRandomCards(perc); 
      // eron's function here.
      console.log(deck)
      navigation.navigate("FlashCards",{"deck":deck});
    }}></Button>
    </View>
    </>
   
  );
};

export default MyComponent;