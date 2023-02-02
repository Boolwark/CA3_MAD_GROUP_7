import { Component } from 'react';
import * as React from "react"
import FadeInView from "./FadeInView"
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

export default function App({navigation}) {
  const [selectedDate,setSelectedDate] = React.useState("")
  const onDateChange = (newDate)=>{setSelectedDate(newDate)}
  return (<>
  
  <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
        />

        <View>
          <Text style={{fontSize:20}}>selected date:{ selectedDate.toString().split(" ").slice(0,4).join(" ") }</Text>
          <Button title="create reminder" onPress={()=>{
            navigation.navigate("CreateReminderScreen",{"date":selectedDate.toString().split(" ").slice(0,4).join(" ")});
          }}/>
        </View>
      </View>
      
        
  </>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
