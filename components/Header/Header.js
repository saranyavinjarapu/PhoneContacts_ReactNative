import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderStyles";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} testID={"header_text"}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
