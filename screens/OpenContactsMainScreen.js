import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

const OpenContactsMainScreen = () => {
  return (
    <View style={styles.screen}>
      <View>
        <Button
          title="OPEN PHONE CONTACTS"
          onPress={() => console.log("open contacts button clicked")}
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
});

export default OpenContactsMainScreen;
