import React, { Component, useState } from 'react';
import {View, Text, TouchableOpacity, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modalbox';

const {height, width} = Dimensions.get("window");

export const FloatingButton = () => {
    const [visible, setVisible] = useState(false);

    return (
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1635035989061-8c10b8c9e73a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80',
        }}
        style={{
          flex: 1,
        }}>
        <Modal
          entry="bottom"
          backdropPressToClose={true}
          isOpen={visible}
          onClosed={() => setVisible(false)}
          style={[{height, width}, styles.modal]}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={styles.container}>
              <View style={styles.subContainer}>
                <View style={styles.boxIcon}>
                  <Text style={styles.textBox}>Facebook</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="facebook" size={18} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.subContainer}>
                <View style={styles.boxIcon}>
                  <Text style={styles.textBox}>Twitter</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="twitter" size={18} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.subContainer}>
                <View style={styles.boxIcon}>
                  <Text style={styles.textBox}>Instagram</Text>
                </View>
                <TouchableOpacity style={styles.icon}>
                  <Icon name="instagram" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVisible(!visible)}
            />
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisible(!visible)}>
          <Icon name="share-alt" size={20} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  modal: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    bottom: 76,
    right: 26,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxIcon: {
    width: 100,
    height: 25,
    backgroundColor: 'transparent',
    marginBottom: 8,
    marginRight: 5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  textBox: {
    color: '#fff',
    fontWeight: '700',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#2962ff',
    borderRadius: 50,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#2962ff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});