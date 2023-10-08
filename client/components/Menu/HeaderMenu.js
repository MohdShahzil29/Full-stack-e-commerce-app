import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderMenu = () => {
  return (
    <View>
    <TouchableOpacity>
      <FontAwesome5 name="sign-out-alt" color={"red"} style={styles.icon}  />
    </TouchableOpacity>
  </View>
  )
}

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

export default HeaderMenu