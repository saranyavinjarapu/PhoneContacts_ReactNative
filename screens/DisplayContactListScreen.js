import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ContactItem from "../components/ContactItem";

const DisplayContactListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.contacts_data}
        renderItem={(itemData) => (
          <ContactItem
            contactItem={itemData.item}
            onSelect={() => console.log("on contact select")}
          ></ContactItem>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default DisplayContactListScreen;
