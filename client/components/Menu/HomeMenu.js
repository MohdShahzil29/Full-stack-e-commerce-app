import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const HomeMenu = () => {
  const [state] = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.TextColor}>MSM Store</Text>
        <Text style={styles.TextColor}> Hii {state?.user?.name}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#142B33",
    height: 50, 
  },
  TextColor: {
    color: "#ffffff",
    padding: 13,
    fontSize: 16,
  },
});

export default HomeMenu;
