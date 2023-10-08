import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          style={styles.icon}
          color={route.name === "Home" && "red"}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Carts")}>
        <FontAwesome5
          name="cart-arrow-down"
          style={styles.icon}
          color={route.name === "Carts" && "yellow"}
        />
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("All-category")}>
        <Ionicons
          name="list-circle-outline"
          style={styles.icon}
          color={route.name === "All-category" && "blue"}
        />
        <Text>All Category</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <FontAwesome5
          name="user-circle"
          style={styles.icon}
          color={route.name === "Account" && "red"}
        />
        <Text>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <AntDesign
          name="logout"
          style={styles.icon}
          // color={route.name === "Account" && "red"}
        />
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  icon: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 24,
  },
});

export default Footer;
