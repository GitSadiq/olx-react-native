import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const CreateAd = () => {
  const [productTitle, setproductTitle] = React.useState();
  const [productPrice, setproductPrice] = React.useState();
  const [productImage, setproductImage] = React.useState();
  const [productDescription, setproductDescription] = React.useState();
  return (
    <ScrollView style={[styles.body, styles.border]}>
      <View style={{ padding: 10 }}>
        <Text style={[styles.heading, styles.common]}>Product Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={setproductTitle}
          value={productTitle}
          placeholder="Mobile"
        />
        <Text style={[styles.heading, styles.common]}>Product Price</Text>
        <TextInput
          style={styles.input}
          onChangeText={setproductPrice}
          value={productPrice}
          placeholder="12000"
        />
        <Text style={[styles.heading, styles.common]}>Image</Text>
        <TextInput
          style={styles.input}
          onChangeText={setproductImage}
          value={productImage}
          placeholder="Upload Pictures"
        />
        <Text style={[styles.heading, styles.common]}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          onChangeText={setproductDescription}
          value={productDescription}
          placeholder="Oppo A-53..."
          numberOfLines={10}
          multiline={true}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Ad</Text>
        </Pressable>
      </View>
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
  heading: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "600",
  },
  common: {
    color: "#003f34",
  },
  input: {
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    paddingStart: 20,
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#003f34",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
  para: {
    fontSize: 17,
    marginTop: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  //   textArea: {
  //     height: 150,
  //     // textAlign: "start",
  //   },
  textAreaContainer: {
    borderColor: "#003f34",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },
});
