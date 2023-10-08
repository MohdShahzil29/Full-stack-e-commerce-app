import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CartData } from "../Data/CartData";
import PriceTable from "../components/cart/PriceTable";
// import Layout from "../components/Layout/Layout";
import Cartitem from "../components/cart/Cartitem";

const CartDetails = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You Have ${cartItems?.length} Item Left In Your Cart`
          : "OOPS Your Cart Is EMPTY !"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <Cartitem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={999} />
            <PriceTable title={"Tax"} price={1} />
            <PriceTable title={"Shipping"} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={"Grand Total"} price={1001} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("CheckOut")}
            >
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 50,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40
  },
  btnCheckoutText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default CartDetails;
