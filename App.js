import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WebviewScreen from './src/components/WebviewScreen';
import QRScanScreen from './src/components/QRScanScreen';

import messaging from '@react-native-firebase/messaging';




const Stack = createStackNavigator();

const App = () => {
  useEffect(()=>{
    if(Platform.OS === "ios"){
      requestUserPermission()
    }else{
      messaging().getToken().then((token)=>{
        console.log('FCM token:', token);
      });
    }
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {

      console.log('Message handled in the background!', remoteMessage);
    });

    // Push 
    messaging().onMessage(async remoteMessage => {
        
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      
    });
    // Push click Event
    messaging().onNotificationOpenedApp(remoteMessage => {
    
      console.log(
      
      'Notification caused app to open from background state:',
      
      remoteMessage.notification,
      
      );
      
       
      
      });
  },[])
  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
      messaging().getToken().then((token)=>{
        console.log('FCM token:', token);
      });
      
    }else {
      console.log('fcm auth fail');
    }
    
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"WebView"} component={WebviewScreen} initialParams={{ qrData: 0 }}/>
        <Stack.Screen name={"QRScan"} component={QRScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
