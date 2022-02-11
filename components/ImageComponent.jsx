import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, CardItem } from "native-base";
const image = require("../assets/background2.png");
const logo = require("../assets/logo.png");
import ImageBlurLoading from "react-native-image-blur-loading";

export default function ImageComponent({ navigation, content }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailPage");
      }}
      style={styles.container}
    >
      <ImageBlurLoading
        withIndicator
        thumbnailSource={{ uri: content.image }}
        source={{ uri: content.image }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
  },
  image: { height: 120, width: 120 },
});
