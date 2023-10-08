import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
// import Footer from "../../components/Menu/Footer";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
// import RNPickerSelect from 'react-native-picker-select';

const CreateProducts = () => {
  const [photo, setPhoto] = useState("");
  console.log(photo);
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [shipping, setShipping] = useState(true);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    // console.log("Result from Image Picker:", result);
    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

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

  const createProductsHandel = async () => {
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("image", photo);
      productData.append("shipping", shipping);
      productData.append("quantity", quantity);
      productData.append("price", price);
      const { data } = await axios.post(
        "http://192.168.43.69:8000/api/v1/product/create-products",
        productData
      );
      alert(data.message);
      // alert(data?.error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.content}>
        <Text style={styles.heading}>Create Your Product</Text>
        <TouchableOpacity onPress={handleImagePick}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>Choose Image</Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.inputDescription}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <View style={styles.shippingContainer}>
            <Text style={styles.shippingLabel}>Shipping:</Text>
            <TouchableOpacity
              style={[
                styles.shippingOption,
                shipping ? styles.shippingOptionSelected : null,
              ]}
              onPress={() => setShipping(true)}
            >
              <Text style={styles.shippingOptionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.shippingOption,
                !shipping ? styles.shippingOptionSelected : null,
              ]}
              onPress={() => setShipping(false)}
            >
              <Text style={styles.shippingOptionText}>No</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
        </View>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={createProductsHandel}
        >
          <Text style={styles.btnText}>Create Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  content: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imageText: {
    fontSize: 16,
    color: "#555",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  inputDescription: {
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    height: 125,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingBottom: 80,
  },
  shippingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  shippingLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  shippingOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  shippingOptionSelected: {
    backgroundColor: "#007bff",
  },
  shippingOptionText: {
    fontSize: 16,
    color: "#555",
  },
  btnStyle: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
  },
});
export default CreateProducts;
