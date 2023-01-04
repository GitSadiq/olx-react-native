import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { isUserAvailable, auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
const Dashboard = ({ navigation }) => {
  const [email, setEmail] = useState();

  useEffect(() => {
    isUserAvailable(setEmail);
  }, []);

  const handlelogout = () => {
    if (email) {
      signOut(auth)
        .then(() => {
          Alert.alert("User LogOut");
          setEmail(false);
        })
        .catch((error) => {
          return { error: false };
        });
    } else {
      navigation.navigate("loginoption");
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.image_logo}
        source={require("../../../assets/olx_logo.png")}
      />
      <Text style={[styles.heading, styles.common]}>Welcome to Dashboard</Text>
      <Text style={[styles.heading, styles.common]}>{email}</Text>
      {email ? (
        <TouchableOpacity onPress={() => handlelogout()}>
          <Text style={[styles.para, styles.common]}>LogOut</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handlelogout()}>
          <Text style={[styles.para, styles.common]}>LogIn</Text>
        </TouchableOpacity>
      )}
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
