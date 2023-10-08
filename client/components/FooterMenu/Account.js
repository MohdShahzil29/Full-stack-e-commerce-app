import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Footer from "./../Menu/Footer";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
          }}
          style={{ height: 200, width: 200 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={styles.textMain}
          onPress={() => navigation.navigate("EditProfile")}
        >
          Edit Profile
        </Text>
        <Text
          style={styles.textMain}
          onPress={() => navigation.navigate("YourOrder")}
        >
          Your Order
        </Text>
        <Text
          style={styles.textMain}
          onPress={() => navigation.navigate("AdminPanel")}
        >
          Admin Panel
        </Text>
      </View>
      {/* </ScrollView> */}
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    // margin: 10,
    marginTop: 100,
  },
  textContainer: {
    alignItems: "center",
    gap: 20,
  },
  textMain: {
    top: 40,
    backgroundColor: "#708090",
    color: "white",
    padding: 10,
    width: 250,
    textAlign: "center",
    borderRadius: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Account;
