import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./ContactItemStyles";
import Colors from "../../constants/Colors";

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

export default ContactItem;
