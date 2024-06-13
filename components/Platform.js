import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

const PlatformComp = () => {
  console.log(Platform);
  return (
    <View>
      <Text style={btn.btn}> PlatForm : {Platform.OS}</Text>
      <Text style={Platform.OS === 'android' ? btn.textAndroid : btn.textIOS}>
        {Platform.OS === 'android' ? 'Android' : 'IOS'}
      </Text>
      <Text style={btn.btn}>
        {Platform.__constants.reactNativeVersion.minor}
      </Text>
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
  textAndroid: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
  },
  textIOS: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  success: {backgroundColor: 'green'},
});
export default PlatformComp;
