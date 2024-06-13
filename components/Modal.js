import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';

const ModalCom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <View>
        <Text style={styles.text}>Modal Example</Text>
      </View>

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text style={[styles.btn, styles.close]}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={[styles.btn, styles.success]}>Success</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  success: {backgroundColor: 'green'},
  btnWrapper: {height: '90%', justifyContent: 'flex-end'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    color: 'blue',
  },
  close: {
    fontSize: 12,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default ModalCom;
