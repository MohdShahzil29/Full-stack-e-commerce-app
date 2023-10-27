import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Footer from "../components/Menu/Footer";
import {COLORS} from "../theme/theme"

 

const YourOrder = () => {
  const tableData = [
    { id: 1, status: "Shipped", buyer: "John Doe", date: "2023-10-26", payment: "$100", quantity: 5 },
    { id: 2, status: "Processing", buyer: "Jane Smith", date: "2023-10-27", payment: "$75", quantity: 3 },
    { id: 3, status: "Delivered", buyer: "Bob Johnson", date: "2023-10-28", payment: "$150", quantity: 7 },
    { id: 4, status: "Pending", buyer: "Alice Brown", date: "2023-10-29", payment: "$50", quantity: 2 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.statusName}>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white'}}>No</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Status</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Name</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Date</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Price</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Payment</Text>
        <Text style={{ flex: 1, textAlign: 'center', marginTop: 10, color:'white' }}>Quantity</Text>
      </View>
    <FlatList
      data={tableData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.table}>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 10}}>{item.id}</Text>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 13}}>{item.status}</Text>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 11}}>{item.buyer}</Text>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 10}}>{item.date}</Text>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 13}}>{item.payment}</Text>
          <Text style={{ flex: 1, textAlign: 'center', color: 'white', marginTop: 10, fontSize: 13}}>{item.quantity}</Text>
        </View>
      )} 
    />
      <Footer />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  table: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: "#03072A",
    height: 50,
    borderRadius: 15
  },
  statusName: {
    flexDirection: 'row',
    // marginTop: 10,
    backgroundColor: "#03072A",
    height: 40,
    color: 'white',
    borderRadius: 15
     
  }
})

export default YourOrder;
