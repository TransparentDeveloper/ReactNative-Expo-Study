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
    const db = firebase.firestore();
    let userRef = await db.collection("users").doc(content.uid);

    let data = await userRef.get().then((doc) => {
      return doc.data();
    });
    console.log(data.nickName);
    content.author = data.nickName;
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
  const storageRef = firebase
    .storage()
    .ref()
    .child("diary/" + date);
  const snapshot = await storageRef.put(blob);
  const imageUrl = await snapshot.ref.getDownloadURL();
  blob.close();

  return imageUrl;
}

export async function getData(setNext) {
  try {
    let data = [];
    const db = firebase.firestore();
    const first = db.collection("diary").orderBy("date", "desc").limit(5);

    const snapshot = await first.get();
    snapshot.docs.map((doc) => {
      console.log("[페이지네이션 01]");
      data.push(doc.data());
    });
    let last;
    if (snapshot.docs.length !== 0) {
      last = snapshot.docs[snapshot.docs.length - 1];
    }
    setNext(last.data().date);
    console.log(last.data().date);

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getNextData(nextDate, setNext) {
  try {
    console.log("불러올 다음 date: " + nextDate);
    let data = [];
    const db = firebase.firestore();
    const next = db
      .collection("diary")
      .orderBy("date", "desc")
      .startAfter(nextDate)
      .limit(5);
    const snapshot = await next.get();
    snapshot.docs.map((doc) => {
      console.log("[페이지네이션 Next]");
      doc.data();
      data.push(doc.data());
    });
    console.log(snapshot.docs.length);
    let last;
    if (snapshot.docs.length !== 0) {
      last = snapshot.docs[snapshot.docs.length - 1];
      setNext(last.data().date);
      return data;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}
