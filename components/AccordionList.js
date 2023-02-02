import {FlatList} from 'react-native'
import {List} from "react-native-paper"
export default function(props) {
    const decks = props.decks;
    const setDeckTitle=props.setDeckTitle;
  return (<>


    <FlatList data={decks} renderItem={({item,index})=>{
      return (<><List.Accordion title={`Box ${item.title}`} id={`${index}`} onPress={setDeckTitle(item.title)}>
       <FlatList data={(decks && decks[index].cards)} renderItem={({item,index})=><List.Item title={item.question}></List.Item>}> </FlatList>
    </List.Accordion></>)
    
    }}/>
  </>)
}