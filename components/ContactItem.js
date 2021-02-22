import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";

const ContactItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect.bind(this, props.contactItem.id)}>
      {props.contactItem.name !== "SPAM" && (
        <View style={styles.listItem} key={props.contactItem.id}>
          <Text
            style={{
              ...styles.contentType,
              color: Colors.primary,
              fontSize: 30,
            }}
          >
            {props.contactItem.name}
          </Text>
          {props.contactItem.phoneNumbers &&
            props.contactItem.phoneNumbers.map((contact, index) =>
              contact.label ? (
                <Text
                  key={index}
                  style={{
                    ...styles.contentType,
                    color: Colors.accent,
                  }}
                >
                  {contact.label}
                </Text>
              ) : (
                <Text
                  key={index}
                  style={{ ...styles.contentType, color: "green" }}
                >
                  Phone
                </Text>
              )
            )}
          {props.contactItem.imageAvailable && (
            <Image
              style={styles.contactImage}
              source={{ uri: props.contactItem.image.uri }}
            ></Image>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 5,
    marginVertical: 10,
    textAlign: "center",
  },
  contentType: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  contactImage: {
    margin: 30,
    borderRadius: 8,
    height: 200,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ContactItem;
