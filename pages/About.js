import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";

export default function About() {
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.MainContainer}>
        <Text
          style={{
            marginTop: 26,
            marginLeft: 120,
            color: "#006A42",
            fontSize: 52,
            fontWeight: "bold",
          }}
        >
          Easy
        </Text>
        <Text
          style={{
            marginTop: -31,
            marginLeft: 166,
            color: "#FFFF00",
            fontSize: 40,
            fontWeight: "400",
          }}
        >
          care
        </Text>
        <View style={styles.TextContainer}>
          <Text style={{ fontSize: 25, fontWeight: "600", marginBottom: 10 }}>
            Welcome!
          </Text>
          <Text style={styles.SmallContainer}>
            We have drafted these Privacy Policy together with Terms of
            Services, so you'll know the rules that govern our relationship with
            you as a user of our services.
          </Text>
          <Text style={styles.SmallContainer}>
            This privacy policy describes outlines the categories of information
            that we might collect from Users, including the sensitive personal
            data or information , as well as the reasons for collecting it, the
            methods by which it will be used, and the recipients of it.
          </Text>
          <Text style={styles.SmallContainer}>
            Please take a time to go over our privacy statement. We encourage
            you not to use the "App" if you disagree with any of the terms or
            this privacy statement.
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 10 }}>
            Type of Information Collected
          </Text>
          <Text style={styles.SmallContainer}>
            1. We keep your name, phone number, password and email address along
            with other account-related information. Depending on how exact the
            Address information is and which services you use, we preserve data
            for varying amounts of time.
          </Text>
          <Text style={styles.SmallContainer}>
            2. Financial information such as bank account or credit card or
            debit card or other payment instrument details;
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 10 }}>
            Why to use?
          </Text>
          <Text style={styles.SmallContainer}>
            1. It provides care service to you or your family members even when
            you are away from them.
          </Text>
          <Text style={styles.SmallContainer}>
            2. This application also provide medical or non-medical both type of
            person according to yours requirement.
          </Text>
          <Text style={styles.SmallContainer}>
            3.It provides a registered Medical person who have knowledge about
            the medical sector and can provide instant treatment according to
            the condition.
          </Text>
          <Text style={styles.SmallContainer}>
            4. This app can help you to deal in hospitals with the help of
            Medical or non-medical person, if you are new to the city and
            unknown the city.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  TextContainer: {
    marginTop: 25,
    marginLeft: 15,
    marginRight: 4,
  },
  SmallContainer: {
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 0.6,
    marginBottom: 8,
  },
});
