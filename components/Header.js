import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const Header = ({ title }) => {
  return (
    <View style={{ marginLeft: 30 }}>
      <Text style={{ fontWeight: "500", fontSize: 26, color: "white" }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
