import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { darkGreen } from "../components/Coloring";
import Field from "../components/Field";
import Btn from "../components/Btn";

const Registration = (props) => {
  return (
    <Background>
      <View style={{ width: "100%" }}>
        <View
          style={{
            marginTop: 120,
            backgroundColor: "white",
            height: "100%",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            paddingTop: 60,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: darkGreen,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Registration
          </Text>
          <Field placeholder="Name" />
          <Field placeholder="Email" keyboardType={"email-address"} />
          <Field placeholder="Contact number" keyboardType={"number"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm-Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 16,
              marginBottom: 100,
            }}
          >
            <Text style={{ color: "grey" }}>
              By signing in, you agree to our{" "}
            </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Term & Condition
            </Text>
          </View>
          <View style={{ marginTop: -70 }}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Registration"
              Press={() => {
                alert("Account creacted");
                props.navigation.navigate("Login");
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Already have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text
                  style={{ color: "#4ba6e3", fontWeight: "500", fontSize: 16 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Registration;
