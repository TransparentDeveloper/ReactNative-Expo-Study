import React from "react";
import { StyleSheet, View } from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { Container, Content, Icon, Text } from "native-base";
import CardComponent from "../components/CardComponent";
import HeaderComponent from "../components/HeaderComponent";

const data = require("../data.json");
export default function MainPage({ navigation }) {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Grid style={styles.banner}>
          <Col size={1} style={{ padding: 20 }}>
            <Icon name="paper-plane" style={{ color: "deeppink" }} />
          </Col>
          <Col size={6} style={{ padding: 15 }}>
            <Text>이야기 하고 싶은 친구들에게</Text>
            <Text style={{ fontWeight: "700" }}>wegram을 전하세요</Text>
          </Col>
        </Grid>
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
