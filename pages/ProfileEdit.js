import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import Field from "../components/Field";

export default function Edit() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30, fontSize: 28, marginLeft: 30 }}>
        Profile Edit
      </Text>
      <View style={styles.profileInfo}>
        <Text style={styles.greyInfo}>Name</Text>
        <Field placeholder="Name" />
        <Text style={styles.greyInfo}>Email</Text>
        <Field placeholder="Email" keyboardType={"email-address"} />
        <Text style={styles.greyInfo}>Contact</Text>
        <Field placeholder="Contact" keyboardType={"number"} />
      </View>
      <TouchableOpacity
        onPress={() => alert("Profile Updated!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Mcontainer: {
    display: "flex",
    backgroundColor: "white",
  },
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
  profileInfo: {
    marginTop: 15,
    marginBottom: 20,
    alignItems: "flex-start",
    borderBottomColor: "lightgrey",
    fontSize: 20,
    marginLeft: 30,
  },

  greyInfo: {
    color: "grey",
  },

  button: {
    marginTop: 40,
    backgroundColor: "#FFFF00",
    padding: 15,
    borderRadius: 40,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },

  buttonText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
});
