import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import OpenContactsMainScreen from "./screens/OpenContactsMainScreen";

export default function App() {
  const showContactsHandler = (contacts_data) => {
    console.log("set show contacts screen");
  };
  return (
    <View style={styles.screen}>
      <Header title="PHONE CONTACTS"></Header>
      <OpenContactsMainScreen
        showContacts={showContactsHandler}
      ></OpenContactsMainScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
