import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Footer from "../Menu/Footer";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: require("../../images/1.jpg"),
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99,
      image: require("../../images/2.jpg"),
    },
    // Add more products as needed
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Your Cart</Text>
      <ScrollView>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              style={styles.image}
              source={item.image}
              resizeMode="contain" // Adjust the resizeMode property
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity> */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 50,
    gap: 40
  },
  textContainer: {
    fontSize: 25,
    paddingLeft: 10
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
  },
  orderButton: {
    backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  orderButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Cart;
