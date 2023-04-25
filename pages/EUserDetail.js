import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import EmergencyApi from "../api/EmergencyApi";
const EUserDetail = ({ navigation, route }) => {
  const id = route.params.EmergencyId;
  const user = EmergencyApi.find((element) => {
    return id == element.id;
  });
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Image source={user.Icon} style={styles.iconstyle} />
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 25,
            borderBottomWidth: 0.3,
            borderBottomColor: "grey",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: 24,
              fontWeight: "700",
              marginTop: -20,
            }}
          >
            {user.name}
            <Image
              source={require("../../assets/verified.png")}
              style={{ marginTop: 20, width: 18, height: 18 }}
            />
          </Text>
          <Text
            style={{
              marginTop: -8,
              textAlign: "center",
              fontWeight: "400",
              fontSize: 18,
            }}
          >
            {user.specialization}
          </Text>
        </View>
        <View style={styles.FeesContainer}>
          <Text
            style={{
              marginHorizontal: 8,
              fontSize: 18,
              fontWeight: "600",
              color: "white",
            }}
          >
            Fees
          </Text>
          <Text style={{ color: "white", marginLeft: 8 }}>
            <Icon name="rupee" size={15} color="white" />
            {user.fees}
          </Text>
        </View>
        <View style={styles.SubContainer}>
          <Text
            style={{
              marginTop: 20,
              marginHorizontal: 8,
              color: "#4ba6e3",
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 8,
            }}
          >
            Qualification
          </Text>
          <Text
            style={{
              marginHorizontal: 8,
            }}
          >
            {user.degree}
          </Text>
        </View>
        <View style={styles.SubContainer}>
          <Text
            style={{
              marginTop: 20,
              marginHorizontal: 8,
              color: "#4ba6e3",
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 8,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              marginHorizontal: 8,
            }}
          >
            {user.description}
          </Text>
        </View>
        <View style={styles.LastContainer}>
          <Text
            style={{
              marginTop: 20,
              marginHorizontal: 8,
              color: "#4ba6e3",
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 8,
            }}
          >
            Work Address(Optional)
          </Text>
          <Text
            style={{
              marginHorizontal: 8,
            }}
          >
            {user.Address}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EUserDetail;

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: 240,
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
    elevation: 5,
    flex: 1,
    backgroundColor: "#fff",
  },
  iconstyle: {
    width: "42%",
    height: 142,
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "center",
    marginBottom: 30,
  },
  SubContainer: {
    marginHorizontal: 25,
  },
  FeesContainer: {
    marginHorizontal: 25,
    backgroundColor: "#006A42",
    marginTop: 10,
    marginRight: 200,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 16,
  },
  LastContainer: {
    marginHorizontal: 25,
    marginBottom: 20,
  },

  avastyle: {
    textAlign: "center",
    // color: '#fc8955',
    fontSize: 15,
    fontWeight: "500",
  },

  buttonstyle2: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    padding: 4,
    borderRadius: 8,
    backgroundColor: "#006A42",
    elevation: 5,
  },
  // color: "#4ba6e3" "#006A42"
  navstyle: {
    width: "100%",
    height: 60,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#006A42",
  },
});
