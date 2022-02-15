import React from "react";
import { StyleSheet } from "react-native";
import { Item, Input, Label } from "native-base";
export default function Loading({ title }) {
  return (
    <Item floatingLabel last>
      <Label style={styles.label}>{title}</Label>
      <Input style={styles.input} />
    </Item>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#fff",
  },
  input: {
    color: "#fff",
  },
});
