import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { Alert, AsyncStorage } from "react-native";

export async function registration(nickName, email, password, navigation) {
  try {
    console.log(nickName, email, password);
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      nickName: nickName,
    });
    Alert.alert("회원가입 성공!");
    await AsyncStorage.setItem("session", email);
    navigation.push("TabNavigator");
  } catch (err) {
    Alert.alert("무슨 문제가 있는 것 같아요! => ", err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    await AsyncStorage.setItem("session", email);
    navigation.push("TabNavigator");
  } catch (err) {
    Alert.alert("로그인에 문제가 있습니다! ", err.message);
  }
}

export async function logout(navigation) {
  try {
    console.log("로그아웃!!");
    const currentUser = firebase.auth().currentUser;
    await AsyncStorage.removeItem("session");
    await firebase.auth().signOut();
    navigation.push("SignInPage");
  } catch (err) {
    Alert.alert("로그 아웃에 문제가 있습니다! ", err.message);
  }
}

export async function addDiary(content) {
  try {
    console.log("왔니?", content);
    const db = firebase.firestore();
    await db
      .collection("diary")
      .doc(content.date + "D")
      .set(content);
    return true;
  } catch (err) {
    Alert.alert("글 작성에 문제가 있습니다! ", err.message);
    return false;
  }
}

export async function imageUpload(blob, date) {
  console.log("설마 여기까지 오다니?", date);
  const storageRef = firebase
    .storage()
    .ref()
    .child("diary/" + date);
  const snapshot = await storageRef.put(blob);
  console.log("이건?");
  const imageUrl = await snapshot.ref.getDownloadURL();
  console.log("끝");
  blob.close();

  return imageUrl;
}
