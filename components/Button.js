import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Text style={Styles.buttonstyle}>View Profile</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  buttonstyle: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    padding: 4,
    borderRadius: 8,
    backgroundColor: "#FFFF00",
    elevation: 5,
  },
});
export default Button;
