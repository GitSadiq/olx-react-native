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
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";
import { getImageURL, createAds } from "../../config/firebase";

const CreateAd = ({ navigation }) => {
  const [productTitle, setproductTitle] = React.useState();
  const [productPrice, setproductPrice] = React.useState();
  const [productImage, setproductImage] = React.useState();
  const [productDescription, setproductDescription] = React.useState();

  const productObj = {
    productTitle,
    productPrice,
    productDescription,
    productImage,
  };
  const [image, setImage] = React.useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const url = await getImageURL(result.assets[0]);
      setproductImage(url);
      console.log("resp", url);
    }
  };

  return (
    <ScrollView style={[styles.body, styles.border]}>
      <View style={{ padding: 10 }}>
        <Text style={[styles.heading, styles.common]}>Image</Text>
        {image ? (
          <View style={styles.uploadImageContainer}>
            <Image style={styles.image_logo} source={{ uri: image }} />
          </View>
        ) : (
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.uploadImage}>
              <AntDesign name={"pluscircleo"} size={20} color={"white"} />
              <Text style={[styles.imageText]}>Upload Image</Text>
            </View>
          </TouchableOpacity>
        )}
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
        {/* <Text style={[styles.heading, styles.common]}>Image</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setproductImage}
            value={productImage}
            placeholder="Upload Pictures"
          />
        </View> */}
        <Text style={[styles.heading, styles.common]}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          onChangeText={setproductDescription}
          value={productDescription}
          placeholder="Oppo A-53..."
          // numberOfLines={5}
          multiline={true}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            createAds(productObj);
            navigation.navigate("Home");
          }}
        >
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
    padding: 10,
    paddingTop: 20,
    // paddingBottom: 400,
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
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    paddingStart: 20,
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    marginTop: 50,
    marginBottom: 100,
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
  textAreaContainer: {
    borderColor: "#003f34",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    justifyContent: "flex-start",
  },
  uploadImage: {
    borderWidth: 1,
    borderColor: "#249991",
    height: 100,
    paddingStart: 20,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: "#249991",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "white",
  },
  imageText: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  uploadImageContainer: {
    borderWidth: 1,
    borderColor: "#003f34",
    height: 200,
    borderRadius: 5,
  },
  image_logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
