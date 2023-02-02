import StatsListing from "./components/StatsListing";
import * as React from "react"
import {Snackbar} from "react-native-paper"
import DataModel from "./components/DataManager/DataModel"
import {View,Button,Image} from "react-native"
import {Text} from "@react-native-material/core"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as ImagePicker from 'expo-image-picker';
export default function ({navigation,route}) {
  const user = route.params.user;
    const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [image, setImage] = React.useState(null);
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
      await DataModel.setProfileImageURI(result.uri);
      setVisible(true);
    }

    
  };
  return (<>
  <View>
  <AnimatedCircularProgress style={{alignSelf:"center"}}
  size={200}
  width={10}
  fill={90}
  tintColor="#00FF00"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875">
{()=>{
  return (<><Text  style={{fontWeight:"bold",fontSize:35}}> 100 XP</Text></>
)
}}
  </AnimatedCircularProgress>
    <Text style={{alignSelf:"center"}}> To the next level</Text>
  </View>
  <Text style={{fontWeight:"bold",fontSize:35}}> Your Stats</Text>
    <StatsListing user={user}></StatsListing>
    <Button title="Change profile image" onPress={pickImage}/>
   
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {
            // Do something
          },
        }}>
        Restart to see changes.
      </Snackbar>
 

  </>)
}
