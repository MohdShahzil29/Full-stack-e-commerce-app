import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Footer from "../Menu/Footer";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
export default Notification;
