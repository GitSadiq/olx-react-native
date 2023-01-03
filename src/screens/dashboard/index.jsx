import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image_logo}
        source={require("../../../assets/olx_logo.png")}
      />
      <Text style={[styles.heading, styles.common]}>Welcome to Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate("loginoption")}>
        <Text style={[styles.para, styles.common]}>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    color: "#003f34",
  },
  image_logo: {
    width: 100,
    height: 50,
  },
  heading: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "800",
  },
  common: {
    color: "#003f34",
    textAlign: "center",
    marginTop: 5,
  },
  para: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500",
  },
});
