import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { darkGreen } from "../components/Coloring";
import Field from "../components/Field";
import Btn from "../components/Btn";

const Forget = (props) => {
  return (
    <Background>
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: "black",
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
          }}
        ></Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Forget-Password
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Enter valid email
          </Text>
          <Field placeholder="Email" keyboardType={"email-address"} />
          <Field placeholder="New-Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
              paddingRight: 16,
              marginBottom: 130,
            }}
          ></View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Reset"
            Press={() => {
              props.navigation.navigate("Otp");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Back to </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "blue", fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> page </Text>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Forget;
