import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const PageDetail = () => {
  const [product, setProducts] = useState({});
  const route = useRoute();
  const { slug } = route.params;
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://192.168.43.69:8000/api/v1/product/single-product/${slug}`
      );
      setProducts(data.products);
      // console.log(setProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.detailImage}
          source={{
            uri: `http://192.168.43.69:8000/api/v1/product/get-photo/${product?._id}`,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleTxt}>{product?.name}</Text>
        <Text style={styles.descriptionTitle}>Product Details</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>Add TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.btnText}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  detailImage: {
    width: 325,
    height: 180,
    borderRadius: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleTxt: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionTitle: {
    opacity: 0.5,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#3498db", // Change the background color to your preferred color
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000", // Add shadow for a raised look
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default PageDetail;
