import React, { useEffect, useState } from "react";
import { Avatar, Button, Card } from "react-native-paper";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getAllData } from "../../config/firebase";

const Products = () => {
  const [products, setProducts] = useState();
  let resp;
  const CallData = async () => {
    resp = await getAllData();
    setProducts(resp.allAds);
    console.log(products);
  };

  useEffect(() => {
    CallData();
  }, [resp]);

  return (
    <View style={[styles.productsBody]}>
      {products ? (
        products.map((item, index) => {
          console.log(item);
          return (
            <View key={index} style={[styles.row]}>
              <View style={styles.card}>
                <Image
                  style={[styles.cardImage]}
                  source={{ uri: item.productImage }}
                ></Image>
                <View style={[styles.contentCard]}>
                  <Text style={[styles.titleCard]}>{item.productTitle}</Text>
                  <Text style={[styles.priceCard]}>{item.productPrice}</Text>
                </View>
              </View>
              {/* <View style={styles.card}>
                <Image
                  style={[styles.cardImage]}
                  source={require("../../../assets/p4.jpg")}
                ></Image>
                <View style={[styles.contentCard]}>
                  <Text style={[styles.titleCard]}>
                    KJBdksjb nlanlsnlasnlns ,nasnl ajsnl kjskd ksjdnkj skjnd
                    sndjn snjdn
                  </Text>
                  <Text style={[styles.priceCard]}>RS: 300</Text>
                </View>
              </View> */}
            </View>
          );
        })
      ) : (
        // <></>
        <></>
      )}

      {/* <View style={[styles.row]}>
        <View style={styles.card}>
          <Image
            style={[styles.cardImage]}
            source={require("../../../assets/p1.jpg")}
          ></Image>
          <View style={[styles.contentCard]}>
            <Text style={[styles.titleCard]}>
              KJBdksjb nlanlsnlasnlns ,nasnl ajsnl kjskd ksjdnkj skjnd sndjn
              snjdn
            </Text>
            <Text style={[styles.priceCard]}>RS: 300</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={[styles.cardImage]}
            source={require("../../../assets/p4.jpg")}
          ></Image>
          <View style={[styles.contentCard]}>
            <Text style={[styles.titleCard]}>
              KJBdksjb nlanlsnlasnlns ,nasnl ajsnl kjskd ksjdnkj skjnd sndjn
              snjdn
            </Text>
            <Text style={[styles.priceCard]}>RS: 300</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "black",
  },
  productsBody: {
    flex: 1 / 10,
    width: "100%",
    // height: 700,
    backgroundColor: "white",
    backgroundColor: "#effcfa",
    paddingBottom: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  card: {
    width: "90%",
    height: 300,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  contentCard: {
    width: "100%",
    padding: 10,
  },
  titleCard: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#003f34",
    fontWeight: "600",
    height: 75,
  },
  priceCard: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#003f34",
    fontWeight: "700",
  },
});
