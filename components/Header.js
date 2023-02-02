import React from "react";
import { AppBar, HStack, IconButton,Avatar,Stack,Surface } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {View} from "react-native"
import {
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";
import DataModel from "./DataManager/DataModel"

import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';

const App = ({navigation,title,subtitle,setVisible,visible}) => {
    const [URI,setURI] = React.useState("");
    React.useEffect(()=>{
      async function loadProfilePic() {
const URI = await DataModel.getProfileImageURI();
console.log("profile pic loaded  " + URI)
      setURI(URI);
      }
      loadProfilePic();
      
    },[URI])
  return (
    <>
    <AppBar
 
    title={title}
    subtitle={subtitle}
    leading={props => (
      
      <IconButton onPress={()=>{
         
         //on press for menu
         navigation.navigate("DrawerScreen");
 
      


      }}icon={props => <Icon name="menu" {...props} />} {...props} />
       
    )}
    trailing={props => (
      <HStack>
        <IconButton onPress={async ()=>{
          const user = await DataModel.getUser();
          
          navigation.navigate("ProfileScreen",{user:user});
          }}

          icon={props => <Avatar image={{ uri: URI }} />}
          {...props}
        />

        <IconButton
          icon={props => <Icon onPress={()=>{
            
            navigation.navigate("ShowAllCards");
          }} name="magnify" {...props} />}
          {...props}
        />
 
      </HStack>
     
    )}
    
  />
  </>
)
};

 export default App