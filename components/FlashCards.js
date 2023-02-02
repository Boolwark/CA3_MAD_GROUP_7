import React from 'react';
import Flashcard from "../FlashCard"
import { StyleSheet, View, Text,TouchableOpacity,Image,Button} from 'react-native';
import {Card} from "react-native-paper"
import DataModel from "./DataManager/DataModel"
import PagerView from 'react-native-pager-view';
const MyCard = props =>{
  const [text,setText]= React.useState("");
  const [disabled,setDisabled]=React.useState(false);
  const[flipped,setFlipped] = React.useState(true);
  return (
  <View style={styles.page} collapsable={ false}>
    <Text>{text}</Text>
    <TouchableOpacity onPress={()=>{
    
      
    if(!flipped) {
      // show the answer.
      setText("Answer: " +(props.card.answer)||"");
    }
    else {
      setText("Question: " + (props.card.question)||"");
    }
setFlipped(!flipped);
    }}>
   <Image
     source={{uri: props.card.uri ||'https://picsum.photos/700',}}
     style={{width: 250, height: 250}}
    />
      </TouchableOpacity>
      <Button disabled={disabled} color="green" title="correct" onPress={()=>{
        props.setNumCorrect(props.numCorrect+1);
        setDisabled(true);
      }}/>
            <Button color="red" title="wrong" disabled={disabled} onPress={()=>{
        setDisabled(true);
      }} />
            <Text>Answer streak: {props.numCorrect}</Text>
          </View>)
}
// this is the flashcards screen! the user 
const MyPager = ({navigation,route}) => {
  const [numCorrect,setNumCorrect] = React.useState(0);
  console.log(route.params)
  const deck =route.params.deck
  console.log("deck in mypager is " + deck);

  const [text,setText] = React.useState("");


  return (
    <>
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage= {0}>
        {deck.cards.map(card=><MyCard card={card} setNumCorrect={setNumCorrect} numCorrect={numCorrect}/>)}
  </PagerView>
  </View>
  <Button title="Complete?" onPress={()=>{navigation.navigate("ResultScreen",{percentage:numCorrect/deck.cards.length})}}/>
  </>
  );
};

const styles = StyleSheet.create({
  viewPager : {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPager;


