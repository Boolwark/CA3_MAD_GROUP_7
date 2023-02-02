import React, {useRef, useState} from 'react';
import DataModel from "./DataManager/DataModel"
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePaginationDot from './SimplePaginationDot';

const {width: windowWidth} = Dimensions.get('window');

const imageURIs = [
  {
    uri: 'https://i.imgur.com/GImvG4q.jpg',
    
  },
  {
    uri: 'https://i.imgur.com/Pz2WYAc.jpg',

  },
  {
    uri: 'https://i.imgur.com/IGRuEAa.jpg',
    
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',

  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',

  },
];

function hash(reminder) {
  if(!reminder.title || !reminder.desc) return 0;
  return (reminder.title.length+reminder.desc.length) % imageURIs.length;
}

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const onLongPress = props.onLongPress;
  const [reminders,setReminders] = React.useState([]);
  React.useEffect(()=>{
    async function loadReminders() {
      const data = await DataModel.getReminders();
      
      if(data != undefined) {
        data.forEach(reminder=>reminder["uri"] = imageURIs[hash(reminder)].uri)
        setReminders(data);
      }
      else {
        setReminders([]);
      }
    
 
    }
    loadReminders()
  },[reminders])
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index} )  {
    const {title, desc,uri,date} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }} onLongPress={()=>{onLongPress(item)}}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>{date.split(" ").slice(0,4).join(" ")}</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{desc}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
    <Text style={{fontWeight:"bold",fontSize:35}}> Reminders </Text>
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={reminders}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePaginationDot currentIndex={currentIndex} length={reminders.length} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#141518', paddingVertical: 20},
  carousel: {
    backgroundColor: '#141518',
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});