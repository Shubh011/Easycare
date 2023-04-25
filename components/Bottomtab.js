import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  focused,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import * as RootNavigation from "../pages/RootNavigation";

const Bottomtab = ({ navigation, route }) => {
  return (
    <View style={styles.tabcontainer}>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => RootNavigation.navigate("Home")}
      >
        <View>
          <Icon name="home" size={30} color="white" />
          <Text style={{ color: focused ? "red" : "white", fontSize: 12 }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => RootNavigation.navigate("Emergency")}
      >
        <View>
          <Icon name="user-plus" size={30} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 12,
              marginLeft: -14,
            }}
          >
            Emergency
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => RootNavigation.navigate("Normal")}
      >
        <View>
          <Icon name="user" size={30} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 12,
              marginLeft: -10,
            }}
          >
            Normal
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => RootNavigation.navigate("User")}
      >
        <View>
          <Icon name="cog" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 12 }}>User</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tabcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
  },
  buttonstyle: {
    textTransform: "uppercase",
  },
});
export default Bottomtab;
