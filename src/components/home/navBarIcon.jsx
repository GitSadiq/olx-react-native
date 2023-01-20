import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const NavBarIcon = () => {
  return (
    <View style={[styles.topNav]}>
      <View style={[styles.topNavDiv]}>
        <Image
          source={require("../../../assets/olx.png")}
          style={styles.logoImg}
        ></Image>
      </View>
      <View style={[styles.topNavDiv]}>
        <View style={[styles.box]}>
          <Image source={require("../../../assets/car-line.png")}></Image>
        </View>
        <Text style={[styles.textNav]}>MOTORS</Text>
      </View>
      <View style={[styles.topNavDiv]}>
        <View style={[styles.box]}>
          <Image source={require("../../../assets/building-line.png")}></Image>
        </View>
        <Text style={[styles.textNav]}>PROPERTY</Text>
      </View>
    </View>
  );
};

export default NavBarIcon;

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "black",
    position: "relative",
  },
  topNav: {
    flex: 1 / 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topNavDiv: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textNav: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "800",
    color: "#003f34",
    paddingLeft: 10,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#e3eaea",
    color: "",
  },
  logoImg: {
    width: 45,
    height: 45,
  },
});
