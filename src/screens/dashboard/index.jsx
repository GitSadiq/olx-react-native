import NavBarIcon from "../../components/home/navBarIcon";
import Search from "../../components/home/searchBar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AdImage from "../../components/home/ImageAd";
import Products from "../../components/home/products";

const Dashboard = () => {
  return (
    <>
      <View style={[styles.topFixed, styles.border]}></View>
      <ScrollView style={[styles.body, styles.border]}>
        <NavBarIcon />
        <Search />
        <AdImage />
        <Products />
      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    color: "#003f34",
    paddingTop: 10,
  },
  topFixed: {
    height: 40,
  },
});
