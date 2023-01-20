import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const AdImage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={[styles.AdImageView]}>
      <Image
        style={styles.AdImage}
        source={require("../../../assets/Nimg.webp")}
        // source={{
        //   uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        // }}
        // source={{
        //   uri: "https://firebasestorage.googleapis.com/v0/b/sk-olx-app.appspot.com/o/images%2F9e4eee02-c95c-43f2-abc4-ee9d4dc991a0.jpeg?alt=media&token=c90aba4c-df48-40f8-9132-6018ce57d235",
        // }}
      ></Image>
      <Text style={styles.heading}>Browse Categories</Text>
      <View style={[styles.IconView]}>
        <View style={[styles.eachView]}>
          <View style={[styles.roundIconView, styles.yellowColor]}>
            <Image
              resizeMode="contain"
              style={[styles.IconImage]}
              source={require("../../../assets/car-logo.png")}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", paddingTop: 10 }}>Motors</Text>
        </View>
        <View style={[styles.eachView]}>
          <View style={[styles.roundIconView, styles.pinkColor]}>
            <Image
              resizeMode="contain"
              style={[styles.IconImage]}
              source={require("../../../assets/property-logo.png")}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", paddingTop: 10 }}>Property</Text>
        </View>
        <View style={[styles.eachView]}>
          <View style={[styles.roundIconView, styles.redColor]}>
            <Image
              resizeMode="contain"
              style={[styles.IconImage]}
              source={require("../../../assets/mobile-logo.png")}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", paddingTop: 10 }}>Mobiles</Text>
        </View>
        <View style={[styles.eachView]}>
          <View style={[styles.roundIconView, styles.yellowColor]}>
            <Image
              resizeMode="contain"
              style={[styles.IconImage]}
              source={require("../../../assets/car-logo.png")}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", paddingTop: 10 }}>Vehicles</Text>
        </View>
        <View style={[styles.eachView]}>
          <View style={[styles.roundIconView, styles.pinkColor]}>
            <Image
              resizeMode="contain"
              style={[styles.IconImage]}
              source={require("../../../assets/home-logo.png")}
            ></Image>
          </View>
          <Text style={{ textAlign: "center", paddingTop: 10 }}>
            Property for Sale
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AdImage;

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "black",
  },
  AdImageView: {
    flex: 1 / 10,
    width: "100%",
    backgroundColor: "white",
  },
  AdImage: {
    width: "100%",
    height: 60,
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "800",
    color: "#003f34",
  },
  IconView: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  eachView: {
    width: 64,
  },
  roundIconView: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 30,
  },
  yellowColor: {
    backgroundColor: "#ffce32",
  },
  pinkColor: {
    backgroundColor: "#f9a7d0",
  },
  redColor: {
    backgroundColor: "#f91d1d",
  },
  IconImage: {
    width: "80%",
    height: "70%",
  },
});
