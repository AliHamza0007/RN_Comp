import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const PressableCom = () => {
  const handlePress = value => {
    console.warn(value);
  };
  return (
    <View style={styles.main}>
      <Pressable
        delayLongPress={5000}
        onLongPress={() => handlePress('long press')}
        // onPressIn={() => handlePress('In press')}
        // onPressOut={() => handlePress('Out press')}
        // onPress={() => handlePress('press')}
        style={styles.pressable_Btn_Wrapper}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {height: '100%', justifyContent: 'center', alignItems: 'center'},
  pressable_Btn_Wrapper: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 20,
    elevation: 5,
  },
  pressableBtn: {color: 'white'},
});
export default PressableCom;
