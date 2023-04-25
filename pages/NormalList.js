import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import NormalApi from "../api/NormalApi";
import Bottomtab from "../components/Bottomtab";
const Normal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.Vcontainer}>
        <View style={{ marginTop: 5, justifyContent: "center" }}>
          <FlatList
            numColumns={2}
            data={NormalApi}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("NUserDetail", {
                      NormalId: item.id,
                    })
                  }
                  style={styles.liststyle}
                >
                  <Image source={item.Icon} style={styles.iconstyle} />
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 5,
                      color: "black",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 8,
                      color: "black",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    <Image
                      source={require("../../assets/rupee.png")}
                      style={{ width: 10, height: 10, color: "blue" }}
                    />
                    {item.fees}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Checkout1", { NId: item.id })
                    }
                  >
                    <Text style={styles.buttonstyle2}>Add to cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.navstyle}>
        <Bottomtab />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    // backgroundColor:'#69a3c2'
  },
  Vcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 60,
    // backgroundColor:'#69a3c2'
  },
  liststyle: {
    width: "45%",
    height: 240,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    margin: 8,
    elevation: 5,
  },
  iconstyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 10,
  },
  avastyle: {
    textAlign: "center",
    // color: '#fc8955',
    fontSize: 15,
    fontWeight: "500",
  },
  buttonstyle1: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    padding: 4,
    borderRadius: 8,
    backgroundColor: "#FFFF00",
    elevation: 5,
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

export default Normal;
