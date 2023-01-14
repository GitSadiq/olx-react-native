import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={[styles.searchBarView]}>
      <Searchbar
        placeholder="What are you looking for?"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={[styles.searchInput]}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "black",
  },
  searchBarView: {
    flex: 10 / 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    backgroundColor: "#effcfa",
    marginTop: 15,
  },
  searchInput: {
    width: "100%",
  },
});
