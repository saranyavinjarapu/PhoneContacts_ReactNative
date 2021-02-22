import React from "react";
import { StyleSheet, View, Button } from "react-native";
import SelectedContactItem from "../components/SelectedContactItem";

const DisplayContactSelectedScreen = (props) => {
  return (
    <View style={styles.screen}>
      <SelectedContactItem
        visible={props.is_contact_selected}
        phoneContactSelected={props.selected_contact_data}
      ></SelectedContactItem>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DisplayContactSelectedScreen;
