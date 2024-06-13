import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Responsiveui = props => {
  const {name, age} = props.route.params;
  console.log(props);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Responsive ui Design Using Flex</Text>
      </View>
      <View style={styles.box1}>
        <View style={(styles.box12, {fontSize: 25})}>
          <Text>{name}</Text>
        </View>
        <View style={(styles.box13, {fontSize: 25})}>
          <Text>{age}</Text>
        </View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'red', height: '100%'},
  box1: {flexDirection: 'row', flex: 2, backgroundColor: 'yellow'},
  box12: {flex: 1, backgroundColor: 'green'},
  box13: {flex: 1, backgroundColor: 'black'},
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box3: {
    flex: 1,
    backgroundColor: 'pink',
  },
  text: {
    backgroundColor: 'red',
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Responsiveui;
