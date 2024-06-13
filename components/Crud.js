import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Button,
  Alert,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Api = 'https://dummyjson.com/users';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserID] = useState('');
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState({firstName: ''});
  const [deleteModal, setdeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const getData = async () => {
    setLoader(true);
    try {
      const {data} = await axios.get(Api);
      setLoader(false);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const filteruser = async id => {
    const {data} = await axios.get(Api + `/${id}`);
    data &&
      (console.warn('Get Single User Successfully'),
      console.log(data),
      setInput({firstName: data?.firstName}));
  };
  const handleUpdate = async () => {
    const {data} = await axios.put(Api + `/${userId}`, input);
    data &&
      (console.log(data),
      console.warn('Update Successfully'),
      setUpdateModal(false));
  };
  const handleDelete = async () => {
    // console.log(userId);
    const {data} = await axios.delete(Api + `/${userId}`);
    data &&
      (console.warn('Delete Successfully'), setdeleteModal(false), getData());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>

      <Text>
        Hi user, do you want some user data? Click below:
        <Text onPress={getData} style={styles.btn}>
          Get Data
        </Text>
      </Text>

      <View style={styles.userList}>
        {users.length > 0 && (
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.box}>
                <Text style={{flex: 2}}>{item.id}</Text>
                <Text style={{flex: 2}}>{item.firstName}</Text>
                <Button
                  onPress={() => (setUserID(item.id), setdeleteModal(true))}
                  title="Del"
                />
                <Button
                  onPress={() => (
                    filteruser(item.id),
                    setUserID(item.id),
                    setUpdateModal(true)
                  )}
                  color={'green'}
                  title="update"
                />
              </View>
            )}
          />
        )}

        {loader && <ActivityIndicator size="large" color="skyblue" />}
      </View>

      {/* deleteModal want to del */}
      <Modal animationType="slide" transparent visible={deleteModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete This User</Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 50,
              }}>
              <Button onPress={handleDelete} title="Yes" />
              <Button onPress={() => setdeleteModal(false)} title="No" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Update Modal want to del */}
      <Modal animationType="slide" transparent visible={updateModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>User Details</Text>
            <TextInput
              keyboardType="numeric"
              value={userId.toString()}
              style={styles.input}
            />
            <TextInput
              value={input?.firstName}
              onChangeText={text => setInput({firstName: text})}
              style={styles.input}
              placeholder="Enter Name"
            />
            <View style={{flexDirection: 'row', gap: 80}}>
              <Button onPress={handleUpdate} title="Update" />
              <Button onPress={() => setUpdateModal(false)} title="cancel" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    color: 'skyblue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  userList: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  modalText: {marginBottom: 20, fontSize: 30, color: 'blue'},
  close: {
    fontSize: 12,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  deleteModal: {
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
  },
  input: {
    borderColor: 'skyblue',
    marginBottom: 10,
    borderWidth: 2,
    height: 40,
    width: 300,
  },
});

export default Crud;
