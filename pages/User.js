import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Bottomtab from "../components/Bottomtab";
const User = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={[1]}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Editprofile")}
              >
                <Text style={styles.select}>{"Edit Profile"}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={[2]}
          renderItem={() => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("MyAddress")}
              >
                <Text style={styles.select}>{"My Address"}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={[2]}
          renderItem={() => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text style={styles.select}>{"My Appointment"}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={[2]}
          renderItem={() => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
                <Text style={styles.select}>{"Payment"}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={[2]}
          renderItem={() => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text style={styles.select}>{"About"}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.navstyle}>
        <Bottomtab />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  select: {
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: 1.5,
    marginBottom: 10,
    borderBottomColor: "#36454F",
    borderBottomWidth: 1,
    paddingTop: 6,
    paddingBottom: 5,
  },
  Textstyle: {
    marginBottom: 6,
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 1.8,
    color: "#006A42",
    paddingBottom: 4,
  },
  navstyle: {
    width: "100%",
    height: 60,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#006A42",
  },
});
