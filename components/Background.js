import React from "react";
import { View, ImageBackground } from "react-native";
const Background = ({ children }) => {
  return <View style={{ backgroundColor: "#006A42" }}>{children}</View>;
};

export default Background;
