import React from "react";
import { View, FlatList } from "react-native";
import styles from "./DisplayContactListScreenStyles";
import ContactItem from "../../components/ContactItem/ContactItem";

const DisplayContactListScreen = (props) => {
  const selectContactHandler = (contactId) => {
    const selectedContact = props.contacts_data.filter(
      (data) => data.id == contactId
    );
    props.showSelectedContact(selectedContact);
  };
  return (
    <View style={styles.screen}>
      <FlatList
        testID="flat_list"
        keyExtractor={(item, index) => index.toString()}
        data={props.contacts_data}
        renderItem={(itemData) => (
          <ContactItem
            contactItem={itemData.item}
            onSelect={selectContactHandler}
          ></ContactItem>
        )}
      ></FlatList>
    </View>
  );
};

export default DisplayContactListScreen;
