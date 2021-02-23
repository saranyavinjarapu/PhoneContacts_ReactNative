import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contactSelected: {
    padding: 90,
    paddingLeft: 130,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    maxWidth: "80%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 15,
    marginVertical: 100,
    borderRadius: 10,
  },
  contactNumber: {
    height: 50,
    width: 300,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontSize: 30,
    color: Colors.primary,
  },
});

export default styles;
