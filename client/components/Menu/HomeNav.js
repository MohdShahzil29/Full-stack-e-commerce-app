import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const HomeNav = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);
  const navigateToCategory = (slug) => {
    navigation.navigate("SelectedCategory", { slug });
  };
  // const navigateToCategory = (slug) => {
  //   navigation.navigate("SelectedCategory", { slug });
  // };
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.43.69:8000/api/v1/category/get-category"
      );
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  const defaultIcons = {
    laptop: "laptop",
    mobile: "mobile-alt",
    gadgets: "gamepad",
    watch: "stopwatch",
    shoes: "shoe-prints",
    Desktop: "laptop-house"
  };

  return (
    <>
      {/* {category.map((c) => (
        <View style={styles.container}>
          <View style={styles.menuCus}>
            <TouchableOpacity
              onPress={() => navigation.navigate("All-category")}
            >
              <FontAwesome5 name="th-list" style={styles.icon} />
              <Text style={styles.fontCus}>All Category</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Laptop")}>
              <FontAwesome5 name="laptop-house" style={styles.icon} />
              <Text style={styles.fontCus}>Laptop</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mobile")}>
              <FontAwesome5 name="mobile-alt" style={styles.icon} />
              <Text style={styles.fontCus}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Gadgets")}>
              <FontAwesome5 name="gamepad" style={styles.icon} />
              <Text style={styles.fontCus}>Gadgets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Watch")}>
              <FontAwesome5 name="stopwatch" style={styles.icon} />
              <Text style={styles.fontCus}>Watch</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))} */}

      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.menuCus}>
            {category.map((c) => (
              <TouchableOpacity
                key={c.id}
                onPress={() => navigateToCategory(c.slug)}
                style={styles.categoryItem}
              >
                <FontAwesome5
                  name={defaultIcons[c.slug] || "question"}
                  style={styles.icon}
                />
                <Text style={styles.fontCus}>{c?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#033E3E",
    height: 60,
  },
  menuCus: {
    flexDirection: "row",
    gap: 20,
    padding: 10,
    justifyContent: "center",
  },
  fontCus: {
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 24,
    color: "white",
  },
});

export default HomeNav;
