import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const Radio = () => {
  const [radio, setRadio] = useState(1);
  return (
    <View>
      <Text style={styles.text}>Radio Button</Text>
      <Text style={styles.radioHeading}>Gender</Text>
      <View style={{marginLeft: 22}}>
        <TouchableOpacity onPress={() => setRadio(1)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioInput}>
              {radio === 1 ? (
                <View style={styles.radioInputChecked}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRadio(2)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioInput}>
              {radio === 2 ? (
                <View style={styles.radioInputChecked}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>FeMale</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRadio(3)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radioInput}>
              {radio === 3 ? (
                <View style={styles.radioInputChecked}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>other</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'green',
  },
  radioHeading: {
    fontSize: 18,
    margin: 20,
    fontWeight: 'bold',
  },
  radioWrapper: {flexDirection: 'row', margin: 5},
  radioText: {fontSize: 16, marginLeft: 10},
  radioInput: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  radioInputChecked: {
    backgroundColor: 'black',
    height: 12,
    width: 12,
    margin: 2,
    borderRadius: 6,
  },
});
export default Radio;
