import  React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const MyComponent = (props) => {
  const options = props.options
  const [value, setValue] = React.useState('A');
  const setSelected = props.setSelected;
  return (
    <RadioButton.Group onValueChange={newValue => {
      setValue(newValue)
      setSelected(newValue)
    }} value={value}>
      <View>
        <Text>{"A.   " + options['A']}</Text>
        <RadioButton value="A" />
      </View>
      <View>
        <Text>{"B.   " + options['B']}</Text>
        <RadioButton value="B" />
      </View>
        <View>
        <Text>{"C.   " + options['C']}</Text>
        <RadioButton value="C" />
      </View>
        <View>
        <Text>{"D.   " + options['D']}</Text>
        <RadioButton value="D" />
      </View>
    </RadioButton.Group>
  );
};

export default MyComponent;