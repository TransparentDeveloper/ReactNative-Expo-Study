import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";

import Loading from "./pages/Loading";

//파이어베이스 접속 키값 가져오기
import apiKeys from "./config/key";
import firebase from "firebase/compat/app";

export default function App() {
  //파이어베이스 라이브러리가 준비 되면 연결하는 조건문!
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  const [ready, setReady] = useState(true);

  return ready ? (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  ) : (
    <Loading />
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
