import * as React from 'react';
import DataModel from "./components/DataManager/DataModel"
import NotificationsManager from "./components/Notifications/NotificationsManager"
import CustomSwitch from "./CustomSwitch";
import {View} from "react-native";
import  {Button} from "react-native";
import { Avatar, Card, Text ,TextInput,Divider,Snackbar} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="alarm" />

const MyComponent = ({navigation,route}) => {
  const [notification,setNotification] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [title,setTitle] = React.useState("")
  const [desc,setDesc] = React.useState("")
  const date = route.params.date;
  return(<>
  <Card>
    <Card.Title title={date} left={LeftContent} />
    <Card.Content>
          <TextInput
      label="title"
      value={title}
      onChangeText={text => setTitle(text)}
    />
    <Divider/>
        <TextInput
      label="description"
      value={desc}
      onChangeText={text => setDesc(text)}
    />
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
   
      
    </Card.Actions>
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'ok',
          onPress: () => {
            // Do something
          },
        }}>
        Reminder is created.
      </Snackbar>
      
  </Card>
  <CustomSwitch label="Set notifications" value={notification} setValue={setNotification}/>
  <Button onPress={async ()=>{
        setVisible(true)
        DataModel.addReminder({"title":title,"desc":desc,"date":date})
        console.log("reminder is saved.")
        if(notification) {
          await NotificationsManager.scheduleNotification({"title":title,"desc":desc,"date":date});
        }
      }} title="Ok"></Button>
  </>
  
)};

export default MyComponent;