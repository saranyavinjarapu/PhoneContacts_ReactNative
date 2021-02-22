import React from "react";
import { StyleSheet, View, Button } from "react-native";

const DisplayContactSelectedScreen = (props) => {
  return <View style={styles.screen}></View>;
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250,
    padding: 10,
    marginTop: 350,
  },
});

export default DisplayContactSelectedScreen;
