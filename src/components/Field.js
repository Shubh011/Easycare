import React from "react";
import { TextInput } from "react-native";
import { darkGreen } from "./Coloring";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 94,
        color: "black",
        padding: 8,
        paddingLeft: 20,
        width: "80%",
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 10,
      }}
      placeholderTextColor="grey"
    ></TextInput>
  );
};
export default Field;
