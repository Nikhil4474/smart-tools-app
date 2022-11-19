import React from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';



export default class CamScanner extends React.Component {
  render() {
    return(
        <View>
      <DocumentScanner
        style={styles.scanner}
        onPictureTaken={handleOnPictureTaken}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        quality={0.5}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
    </View>
    )
  }
}
