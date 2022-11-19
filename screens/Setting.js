import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { RFValue } from 'react-native-responsive-fontsize';

export default class SettingScreen extends React.Component{
  render() {
    return (
      <View>
        {' '}
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
            this.props.navigation.navigate('login');
          }}
        >
          {' '}
          <Text>Log Out</Text>{' '}
        </TouchableOpacity>{' '}
      </View>
    );
  }
}