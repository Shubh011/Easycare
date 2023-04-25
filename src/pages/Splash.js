import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <View style={styles.MainContainer}>
      <Text
        style={{
          marginTop: -40,
          marginLeft: -18,
          color: "white",
          fontSize: 52,
          fontWeight: "bold",
        }}
      >
        Easy
      </Text>
      <Text
        style={{
          marginTop: -32,
          marginLeft: 50,
          color: "#FFFF00",
          fontSize: 40,
          fontWeight: "400",
        }}
      >
        care
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006A42",
  },
});
