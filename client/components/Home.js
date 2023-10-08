import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Menu/Footer";
import HomeMenu from "./Menu/HomeMenu";
import HomeNav from "./Menu/HomeNav";
import ImageSection from "./Menu/ImageSection";
import { AuthContext } from "../context/authContext";
import Card from "./PostCard/Card";
import axios from "axios";

const Home = () => {
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuBar}>
          <HomeMenu />
          <HomeNav />
          <ImageSection />
          <View style={styles.text}>
            <Text style={styles.textPara}> Welcome 😎 {state?.user?.name}</Text>
            <Text style={{ textAlign: "center", paddingTop: 10 }}>
              Discover seamless online shopping with our diverse product range.
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <Card />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  menuBar: {
    paddingTop: 30,
  },
  text: {
    alignItems: "center",
    paddingTop: 20,
    textAlign: "center",
  },
  textPara: {
    fontSize: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    // justifyContent: "space-between",
    // marginHorizontal: -5,
    // marginTop: 10,
  },
  scrollViews: {
    flex: 1, // Make the ScrollView take all available vertical space
  },
});

export default Home;
