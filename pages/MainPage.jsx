import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
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
} from "native-base";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";
import * as Animatable from "react-native-animatable";

const data = require("../data.json");
export default function MainPage({ navigation }) {
  //뒤로 가기 막아버리기 (로그인 후 MainPage 진입후에는 다시 SignInPage로 가는 것을 막는다.)
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  });

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount={3}
          direction="alternate"
        >
          <Grid style={styles.banner}>
            <Col size={1} style={{ padding: 20 }}>
              <Icon name="paper-plane" style={{ color: "deeppink" }} />
            </Col>
            <Col size={6} style={{ padding: 15 }}>
              <Text>이야기 하고 싶은 친구들에게</Text>
              <Text style={{ fontWeight: "700" }}>wegram을 전하세요</Text>
            </Col>
          </Grid>
        </Animatable.View>

        <Grid style={{ padding: 20 }}>
          <Text style={{ color: "grey" }}>FROM THE DIARY</Text>
        </Grid>
        <View style={{ marginTop: -20 }}>
          {data.diary.map((content, i) => {
            return (
              <CardComponent
                content={content}
                key={i}
                navigation={navigation}
              />
            );
          })}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#F6F6F6",
    height: 70,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
});
