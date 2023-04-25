import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
const CustomInput = (value, onChangeText, placeholder, type) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="black"
      style={{
        width: "85%",
        height: 50,
        borderRadius: 25,
        borderWidth: 0.8,
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "#4ba6e3",
      }}
      keyboardType={type ? type : "default"}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
