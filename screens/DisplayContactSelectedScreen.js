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
      <View style={styles.button}>
        <Button
          title="BACK TO HOME PAGE"
          onPress={props.returnHomePage}
        ></Button>
      </View>
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
  button: {
    width: 250,
    padding: 10,
    marginTop: 350,
  },
});

export default DisplayContactSelectedScreen;
