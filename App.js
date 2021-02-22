import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import OpenContactsMainScreen from "./screens/OpenContactsMainScreen";

export default function App() {
  const [contactsData, setContactsData] = useState();
  const showContactsHandler = (contacts_data) => {
    setContactsData(contacts_data);
  };
  return (
    <View style={styles.screen}>
      <Header title="PHONE CONTACTS"></Header>
      <OpenContactsMainScreen
        showContacts={showContactsHandler}
      ></OpenContactsMainScreen>
      <DisplayContactListScreen
        contacts_data={contactsData}
      ></DisplayContactListScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
