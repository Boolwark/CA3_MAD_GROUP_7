import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

export default  props =>{
  const [fadeAnim] = useState(new Animated.Value(0));
  React.useEffect(()=>{
    Animated.timing(fadeAnim,{toValue:1,duration:1000}).start()
  },[fadeAnim]) 
  return <Animated.View style={{...props.style,opacity:fadeAnim}}>{props.children}</Animated.View>
}