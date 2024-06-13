import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const AsyncStorageCom = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    name: '',
    password: '',
    passwordType: true,
  });

  const handleLogin = async () => {
    if (!user.name || !user.password) {
      console.warn('Please fill in all required fields.');
      return;
    }
    // console.log(user);
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setUser({name: '', password: '', passwordType: true});
      console.warn('Login successful.');
      setLogin(true);
      getData();
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };
  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('user');
      data && console.log(data), setLogin(true), setUser(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleLogout = () => {
    setLogin(false);
    setUser({
      name: '',
      password: '',
      passwordType: true,
    });
    removeData();
    console.log('Logout Successfully');
  };
  return !login ? (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Page</Text>
      <TextInput
        onChangeText={text => setUser({...user, name: text})}
        value={user?.name}
        placeholder="Enter Name"
        style={styles.input}
      />
      <View style={{position: 'relative'}}>
        <TextInput
          onChangeText={text => setUser({...user, password: text})}
          value={user?.password}
          secureTextEntry={user?.passwordType}
          placeholder="Enter password"
          style={styles.input}
        />
        <Text
          style={styles.password_btn}
          onPress={() => setUser({...user, passwordType: !user?.passwordType})}>
          {user?.passwordType ? 'Show' : 'Hide'}
        </Text>
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.btn_Login} onPress={handleLogin}>
          Login
        </Text>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Text
        //   style={styles.heading}
        className=" text-center font-bold text-3xl underline  ">
        Home Page
      </Text>
      <View>
        <Text style={styles.userdetail}>Name: {user?.name}</Text>
        <Text style={styles.userdetail}>Password: {user?.password}</Text>
      </View>
      <View style={styles.btnWrap}>
        <Text
          style={styles.btn_Login}
          className="bg-red-700 text-red-700"
          onPress={handleLogout}>
          Logout
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: 20, flex: 1, justifyContent: 'center'},
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    borderColor: 'gray',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  password_btn: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  btnWrap: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_Login: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 18,

    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 9,
  },
  userdetail: {fontSize: 20, padding: 20, fontWeight: '500'},
});
export default AsyncStorageCom;
