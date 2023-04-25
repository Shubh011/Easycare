import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CustomInput from "../components/CustomInput";
import Btn from "../components/Btn";
const Editprofile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          Name
        </Text>
        <CustomInput placeholder={"Enter Your Name"} />
      </View>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          Contact
        </Text>
        <CustomInput placeholder={"Enter Contact Number"} />
      </View>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          Email
        </Text>
        <CustomInput placeholder={"Enter Your Email"} />
      </View>

      <View style={{ marginLeft: 50, marginTop: 70 }}>
        <Btn textColor="black" bgColor={"#FFFF00"} btnLabel="Add Address" />
      </View>
    </View>
  );
};

export default Editprofile;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 240,
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    flex: 1,
    backgroundColor: "#fff",
  },
  Area: {
    marginTop: 30,
  },
});
