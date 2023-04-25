import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { darkGreen } from "../components/Coloring";
import Field from "../components/Field";
import Btn from "../components/Btn";

const Login = (props) => {
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
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Login
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login in your account
          </Text>
          <Field placeholder="Email/Username " keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
              paddingRight: 16,
              marginBottom: 100,
            }}
          >
            {/* <Text style={{color:darkGreen,fontWeight:'bold',fontSize:16}}>Forgot Password ?</Text> */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Forget")}
            >
              <Text
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginRight: 28,
                }}
              >
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              alert("Login Successfully!");
              props.navigation.navigate("Home");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Registration")}
            >
              <Text
                style={{ color: "#4ba6e3", fontWeight: "bold", fontSize: 16 }}
              >
                Registration
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
