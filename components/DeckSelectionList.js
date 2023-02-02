import * as React from 'react';
import {FlatList,View} from "react-native"
import { List,RadioButton } from 'react-native-paper';

const MyComponent = (props) => {
  // pass in the selected deckIdx
  const setDeckTitle = props.setDeckTitle;
  const deckTitle = props.deckTitle;
  let decks = props.decks
  if(decks.length === 0) {
    
    decks=[{title:"t",cards:[]}]
  }
  const renderDeckItem = ({item,index})=>{
    
    return (<><List.Item
    title={item.title}
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" /> }
  />
   <RadioButton
        value={item.title}
        status={ deckTitle === item.title ? 'checked' : 'unchecked' }
        onPress={() => setDeckTitle(item.title)}
      />
  </>)}
 
  return (
  <>
  <FlatList renderItem={renderDeckItem} data={decks}>
  
  </FlatList>
  </>
)};

export default MyComponent;