import * as React from 'react';
import CustomSwitch from "./CustomSwitch"
import NotificationsManager from "./components/Notifications/NotificationsManager"
import {Button} from "react-native"

const MyComponent = () => {
  
 const[notifications,setNotifications] = React.useState(false);

  return (<>
  <CustomSwitch label={"notifications"} value={notifications} setValue={setNotifications}/>
  <Button title="save" onPress={async ()=>
  {

      NotificationsManager.enableNotifications(notifications);
    
  }}>
  </Button>
  </>);
};

export default MyComponent;