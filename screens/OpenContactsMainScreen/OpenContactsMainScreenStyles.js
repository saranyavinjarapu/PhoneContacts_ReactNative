import { StyleSheet } from "react-native";

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

export default styles;
