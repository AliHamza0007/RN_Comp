import React from 'react';
import {View, Button, StyleSheet, TouchableHighlight, Text} from 'react-native';

const ButtonGroup = () => {
  return (
    <View>
      <Button title="Normal Button 1" />
      <TouchableHighlight>
        <Text style={btn.btn}>Btn</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[btn.btn, btn.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[btn.btn, btn.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[btn.btn, btn.danger]}>Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[btn.btn, btn.warning]}>Warning</Text>
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
  warning: {backgroundColor: 'orange'},
  primary: {backgroundColor: 'blue'},
  danger: {backgroundColor: 'red'},
});
export default ButtonGroup;
