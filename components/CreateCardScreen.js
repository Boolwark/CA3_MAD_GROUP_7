import * as React from 'react';
import { TextInput,Text,Divider} from 'react-native-paper';
import {TouchableOpacity,StyleSheet,Button,View,Image} from "react-native"
import DataModel from "./DataManager/DataModel"
import DeckSelectionList from "./DeckSelectionList"
import * as ImagePicker from 'expo-image-picker'
const MyComponent = () => {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');
  const [question,setQuestion] = React.useState("")
  const [answer,setAnswer] = React.useState("")
  // add this to the deck. 
  //load all of the decks from the datamodel.
  const [decks,setDecks] = React.useState([{title:"t",cards:[]}]);
  const [deckTitle,setDeckTitle] = React.useState("");
  const [URI,setURI] = React.useState("")
    const pickImage = async () => {
      
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log(result);

    if (!result.canceled) {
      console.log("setting URI")
      setURI(result.uri);
    }
    };
  React.useEffect(()=>{
    async function loadDecks() {
      const decks = await DataModel.getDecks()
     
      setDecks(decks);
    }
    loadDecks();
  },[decks])
  return (
    <>
    <Text style={styles.titleText}> Question </Text>
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      onChangeText={newText=>setQuestion(newText)}
      right={<TextInput.Affix text="/100" />}
    />
        <Divider />
     <Text style={styles.titleText}> Answer </Text>
    <TextInput
      mode="outlined"
      label="Outlined input"
      placeholder="Type something"
      onChangeText={newText=>setAnswer(newText)}
      right={<TextInput.Affix text="/100" />}
    />
      <Divider />
    <Text style={styles.titleText}>Select Deck</Text>
        <DeckSelectionList decks={decks} setDeckTitle={setDeckTitle} deckTitle ={deckTitle}/>
    <Button title="Create" onPress={async ()=>{
      console.log("called add new card")
      // select the deck with the title and add it in. Save with ASYNC STORAGE
      await DataModel.addCard({question:question,answer:answer,uri:URI},deckTitle);
      const user = await DataModel.getUser()
      user["numFlashcards"]+=1;
      await DataModel.saveUser(user);
    }}></Button>
    <Button title="Pick an image from camera roll" onPress={pickImage} />
    <View>{URI && <Image source={{ uri: URI }} style={{ width: 200, height: 200 }} />}</View>
    
    </>
  );
};
const styles = StyleSheet.create({titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },cancelText:{fontSize:14,alignSelf:"center"}})
export default MyComponent;