import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search as you wish"
        style={styles.searchBar}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity>
        <Text style={styles.textSearch}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#142B33",
    height: 70,
    display: "flex",
    flexDirection: "row", 

  },
  searchBar: {
    marginTop: 13,
    backgroundColor: "white",
    color: "black",
    width: 300,
    height: 40,
    marginLeft: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  textSearch: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    height: 40,
    width: 80,
    marginLeft: 10,
    backgroundColor: "#ea6a30",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
});

export default Search;
