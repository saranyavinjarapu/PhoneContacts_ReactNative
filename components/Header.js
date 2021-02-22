import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle} testID={"header_text"}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 130,
    paddingTop: 36,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 30,
  },
});

export default Header;
