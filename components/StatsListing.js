import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";
import DataModel from "./DataManager/DataModel"
import * as React from "react"
export default (props) => {
   const user = props.user;
  const[data,setData] = React.useState( [
  {
    title: "Completed",
    value: user["numSessions"],
    key:"numSessions",
    unit: "Sessions",
    primaryColor: "#10CFE4",
    imageSource: require("../assets/snack-icon.png"),
  },
  {
    title: "Studied",
    value: user["totalHours"],
    key:"totalHours",
    unit: "Hours",
    primaryColor: "#c84cf0",
    imageSource: require("../assets/snack-icon.png"),
  },
  {
    title: "Created",
    value: user["numFlashcards"],
    key:"numFlashcards",

    unit: "Flashcards",
    primaryColor: "#10E471",
    imageSource: require("../assets/snack-icon.png"),
  },
]);

  
  return(
  
  <>
  <BeautifulHorizontalList data={data} />
  </>)}