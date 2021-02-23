import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header/Header";
import OpenContactsMainScreen from "./screens/OpenContactsMainScreen/OpenContactsMainScreen";
import DisplayContactListScreen from "./screens/DisplayContactListScreen/DisplayContactListScreen";
import DisplayContactSelectedScreen from "./screens/DisplayContactSelectedScreen/DisplayContactSelectedScreen";

export default function App() {
  const [contactsData, setContactsData] = useState();
  const [selectedContactData, setSelectedContactData] = useState();

  const returnHomePagHandler = () => {
    setSelectedContactData(null);
    setContactsData(null);
  };

  const showContactsHandler = (contacts_data) => {
    setContactsData(contacts_data);
    setSelectedContactData();
  };
  const showSelectedContactHandler = (selected_contact_data) => {
    setSelectedContactData(selected_contact_data);
  };

  let content = (
    <OpenContactsMainScreen
      showContacts={showContactsHandler}
    ></OpenContactsMainScreen>
  );
  if (contactsData && !selectedContactData) {
    content = (
      <DisplayContactListScreen
        contacts_data={contactsData}
        showSelectedContact={showSelectedContactHandler}
      ></DisplayContactListScreen>
    );
  } else if (selectedContactData) {
    content = (
      <DisplayContactSelectedScreen
        selected_contact_data={selectedContactData}
        is_contact_selected={true}
        returnHomePage={returnHomePagHandler}
      ></DisplayContactSelectedScreen>
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
