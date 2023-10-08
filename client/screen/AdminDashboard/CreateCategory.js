import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";

const CreateCategory = () => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState(""); // Updated variable name

  const handleSummit = async () => {
    try {
      const { data } = await axios.post(
        "http://192.168.43.69:8000/api/v1/category/create-category",
        { name }
      );
      setName(data?.category);
      alert(`${name} category has been created`);
      getAllCategory();
    } catch (error) {
      console.log("Problem creating category");
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

  // Update category Handel

  const updateHandel = async () => {
    try {
      const { data } = await axios.put(
        `http://192.168.43.69:8000/api/v1/category/updated-category/${selected._id}`,
        { name: editedCategoryName }
      );
      alert(`${editedCategoryName} is updated`);
      getAllCategory();
      setVisible(false);
      setEditedCategoryName("");
    } catch (error) {
      console.log(error);
    }
  };
  // Delete Handel Submit

  const handelDelete = async (id, categoryName) => {
    try {
      const { data } = await axios.delete(
        `http://192.168.43.69:8000/api/v1/category/delete-category/${id}`
      );
      alert(`${categoryName} is deleted`);
      getAllCategory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Category Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TouchableOpacity style={styles.deleteButton} onPress={handleSummit}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        {category?.map((i) => (
          <View key={i.id} style={styles.categoryContainer}>
            {selected === i ? (
              <TextInput
                style={styles.nameStyle}
                value={editedCategoryName}
                onChangeText={(text) => setEditedCategoryName(text)}
                autoFocus
                onBlur={() => setSelected(null)}
                onSubmitEditing={updateHandel}
              />
            ) : (
              <Text style={styles.nameStyle}>{i.name}</Text>
            )}
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                setEditedCategoryName(i.name);
                setSelected(i);
                setVisible(true);
              }}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                handelDelete(i._id, i.name);
              }}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(1, 50, 67, 1)",
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  nameStyle: {
    flex: 1,
    backgroundColor: "transparent",
    color: "white",
  },
  editButton: {
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default CreateCategory;
