import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Card = () => {
  // console.log(product);
  const navigation = useNavigation();
  const [product, setProducts] = useState([]);
  const [count, setCount] = useState(4);

  const getAllProducts = async () => {
    const { data } = await axios.get(
      "http://192.168.43.69:8000/api/v1/product/product-list"
    );
    setProducts(data.products);
  };
  const productCount = async () => {
    const { data } = await axios.get(
      "http://192.168.43.69:8000/api/v1/product/product-count"
    );
    setCount(data.totalCount);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const navigateToPostDetail = (slug) => {
    navigation.navigate("PostDetail", { slug });
  };

  const loadMore = () => {
    setCount(count + 10);
  };
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 24) / 2;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        {product.slice(0, count).map((product) => (
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
      {count < product.length && (
        <Button title="Load More" onPress={loadMore} />
      )}
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
    marginHorizontal: -8,
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
});

 

export default Card;
