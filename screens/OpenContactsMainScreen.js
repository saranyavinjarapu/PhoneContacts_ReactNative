import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import * as Permissions from "expo-permissions";
import * as Contacts from "expo-contacts";

const OpenContactsMainScreen = (props) => {
  const openContactsHandler = async () => {
    const { status, permissions } = await Permissions.askAsync(
      Permissions.CONTACTS
    );
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.Name,
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Image,
        ],
        sort: Contacts.SortTypes.FirstName,
      });

      if (data.length > 0) {
        props.showContacts(data);
      } else {
        Alert.alert("No Contacts Found");
      }
    } else {
      Alert.alert("Permission to access contacts denied");
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          textStyle={{ color: "#FFFFFF", fontSize: 400 }}
          title="OPEN PHONE CONTACTS"
          onPress={openContactsHandler}
          style={styles.openContactButton}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 15,
    padding: 20,
    borderRadius: 50,
    marginTop: 100,
  },
  openContactButton: {
    borderColor: "black",
    borderWidth: 5,
  },
});

export default OpenContactsMainScreen;
