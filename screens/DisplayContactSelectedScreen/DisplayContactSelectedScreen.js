import React from "react";
import { View, Button } from "react-native";
import styles from "./DisplayContactSelectedScreenStyles";
import SelectedContactItem from "../../components/SelectedContactItem/SelectedContactItem";

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

export default DisplayContactSelectedScreen;
