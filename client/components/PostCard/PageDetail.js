import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../context/cart";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
const PageDetail = () => {
  const [product, setProducts] = useState({});
  const [fullDesc, setFullDesc] = useState(false);
  const [cart, setCart] = useCart()

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
  

  const addToCart = async () => {
   try {
    if (cart) {
      const updateCart = [...cart, product]
      setCart(updateCart)
      await AsyncStorage.setItem("cart", JSON.stringify([updateCart]))
    } else {
      setCart([product])
      await AsyncStorage.setItem("cart", JSON.stringify([product]))
    }
    alert("Product added into the card")
   } catch (error) {
     console.log("Error to updating card")
   }
  }

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
        {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={styles.DescriptionText}>
                {product?.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text numberOfLines={3} style={styles.DescriptionText}>
                {product?.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
        <View style={styles.btnContainer}>
            <Text style={styles.price}> 
             Price : {product?.price}
            </Text>
          <TouchableOpacity style={styles.btn}  
            onPress={addToCart}
          >
            <Text style={styles.btnText}>Add to Cart</Text>
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
  },
  imageContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  detailImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginTop: 10
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleTxt: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    marginBottom: SPACING.space_10,
    fontWeight: "bold",
    marginBottom: 20,
  },
  descriptionTitle: {
    opacity: 0.5,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    marginBottom: SPACING.space_30,
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
    backgroundColor: "#3498db",  
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000",  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  price: {
    // color: 'white',
    marginTop: 10,
    fontSize: 19,
    marginRight: 15,
    
     
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default PageDetail;
