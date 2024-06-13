import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Text,
} from 'react-native';

const Status_Bar = () => {
  const [bar, setBar] = useState(false);
  const [barTheme, setBarTheme] = useState('');
  const handleBarTheme = () => {
    barTheme === 'dark-content'
      ? setBarTheme('light-content')
      : barTheme === 'light-content'
      ? setBarTheme('dark-content')
      : setBarTheme('dark-content');
  };
  return (
    <View style={{height: '100%'}}>
      <StatusBar
        barStyle={barTheme ? barTheme : 'default'}
        backgroundColor={'red'}
        hidden={bar}
      />
      <Button title="Normal Button 1" />

      <TouchableHighlight onPress={() => setBar(!bar)}>
        <Text style={[btn.btn, btn.success]}>
          {bar ? 'Hide Bar' : 'Show Bar'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={handleBarTheme}>
        <Text style={btn.btn}>
          {barTheme === 'dark-content'
            ? 'Light Bar'
            : barTheme === 'light-content'
            ? 'Dark Bar'
            : ''}
        </Text>
      </TouchableHighlight>
    </View>
  );
};
const btn = StyleSheet.create({
  btn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  success: {backgroundColor: 'green'},
});
export default Status_Bar;
