import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
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
const my = require("../assets/my.png");
const width = Dimensions.get("screen").width;

export default function CommentComponent() {
  return (
    <ListItem thumbnail style={{ width: width }}>
      <Left>
        <Thumbnail circular source={my} />
      </Left>
      <Body>
        <Text>스파르타코딩 클럽</Text>
        <Text note numberOfLines={3}>
          Its time to build a difference . .
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>2020.01.05</Text>
        </Button>
      </Right>
    </ListItem>
  );
}
