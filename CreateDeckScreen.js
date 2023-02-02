import * as React from 'react';
import {Button} from "react-native"
import { Avatar, Card, Text,TextInput,Snackbar } from 'react-native-paper';
import DataModel from "./components/DataManager/DataModel"


const MyComponent = () => {
   const [deckTitle, setDeckTitle] = React.useState("");
    const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  return(
    <>
  <Card>
   <TextInput
      label="Deck Title"
      value={deckTitle}
      onChangeText={newText => setDeckTitle(newText)}
    />
    <Button title="Create" onPress={async ()=>{
      await DataModel.addDeck(deckTitle);
      setVisible(true)
    }}/>
  </Card>

  <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'ok',
          onPress: () => {
            // Do something
            onDismissSnackBar()
          },
        }}>
        New deck added.
      </Snackbar>
      </>
)};

export default MyComponent