import React  from 'react';
import { CameraScreen } from 'react-native-camera-kit';
import { View, Alert } from 'react-native';

function QRScanScreen ({navigation}){
  let isFirst = true;
    return (
        <View style={{ flex: 1 }}>
        <CameraScreen
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor='white'
          //Color can be of your choice
          frameColor='blue'
          //If frame is visible then frame color
          colorForScannerFrame='black'
          //Scanner Frame color
          onReadCode={event => {
            if(!isFirst){return }
            isFirst = false;
            console.log(event.nativeEvent.codeStringValue)
            
            navigation.navigate('WebView', {
              qrData: event.nativeEvent.codeStringValue,
            });
          }
          }
        />
      </View>
    );
}

export default QRScanScreen;