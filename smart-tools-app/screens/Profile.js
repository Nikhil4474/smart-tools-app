import React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { Avatar } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      useId: firebase.auth().currentUser.email,
      image: '',
      name: '',
      docId: '',
    };
  }
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    console.log('what is cancelled', cancelled);
    console.log('what is uri', uri);

    if (!cancelled) {
      this.uploadImage(uri, this.state.useId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    // api
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child('user_profile/' + imageName);
    return ref.put(blob).then((res) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = async (imageName) => {
    var stroageref = firebase
      .storage()
      .ref()
      .child('user_profile/' + imageName);

    stroageref
      .getDownloadURL()
      .then((url) => {
        this.setState({
          image: url,
        });
      })
      .catch((error) => {
        this.setState({
          image: '#',
        });
      });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            source={{ uri: this.state.image }}
            rounded
            showEditButton
            size={'large'}
            containerStyle={{
              backgroundColor: 'white',
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
            onPress={() => {
              this.selectPicture();
            }}
          />
        </View>
      </View>
    );
  }
}
