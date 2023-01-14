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

const CreateAd = () => {
  return (
    <ScrollView style={[styles.body, styles.border]}>
      <Input>asjn</Input>
    </ScrollView>
  );
};

export default CreateAd;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    color: "#003f34",
    paddingTop: 50,
  },
  // border: {
  //   borderWidth: 2,
  //   borderColor: "black",
  // },
});
