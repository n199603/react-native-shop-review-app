import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import Config from "react-native-config";

if (!firebase.app.length) {
  const firebaseConfig = {
    apiKey: "Config.API_KEY",
    authDomain: "Config.AUTH_DOMAIN",
    projectId: "Config.PROJECT_ID",
    storageBucket: "Config.STORAGE_BUCKET",
    messagingSenderId: "Config.MESSAGING_SENDER_ID",
    appId: "Config.APP_ID",
    measurementId: "Config.MEASUREMENT_ID",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

console.log(process.env.REACT_APP_API_KEY);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
