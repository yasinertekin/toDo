import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027",
  },
  count: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 50,
  },
  countText: {
    color: "#FFA500",
    fontSize: 20,
    fontWeight: "bold",
    fontSize: 30,
  },

  input: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
  },
});
