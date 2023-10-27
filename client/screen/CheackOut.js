import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import RazorpayCheckout from 'react-native-razorpay';

const Checkout = ({ navigation, total }) => {
  const handleCOD = () => {
    alert("Your Order Has Been Placed Successfully");
  };
  const handleOnline = () => {
    alert("Your Redirecting to payment gateway");
    navigation.navigate("payment");
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.heading}>Payment Options</Text>
      <Text style={Styles.price}>Total Amount : ${total}</Text>
      <View style={Styles.paymentCard}>
        <Text style={Styles.paymentHeading}>Select your Payment Mode</Text>
        <TouchableOpacity style={Styles.paymentBtn} onPress={handleCOD}>
          <Text style={Styles.paymentBtnText}>Cash On Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.paymentBtn} 
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_2VYHup8J177yIx',
            amount: total,
            name: 'foo',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: '#F37254'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
        }}
        
        >
          <Text style={Styles.paymentBtnText}>
            Online (CREDIT | DEBIT CARD)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Checkout;
