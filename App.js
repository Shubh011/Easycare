import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet } from "react-native";
import Splash from "./src/pages/Splash";
import Login from "./src/pages/Login";
import Registration from "./src/pages/Registration";
import Forget from "./src/pages/Forget";
import Otp from "./src/pages/Otp";
import EUserDetail from "./src/pages/EUserDetail";
import NUserDetail from "./src/pages/NUserDetail";
import About from "./src/pages/About";
import Home from "./src/pages/Home";
import Emergency from "./src/pages/EmergencyList";
import Normal from "./src/pages/NormalList";
import User from "./src/pages/User";
import { navigationRef } from "./src/pages/RootNavigation";
import Checkout from "./src/pages/Checkout";
import Checkout1 from "./src/pages/Checkout1";
import MyAddress from "./src/pages/MyAddress";
import Address from "./src/pages/Address";
import { store } from "./store/Stores";
import { Provider } from "react-native-redux";
import Editprofile from "./src/pages/Editprofile";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#006A42" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forget"
            component={Forget}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Emergency" component={Emergency} />
          <Stack.Screen name="Normal" component={Normal} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="EUserDetail" component={EUserDetail} />
          <Stack.Screen name="NUserDetail" component={NUserDetail} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen
            name="Checkout1"
            component={Checkout1}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MyAddress" component={MyAddress} />
          <Stack.Screen name="Address" component={Address} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});
export default App;
