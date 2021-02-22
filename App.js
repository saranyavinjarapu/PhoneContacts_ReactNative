import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import OpenContactsMainScreen from "./screens/OpenContactsMainScreen";
import DisplayContactListScreen from "./screens/DisplayContactListScreen";

export default function App() {
  const [contactsData, setContactsData] = useState();
  const showContactsHandler = (contacts_data) => {
    setContactsData(contacts_data);
  };
  const showSelectedContactHandler = (selected_contact_data) => {
    console.log("contact selected");
  };

  let content = (
    <OpenContactsMainScreen
      showContacts={showContactsHandler}
    ></OpenContactsMainScreen>
  );
  if (contactsData) {
    content = (
      <DisplayContactListScreen
        contacts_data={contactsData}
        showSelectedContact={showSelectedContactHandler}
      ></DisplayContactListScreen>
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="PHONE CONTACTS"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
