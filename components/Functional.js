import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
const api = 'https://jsonplaceholder.typicode.com/users';

const Functional = () => {
  const [Show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
  });
  const handleUserDetails = () => {
    if (user.name === '' || user.password === '' || user.email === '') {
      return console.warn('Please Enter Details');
    }
    console.log(user.name, user.password, user.email);
    setShow(true);

    setTimeout(() => {
      setShow(false);
      setUser({
        name: '',
        password: '',
        email: '',
      });
    }, 5000);
  };
  const getData = async () => {
    const {data} = await axios.get(api);
    data && setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {/* <Text style={styles.header}>Enter Details</Text>
      <TextInput
        value={user.name}
        onChangeText={e => setUser({...user, name: e})}
        style={styles.inputUser}
        placeholder="Enter Name..."
      />
      <TextInput
        value={user.email}
        onChangeText={e => setUser({...user, email: e})}
        style={styles.inputUser}
        placeholder="Enter Email..."
      />
      <TextInput
        value={user.password}
        onChangeText={e => setUser({...user, password: e})}
        style={styles.inputUser}
        secureTextEntry
        placeholder="Enter password..."
      />
      <Button onPress={handleUserDetails} title="Print Details" /> */}
      {/* <Button onPress={getData} title="get Data" />
      {Show ? (
        <View>
          <Text style={styles.userDetails}>Please Check Details</Text>
          <View style={styles.showDetails}>
            <Text>Name:{user.name}</Text>
            <Text>Email:{user.email}</Text>
            <Text>Password:{user.password}</Text>
          </View>
        </View>
      ) : (
        ''
      )} */}
      {/* <ScrollView>
        {users &&
          users?.map(p => (
            <View key={p.id} style={styles.showDetails}>
              <Text>Name:{p.name}</Text>
              <Text>Email:{p.email}</Text>
              <Text>Password:{p.password}</Text>
            </View>
          ))}
      </ScrollView> */}
      {/* {users && (
        <FlatList
          data={users}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserData item={item} />}
        />
      )} */}
      <Section />
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

const user = [
  {name: 'A', id: 1, data: ['Pizza', 'Burger', 'Risotto']},
  {name: 'B', id: 2, data: ['French Fries', 'Onion Rings', 'Fried Shrimps']},
  {name: 'C', id: 3, data: ['Water', 'Coke', 'Beer']},
  {name: 'D', id: 4, data: ['Cheese Cake', 'Ice Cream']},
];

const Section = () => {
  return (
    <SectionList
      sections={user}
      renderItem={({item}) => (
        <View>
          <Text style={{marginStart: 20}}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {name}}) => (
        <Text style={{fontSize: 20, color: 'red', marginStart: 10}}>
          {name}
        </Text>
      )}
    />
  );
};
const styles = StyleSheet.create({
  flex: {flex: 1, flexWrap: 'wrap', flexDirection: 'row'},
  header: {
    fontSize: 28,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'white',
  },
  inputUser: {
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 5,
    margin: 10,
  },
  userDetails: {
    marginTop: 20,
    padding: 4,
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'lightgreen',
  },
  showDetails: {padding: 20},
  box: {
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: 'red',
    height: 100,
    width: 100,
  },
});
export default Functional;
