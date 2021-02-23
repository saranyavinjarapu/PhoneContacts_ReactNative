import React from "react";
import { View, Text } from "react-native";
import styles from "./SelectedContactItemStyles";

const SelectedContactItem = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.contactSelected}>
        {props.phoneContactSelected &&
          props.phoneContactSelected.map((contact, index) =>
            contact.phoneNumbers ? (
              <Text key={index} style={styles.contactNumber}>
                {contact.phoneNumbers[index].number}
              </Text>
            ) : (
              <Text key={index} style={styles.contactNumber}>
                No Contact Found
              </Text>
            )
          )}
      </View>
    </View>
  );
};

export default SelectedContactItem;
