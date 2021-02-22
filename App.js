import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="PHONE CONTACTS"></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 100,
  },
});
