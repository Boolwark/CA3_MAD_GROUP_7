import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DataModel from "./components/DataManager/DataModel"
export default function UploadImageScreen() {
  const [image, setImage] = useState(null);
  const [disabled,setDisabled] = React.useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    setDisabled(false);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (<>
  <Text style={{justifyContent:"center",fontWeight:"200",fontSize:"30"}}>Decorate your cards!</Text>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    <Button title="Upload" disabled={disabled} onPress={async ()=>{
      await DataModel.addImageURI(image);
      setDisabled(true);
    }}/>
    </>
  );
}