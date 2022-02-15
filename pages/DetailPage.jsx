import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import CommentComponet from "../components/CommentComponent";
const my = require("../assets/my.png");
export default function DetailPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "디테일페이지",
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#fff",
      },
      headerTintColor: "grey",
      headerShown: true,
      headerBackTitleVisible: false,
    });
  }, []);
  console.log("ROUTE");
  console.log(route);
  const content = route.params.content;
  return (
    <Container>
      <Content
        contentContainerStyle={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <ImageBlurLoading
          withIndicator
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={{ width: "90%", height: 200, borderRadius: 10 }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            color: "#333",
            alignSelf: "flex-start",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "grey",
            alignSelf: "flex-start",
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.desc}
        </Text>

        <Item style={{ marginTop: 100 }}>
          <Input placeholder="한마디 부탁해요~" />
          <Icon active name="paper-plane" />
        </Item>
        <List>
          <CommentComponet />
          <CommentComponet />
          <CommentComponet />
          <CommentComponet />
          <CommentComponet />
          <CommentComponet />
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
