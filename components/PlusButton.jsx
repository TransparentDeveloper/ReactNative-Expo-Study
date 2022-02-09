import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function PlusButton({ onChangeNumber }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangeNumber("plus");
        }}
      >
        <Text style={{ textAlign: "center" }}> Plus </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: "yellow",
  },
  button: {
    flex: 1,
  },
});
