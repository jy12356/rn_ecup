import React, {useEffect } from 'react';
import { WebView } from 'react-native-webview';


function WebviewScreen({ route, navigation}){
    
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', (e) => {
        if(route.params?.qrData){
          const { qrData } = route.params;
          console.log(route.params)
          console.log(qrData)
          this.myWebview.postMessage(qrData)
        }
      });
    
      return unsubscribe;
    }, [navigation,route.params?.qrData, this.myWebview]);


    // const jsCode = `
    // var data = {targetFunc : "none", status : "connected!"};
    // var dataConverted = JSON.stringify(data)
    // window.ReactNativeWebView.postMessage(dataConverted);
    // `;
    return (

        <WebView
          ref = {(wref)=>{this.myWebview = wref }}
          source={{ uri: 'https://ecup.mvpick.net' }}
          //inject javascript into the Web
          //injectedJavaScript={jsCode}
          onMessage= {(e)=>{
            //getting data form Web
            console.log(e.nativeEvent.data)
            if(e.nativeEvent.data){
              let data = JSON.parse(e.nativeEvent.data)
              if(data.targetFunc === 'camera'){
                navigation.navigate('QRScan');
              }
            }
            
          }}
          onLoadEnd= {()=>{
            //sending data to Web
            myWebview.postMessage("Connected")
          }}
        />
    );
}
export default WebviewScreen;