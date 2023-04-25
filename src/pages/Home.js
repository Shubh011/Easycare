import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeApi from "../api/HomeApi";
import Bottomtab from "../components/Bottomtab";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.Vcontainer}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/HomeAss/baner.jpg")}
            style={styles.baner}
          />
        </View>
        <Text style={styles.heading}>Select your Assistant Category</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={[1]}
            renderItem={() => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("Normal")}>
                  <LinearGradient
                    colors={["#006A42", "#006A42"]}
                    style={styles.linearGradient}
                  >
                    <Text style={styles.select}>{"Normal Assistant"}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
          <FlatList
            data={[1]}
            renderItem={() => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Emergency")}
                >
                  <LinearGradient
                    colors={["#de6262", "#eb3349"]}
                    style={styles.linearGradient}
                  >
                    <Text style={styles.select}>{"Emergency Assistant"}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Category</Text>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <FlatList
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={HomeApi}
            renderItem={({ item }) => {
              return (
                <View style={styles.top}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.navi)}
                  >
                    <View>
                      <Image style={styles.topimg} source={item.image} />
                    </View>
                    <View>
                      <Text style={styles.toptext}>{item.category}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
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
    display: "flex",
    backgroundColor: "white",
  },
  Vcontainer: {
    display: "flex",
    backgroundColor: "white",
    marginBottom: 60,
  },
  baner: {
    width: "95%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    color: "black",
    fontSize: 20,
    letterSpacing: 1.5,
    fontWeight: "bold",
    marginTop: 38,
    marginLeft: 15,
  },
  linearGradient: {
    width: "95.4%",
    height: 120,
    marginLeft: 8,
    marginTop: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.5,
  },
  top: {
    width: "45%",
    height: 200,
    backgroundColor: "#FFFFFC",
    borderRadius: 10,
    margin: 8,
    elevation: 5,
  },
  topimg: {
    width: "48%",
    height: "55%",
    borderRadius: 2,
    alignSelf: "center",
    marginTop: 40,
  },
  toptext: {
    fontSize: 15,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 48,
    marginTop: 8,
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
export default Home;
