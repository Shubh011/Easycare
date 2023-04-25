import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
export default function Btn({ bgColor, btnLabel, textColor, Press, font }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 94,
        alignItems: "center",
        width: 250,
        padding: 8,
        marginVertical: 10,
        elevation: 5,
      }}
    >
      <Text style={{ color: textColor, fontSize: 24, fontWeight: "600" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
