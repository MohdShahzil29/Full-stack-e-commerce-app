import { View, Text, StyleSheet, BackHandler } from "react-native";
import React, { useContext } from "react";
import Footer from "./../components/Menu/Footer";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/authContext";

const AdminPanel = () => {
  const navigation = useNavigation();
  const [state] = useContext(AuthContext);
  const role = state?.user?.role;
  console.log("Role in AdminPanel", role);

  
  if (role !== 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.adminText}>Admin Panel</Text>
        <View style={styles.textContainer}>
          <Text
            style={styles.textMain}
            onPress={() => navigation.navigate("EditProfile")}
          >
            User Details
          </Text>
          <Text
            style={styles.textMain}
            onPress={() => navigation.navigate("Create-Products")}
          >
            Create Products
          </Text>
          <Text
            style={styles.textMain}
            onPress={() => navigation.navigate("Create-Category")}
          >
            Create Category
          </Text>
          <Text
            style={styles.textMain}
            onPress={() => navigation.navigate("Get-Products")}
          >
            Get Products
          </Text>
          <Text
            style={styles.textMain}
            onPress={() => navigation.navigate("Order")}
          >
            Orders
          </Text>
        </View>
        <View>
          <Footer />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.sorryText}>Access Denied</Text>
        <Text style={styles.messageText}>
          Sorry You are not eligible only admin can access this
        </Text>
        <View>
          <Footer />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  adminText: {
    textAlign: "center",
    marginTop: 120,
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    borderBottomWidth: 1,
  },
  textContainer: {
    alignItems: "center",
    gap: 20,
  },
  textMain: {
    marginBottom: 10,
    backgroundColor: "#708090",
    color: "white",
    padding: 10,
    width: 250,
    textAlign: "center",
    borderRadius: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  sorryText: {
    marginTop: 140,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 1,
    color: "red",
  },
  messageText: {
    marginBottom: 300,
    textAlign: "center",
    fontSize: 20,
  },
});

export default AdminPanel;
