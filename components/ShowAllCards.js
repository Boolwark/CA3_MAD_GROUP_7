import * as React from 'react';
import { List,TextInput } from 'react-native-paper';
import DataModel from "./DataManager/DataModel"
import {FlatList,Image} from "react-native"
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';
import { View } from 'react-native';
// displays all the flashcards from the decks. Users can search for the card by their title. 
const MyComponent = () => {
  const [text, setText] = React.useState("");
  const [cards,setCards] = React.useState([])
  const [shownCards,setShownCards] = React.useState([]);
  const [selected,setSelected] = React.useState({"question":"","answer":""})
   const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  
  const renderItem = ({item,index})=>  <List.Item
    title={item.question}
    description={item.answer}
   onPress={()=>{

        setSelected(item);
        setVisible(true);
   }}
    left={()=>{
      if(item.uri) {
        console.log("getting img")
        return <Image  source={{uri:item.uri} } style={{ width: 50, height: 50 }}/>
      }
      return <List.Icon  icon="cancel" onPress={()=>{

    }}/>}}
  />
  React.useEffect(()=>{
    async function loadCards() {
      const allCards = []
      const decks = await DataModel.getDecks()
    
      for(let deck of decks) {
        for(let card of deck.cards) {
          allCards.push(card);
        }
      }
      setCards(allCards);
    
    }
    loadCards();
  },[cards])
  
  const onChangeText = text => {
        setText(text)
        setShownCards(cards.filter(card=>card.question.includes(text)))
  }
        
  return (<>
  <TextInput
      label="Search card"
      value={text}
      onChangeText={onChangeText
      }
    />
  <FlatList renderItem={renderItem} data={shownCards}></FlatList>
      <Provider>
      <View>
        
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Qns: {selected.question}</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Ans: {selected.answer}</Text>
              
            </Dialog.Content>
            <Dialog.Actions>
             <Button onPress={async ()=>{
               await DataModel.deleteFlashCard(selected);
            hideDialog()
             }}>Delete</Button>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
 </>
)};


export default MyComponent;