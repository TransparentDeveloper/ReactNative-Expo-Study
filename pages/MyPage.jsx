import { Container, Content } from "native-base";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import HeaderComponent from "../components/HeaderComponent";
import ImageComponent from "../components/ImageComponent";
const my = require("../assets/my.png");

const data = require("../data.json");

export default function MyPage({ navigation }) {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <View style={styles.profile}>
          <Image source={my} style={styles.profileImage} />
          <Text style={[styles.name, styles.textBold, styles.textAlignCenter]}>
            스파르타코딩 클럽
          </Text>
          <Text style={styles.textAlignCenter}>gunhee@spartacoding.co.kr</Text>
        </View>

        <Grid style={{ justifyContent: "center" }}>
          <Col size={2} style={{ padding: 15 }}>
            <Text
              style={[styles.activity, styles.textBold, styles.textAlignCenter]}
            >
              작성한 글
            </Text>
            <Text
              style={[styles.number, styles.textBold, styles.textAlignCenter]}
            >
              7
            </Text>
          </Col>
          <Col size={2} style={{ padding: 15 }}>
            <Text
              style={[styles.activity, styles.textBold, styles.textAlignCenter]}
            >
              작성한 댓글
            </Text>
            <Text
              style={[styles.number, styles.textBold, styles.textAlignCenter]}
            >
              21
            </Text>
          </Col>
          <Col size={2} style={{ padding: 15 }}>
            <Text
              style={[styles.activity, styles.textBold, styles.textAlignCenter]}
            >
              방문횟수
            </Text>
            <Text
              style={[styles.number, styles.textBold, styles.textAlignCenter]}
            >
              321
            </Text>
          </Col>
        </Grid>

        <View style={styles.imageList}>
          {data.diary.map((content, i) => {
            return (
              <ImageComponent
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
  profile: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  activity: {
    fontSize: 18,
  },
  number: {
    fontSize: 18,
    color: "hotpink",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  textBold: {
    fontWeight: "bold",
  },
  textAlignCenter: {
    textAlign: "center",
  },
});
