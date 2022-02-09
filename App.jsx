import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, ScrollView } from "react-native";
import PlusButton from "./components/PlusButton";
import MinusButton from "./components/MinusButton";

export default function App() {
  const [state, setState] = useState(0);

  function onChangeNumber(operation) {
    if (operation == "plus") {
      setState(state + 1);
    } else {
      setState(state - 1);
    }
  }
  useEffect(() => {}, [state]);

  return (
    <View style={styles.contianer}>
      <Text style={styles.number}>카운터: {state}</Text>
      <View style={styles.buttonBox}>
        <PlusButton onChangeNumber={onChangeNumber} />
        <MinusButton onChangeNumber={onChangeNumber} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 30,
  },

  buttonBox: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
