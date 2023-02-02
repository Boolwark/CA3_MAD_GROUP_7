import ReminderListing from "./components/ReminderListing"
import Animated from "react-native-reanimated"
import Header from "./components/Header"
import FlashCards from "./components/FlashCards"
import UploadImageScreen from "./UploadImageScreen"
import SettingsScreen from "./SettingsScreen"
import CardContent from "./components/CardContent"
import CreateReminderScreen from "./CreateReminderScreen"
import CalendarScreen from "./CalendarScreen"
import ProfileScreen from "./ProfileScreen"
import HomeScreen from "./components/HomeScreen"
import DataScreen from "./components/DataScreen"
import PracticeSessionScreen from "./components/PracticeSession"
import CreateCardScreen from "./components/CreateCardScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeginSessionScreen from "./components/BeginSessionScreen.js"
import ResultScreen from "./components/ResultScreen"
import CreateDeckScreen from "./CreateDeckScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import SessionScreen from "./components/SessionScreen"
import NotificationsManager from "./components/Notifications/NotificationsManager"
import ShowAllCards from "./components/ShowAllCards"
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DrawerScreen from "./components/DrawerScreen"
  const Stack = createNativeStackNavigator();
    export default function App() {
  return (<>
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="HomeScreen" component = {HomeScreen} options={{ headerShown:false }}/>
  <Stack.Screen name = "ProfileScreen"component={ProfileScreen}/>
  <Stack.Screen name = "DrawerScreen"component={DrawerScreen} options={{title:"More"}} />
  <Stack.Screen name = "BeginSessionScreen" component={BeginSessionScreen} options={{title:"New session"}}/>
  <Stack.Screen name="FlashCards" component={FlashCards} options={{title:"Practice session"}}/>
  <Stack.Screen name="CreateCardScreen" component={CreateCardScreen} options={{title:"Create Card"}}/>
  <Stack.Screen name="ResultScreen" component={ResultScreen} options={{title:"Your result"}}/>
  <Stack.Screen name="CreateDeckScreen" component={CreateDeckScreen} options={{title:"Create Deck"}}/>
  <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{title:"Exam schedule"}}/>
  <Stack.Screen name="CreateReminderScreen" component={CreateReminderScreen} options={{title:"create reminder"}}/>
  <Stack.Screen name="ShowAllCards" component={ShowAllCards} options={{title:"Show All"}}/>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title:"Your settings"}}/>
   </Stack.Navigator>
  </NavigationContainer>
  </>)
}
function Test() {
  return (<UploadImageScreen/>)
}

