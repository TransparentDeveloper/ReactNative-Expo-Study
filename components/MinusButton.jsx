import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function MinusButton({ onChangeNumber }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangeNumber("minus");
        }}
      >
        <Text style={{ textAlign: "center" }}> Minus </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,

    backgroundColor: "green",
  },
  button: {
    flex: 1,
  },
});
