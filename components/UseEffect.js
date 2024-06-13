import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const UseEffect = () => {
  const [state, setState] = useState('Mount');
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(state);
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <View>
      <Text>This is simple Text</Text>
      <Text>{state}</Text>
      <Text>{show ? 'Show' : 'Hide'}</Text>
      <Button title="Update State" onPress={() => setState('Did Update')} />
      <Button title="Toggle" onPress={() => setShow(!show)} />
      {show ? <Child /> : ''}
    </View>
  );
};

export default UseEffect;
const Child = () => {
  useEffect(() => {
    return () => console.log('Child');
  });

  return (
    <View style={{padding: 20, backgroundColor: 'green ', margin: 20}}>
      <Text style={{fontSize: 25, color: 'red', textAlign: 'center'}}>
        Child Component
      </Text>
    </View>
  );
};
