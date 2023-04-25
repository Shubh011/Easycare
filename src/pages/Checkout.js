import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import EmergencyApi from "../api/EmergencyApi";
import Icon from "react-native-vector-icons/FontAwesome";
const Checkout = ({ navigation, route }) => {
  const CheckId = route.params.EId;
  const check = EmergencyApi.find((element) => {
    return CheckId == element.id;
  });
  return (
    <View style={styles.Container}>
      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "row",
        }}
      >
        <Image source={check.Icon} style={styles.iconstyle} />

        <View
          style={{
            marginTop: 46,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginHorizontal: 14,
            }}
          >
            {check.name}
          </Text>
          <Text
            style={{
              marginTop: -4,
              marginHorizontal: 14,
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            {check.specialization}
          </Text>
        </View>
      </View>
      <View style={styles.SubContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    display: "flex",
    width: "90%",
    height: 240,
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    elevation: 5,
    flex: 1,
    backgroundColor: "#fff",
  },
  SubContainer: {
    marginHorizontal: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    paddingBottom: 5,
  },
  iconstyle: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 16,
  },
});
export default Checkout;
