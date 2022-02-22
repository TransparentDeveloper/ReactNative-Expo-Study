import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Dimensions, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from "native-base";
import HeaderComponent from "../components/HeaderComponent";
import style from "react-native-image-blur-loading/src/style";
const background2 = require("../assets/background2.png");
const data = require("../data.json");
const imageWidth = Dimensions.get("window").width / 3;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { addDiary, imageUpload } from "../config/firebaseFunctions";

const tempImage =
  "https://firebasestorage.googleapis.com/v0/b/sparta-study-plus.appspot.com/o/lecture%2F6-min.png?alt=media&token=bbc87679-4084-40ad-b6cd-01e808983fa4";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const [image, setImage] = useState(tempImage);
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("게시글을 업로드하려면 사진첩 권한이 필요합니다.");
      }
    }
  };

  const upload = async () => {
    console.log("업로드 준비중!");
    const currentUser = firebase.auth().currentUser;
    let date = new Date();
    let getTime = date.getTime();
    let data = {
      title: title,
      author: currentUser.email,
      desc: content,
      image: image,
      date: getTime,
      uid: currentUser.uid,
    };
    const response = await fetch(imageUri);
    const blob = await response.blob();
    console.log("여기까지 옴");
    const imageUrl = await imageUpload(blob, getTime);
    data.image = imageUrl;
    console.log(data);
    let result = addDiary(data);
    if (result) {
      Alert.alert("글이 성공적으로 등록되었습니다!");
      setTitle("");
      setContent("");
      setImage(tempImage);
      setImageUri("");
    }
  };

  const pickImage = async () => {
    console.log("이미지 선택");
    let imageData = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    getImageUrl(imageData);
  };

  const getImageUrl = async (imageData) => {
    setImageUri(imageData.uri);
  };

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Image
          source={background2}
          style={{ width: "95%", height: 100, borderRadius: 10 }}
        />

        {imageUri == "" ? (
          <Grid style={styles.imageUpload} onPress={() => pickImage()}>
            <Text style={styles.imageUploadPlus}>+</Text>
          </Grid>
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={styles.imagePreview}
            onPress={() => pickImage()}
          />
        )}

        <Item regular style={styles.title}>
          <Input
            placeholder="다이어리 제목을 입력해주세요!"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="내용을 입력해주세요"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        <Button full style={styles.uploadButton} onPress={() => upload()}>
          <Text>등록</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "grey",
    borderStyle: "dashed",
    width: "90%",
    height: 200,
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  imagePreview: {
    borderRadius: 10,
    width: "90%",
    height: 200,
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  imageUploadPlus: {
    textAlign: "center",
    width: "100%",
    fontSize: 90,
    fontWeight: "300",
    color: "grey",
  },
  title: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "pink",
  },
});
