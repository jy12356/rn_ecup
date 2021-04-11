import React from 'react';
import { WebView } from 'react-native-webview';


function WebviewScreen({navigation}){

    let myWebview = null;
    
    const jsCode = `
    var data = {targetFunc : "none", status : "connected!"};
    var dataConverted = JSON.stringify(data)
    window.ReactNativeWebView.postMessage(dataConverted);
    `;
    return (
        <WebView
          ref = {(wref)=>{myWebview = wref }}
          source={{ uri: 'http://ffc.eventconnector.net/admin/recevied' }}
          //inject javascript into the Web
          injectedJavaScript={jsCode}
          onMessage= {(e)=>{
            //getting data form Web
            console.log(e.nativeEvent.data)
            // var data = JSON.parse(e.nativeEvent.data)
            // if(data.targetFunc === 'camera'){
            //   navigation.navigate('QRScanner');
            // }
            if(e.nativeEvent.data){
              let data = JSON.parse(e.nativeEvent.data)
              if(data.targetFunc === 'camera'){
                navigation.navigate('QRScan');
              }
            }
          }}
          onLoadEnd= {()=>{
            //sending data to Web
            myWebview.postMessage("Merong")
          }}
        />
    );
}
export default WebviewScreen;