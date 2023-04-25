import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Field from "../components/Field";
import CustomInput from "../components/CustomInput";
import { darkGreen } from "../components/Coloring";
import { useDispatch } from "react-native-redux";
import { addAddress } from "../../actions/Action";
import Btn from "../components/Btn";
const Address = ({ navigation }) => {
  const [Area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          Area
        </Text>
        <CustomInput
          value={Area}
          placeholder={"Enter Area Name"}
          onChangeText={(txt) => {
            setArea(txt);
          }}
        />
        {!!state.nameError && (
          <Text style={{ color: "red" }}>{state.nameError}</Text>
        )}
      </View>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          City
        </Text>
        <CustomInput
          placeholder={"Enter City Name"}
          value={city}
          onChangeText={(txt) => {
            setCity(txt);
          }}
        />
      </View>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          State
        </Text>
        <CustomInput
          placeholder={"Enter State Name"}
          value={state}
          onChangeText={(txt) => {
            setState(txt);
          }}
        />
      </View>
      <View style={styles.Area}>
        <Text style={{ marginLeft: 30, fontSize: 16, fontWeight: "450" }}>
          Pin Code
        </Text>
        <CustomInput
          placeholder={"Enter City Pincode"}
          value={pin}
          onChangeText={(txt) => {
            setPin(txt);
          }}
        />
      </View>
      <View style={{ marginLeft: 50, marginTop: 40 }}>
        <Btn
          textColor="black"
          bgColor={"#FFFF00"}
          btnLabel="Add Address"
          Press={() => {
            if (city !== "" && Area !== "" && state !== "" && pin !== "") {
              dispatch(
                addAddress({ city: city, state: state, Area: Area, pin: pin })
              ),
                navigation.goBack();
            }
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Area: {
    marginTop: 30,
  },
});
export default Address;
