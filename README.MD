0. IOS SET UP
> # Always excute pod install in ios folder
> # $ sudo brew install watchman
> # $ sudo gem install cocoapods
> //if get some permission error with brew
> # $ sudo chown -R $(whoami) $(brew --prefix)/*
> //When module added 
> # $ npx pod-install ios


1. Create Recat Native app with npx

# $ npx react-native init <projectName> --version x.xx.x

2. Adding WebView module

># $ npm install --save react-native-webview
> //Adding permission for dev
>   <key>NSAppTransportSecurity</key>
>   <dict>
>   <key>NSAllowsArbitraryLoads</key>
>   <true/>
>   </dict>

3. Adding Navigation

> # $ npm install --save @react-navigation/native
> //Install dependencies
> # $ npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
> # $ npm install --save @react-navigation/stack
> # const Stack = createStackNavigator();

4. Adding Firebase

> # $ npm install --save @react-native-firebase/app
> # $ npm install --save @react-native-firebase/messaging

> # For Android
> ## apply plugin: 'com.google.gms.google-services'
> ## Adding classpath 'com.google.gms:google-services:4.3.4'
> ## Adding google-services.json  Inside of the app folder

># For IOS 
>## See a References from https://rnfirebase.io


5. Adding Camera-kit for QR Scanning

> # $ npm install react-native-camera-kit --save

> # For Android
> ## <uses-permission android:name="android.permission.CAMERA"/>
> ## kotlin_version = '1.4.10'
> ## classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version")
> ## apply plugin: "kotlin-android"
> ## apply plugin: "kotlin-android-extensions"



6. ETC 
> ## cd ./android && ./gradlew clean && ./gradlew :app:bundleRelease