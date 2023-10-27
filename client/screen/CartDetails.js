import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CartData } from "../Data/CartData";
import PriceTable from "../components/cart/PriceTable"; 
import Cartitem from "../components/cart/Cartitem";
import { useCart } from "../context/cart";

const CartDetails = ({ navigation }) => { 
  const [cart, setCart] = useCart()
  const [total, setTotal] = useState(0)

  const grandTotal = (newTotal) => {
    setTotal(newTotal)
  }

  useEffect(() => {
    let initialTotal = 0;
    cart?.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      if (!isNaN(itemPrice)) {
        initialTotal += itemPrice;
      }
    });
    setTotal(initialTotal);
  }, [cart]);
  
  return (
    <>
      <Text style={styles.heading}>
        {cart?.length > 0
          ? `You Have ${cart?.length} Item Left In Your Cart`
          : "OOPS Your Cart Is EMPTY !"}
      </Text>
      {cart?.length > 0 && (
        <>
          <ScrollView>
            {cart?.map((item) => (
              <Cartitem item={item} key={item._id} grandTotal={grandTotal} total={total}/>
            ))}
          </ScrollView>
          <View>
            <View style={styles.grandTotal}>
              <PriceTable title={"Grand Total"} price={total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })} />
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
