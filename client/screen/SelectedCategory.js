import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const SelectedCategory = () => {
  const route = useRoute();
  const { slug } = route.params;
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation()
  const navigateToPostDetail = (slug) => {
    navigation.navigate("PostDetail", { slug });
  };
  const getSelectedProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.43.69:8000/api/v1/category/selected-category/${slug}`
      );
      setCategory(data.category);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedProducts();
  }, []);

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 32) / 2; 

  return (
<ScrollView style={styles.container}>
      <View>
        <Text style={styles.categoryTitle}>{category?.name}</Text>
        <Text style={styles.productCount}>{products?.length} Products</Text>
      </View>
      <View style={styles.cardContainer}>
        {products.map((product) => (
          <TouchableOpacity
            key={product._id}
            onPress={() => navigateToPostDetail(product.slug)}
          >
            <View style={[styles.card, { width: cardWidth }]}>
              <Image
                style={styles.cardImg}
                source={{
                  uri: `http://192.168.43.69:8000/api/v1/product/get-photo/${product._id}`,
                }}
              />
              <View style={styles.cardInfo}>
                <Text style={styles.textTitle}>
                  {product?.name.substring(0, 20)}
                </Text>
                <Text style={styles.textPrice}>Price: ${product?.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: -4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    width: "48%",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardInfo: {
    padding: 8,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    maxHeight: 48,
  },
  textPrice: {
    fontSize: 14,
    color: "#555",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productCount: {
    fontSize: 16,
    color: "#777",
  },
});
export default SelectedCategory;
