import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Footer from "./Menu/Footer";

const AllCategory = () => {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();
  const navigateToCategory = (slug) => {
    navigation.navigate("SelectedCategory", { slug });
  };
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.43.69:8000/api/v1/category/get-category"
      );
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>All Category</Text>
      <View style={styles.categoryContainer}>
        {category.map((c) => (
          <View key={c.id} style={styles.categoryItem}>
            <ScrollView>
            <Text
              style={styles.categoryBtn}
              onPress={() => navigateToCategory(c.slug)}
            >
              {c.name}
            </Text>
        </ScrollView>
          </View>
        ))}
      </View>
      {/* <View style={styles.footer}> */}
      <Footer />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  textSize: {
    fontSize: 30,
    borderBottomWidth: 1,
    paddingLeft: "30%",
    top: 50,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  categoryItem: {
    width: "48%", 
    marginVertical: 5, 
  },
  categoryBackground: {
    backgroundColor: "#3498db", 
    borderRadius: 5,
    elevation: 3, 
    padding: 10,
  },
  categoryBtn: {
    color: "black", 
    fontSize: 18, 
    fontWeight: "bold", 
    borderColor: "#3498db", 
    borderWidth: 1, 
    textAlign: "center",
  },
});


export default AllCategory;
