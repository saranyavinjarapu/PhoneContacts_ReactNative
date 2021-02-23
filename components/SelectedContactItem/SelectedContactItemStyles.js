import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    paddingTop: 1,
  },
  contactSelected: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    width: 300,
    justifyContent: "center",
    height: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 15,
    borderRadius: 50,
    marginTop: 70,
  },
  contactNumber: {
    fontSize: 30,
    color: Colors.primary,
  },
});

export default styles;
