import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Alert } from "react-native";

const auth = firebase.auth();
const db = firebase.firestore();

export async function registration(nickName, email, password) {
  try {
    console.log(nickName, email, password);
    await auth.createUserWithEmailAndPassword(email, password);
    const currentUser = auth.currentUser;
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      nickName: nickName,
    });
    Alert.alert("회원가입 성공!");
  } catch (err) {
    Alert.alert("무슨 문제가 있는 것 같아요! => ", err.message);
  }
}

export async function signIn(email, password, navigation) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    navigation.push("TabNavigator");
  } catch (err) {
    Alert.alert("로그인에 문제가 있습니다! ", err.message);
    Alert.alert("로그인에 문제가 있습니다! ", err.message);
  }
}

export async function logout(navigation) {
  try {
    console.log("로그아웃!!");
    const currentUser = auth.currentUser;
    console.log(currentUser);
    await auth.signOut();
    navigation.push("SignInPage");
  } catch (err) {
    Alert.alert("로그 아웃에 문제가 있습니다! ", err.message);
  }
}
