import { StyleSheet } from "react-native";

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

export default styles;
