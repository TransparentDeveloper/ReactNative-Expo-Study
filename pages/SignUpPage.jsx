import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SignUpPage({ route }) {
  return (
    <View style={styles.contianer}>
      <Text> SignUpPage </Text>
      <Text> {route.params.title} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
