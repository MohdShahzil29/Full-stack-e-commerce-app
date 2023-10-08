import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import Footer from "../components/Menu/Footer";

const EditProfile = () => {
  const [state, setState] = useContext(AuthContext);
  const { user, token } = state;
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);
  const [address, setAddress] = useState(user?.address)
  const [phone, setPhone] = useState(user?.phone)

  const handelUpdateUserData = async () => {
    try {
      const { data } = await axios.put(
        "http://192.168.43.69:8000/api/v1/auth/update-profile",
        { name, email, password }
      );
      let UD = JSON.stringify(data);
      setState({ ...state, user: UD?.updateUser });
    } catch (error) {
      alert(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
            }}
            //   style={{ height: 200, width: 200 }}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name: </Text>
          <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email: </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            editable={false}
            onChangeText={(text) => setEmail(text)}
          />
        </View>     
           <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Address: </Text>
          <TextInput
            style={styles.inputBox}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Phone: </Text>
          <TextInput
            style={styles.inputBox}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Password: </Text>
          <TextInput
            style={styles.inputBox}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Role: </Text>
          <TextInput
            style={styles.inputBox}
            value={state?.user?.role}
            editable={false}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.updateBtn}
            onPress={handelUpdateUserData}
          >
            <Text style={styles.updateBtnText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontWeight: "bold",
    width: 70,
    color: "gray",
    top: 40,
  },
  inputBox: {
    width: 250,
    backgroundColor: 'rgba(1, 50, 67, 1)',
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 10,
    top: 40,
  },
  updateBtn: {
    backgroundColor: "black",
    color: "white",
    height: 40,
    width: 250,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  updateBtnText: {
    color: "white",
    fontSize: 14,
  },
  logo: {
    width: 120,
    top: 40,
    height: 120,
    borderRadius: 60,
    resizeMode: "contain",
    backgroundColor: "rgba(1, 50, 67, 1)",
  },
});
export default EditProfile;
