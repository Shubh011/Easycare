import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "redux";
import { useIsFocused } from "@react-navigation/native";
const MyAddress = ({ navigation }) => {
  /*const isFocused = useIsFocused();
  const add = useSelector((state) => state.AddressReducer);
  console.log(add);*/
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          My Address
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            padding: 8,
            borderRadius: 10,
            backgroundColor: "#FFFF00",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Address")}
        >
          <Text>
            <Icon name="plus" size={16} color="black" />
            Add Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({});
