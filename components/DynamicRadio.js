import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Radio = () => {
  const [radio, setRadio] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const updatedSkills = [
        {id: 0, title: 'C++'},
        {id: 1, title: 'C'},
        {id: 2, title: 'C#'},
        {id: 3, title: 'Java'},
        {id: 4, title: 'PHP'},
        {id: 5, title: 'React'},
        {id: 6, title: 'JavaScript'},
      ];
      setSkills(updatedSkills);
    }, 3000);
  }, []);

  return (
    <View>
      <Text style={styles.text}>Radio Button</Text>
      <Text style={styles.radioHeading}>Gender</Text>
      <View style={{marginLeft: 22}}>
        {skills.length > 0 ? (
          skills.map(skill => (
            <TouchableOpacity key={skill.id} onPress={() => setRadio(skill.id)}>
              <View style={styles.radioWrapper}>
                <View style={styles.radioInput}>
                  {radio === skill.id ? (
                    <View style={styles.radioInputChecked}></View>
                  ) : null}
                </View>
                <Text style={styles.radioText}>{skill.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <ActivityIndicator size={50} />
        )}
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
