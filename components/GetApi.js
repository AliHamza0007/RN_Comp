import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
const api = 'https://jsonplaceholder.typicode.com/users';

const GetApi = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const {data} = await axios.get(api);
    data && setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {users && (
        <FlatList
          numColumns={3}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserData item={item} />}
        />
      )}
    </View>
  );
};
const UserData = ({item}) => {
  return (
    <View style={styles.box}>
      <Text>{item.name}</Text>
      <Text>{item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: 'red',
    height: 100,
    width: 100,
  },
});
export default GetApi;
