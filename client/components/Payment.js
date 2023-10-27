import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import DropIn from "braintree-web-drop-in-react";
// import { PayPal } from 'react-native-paypal-wrapper';

const Payment = () => {
    // const [clientToken, setClientToken] = useState("");
    // const [instance, setInstance] = useState("");
    // const [loading, setLoading] = useState(false);

    // Define auth and cart here or receive them as props
    const auth = {/* Your auth data here */}
    const cart = {/* Your cart data here */}
  
    return (
        <View>
            <Text>Hello</Text>
        </View>
        // <View style={{ marginTop: 2 }}>
        //     {!clientToken || !auth?.token || !cart?.length ? (
        //         <></>
        //     ) : (
        //         <>
        //             <PayPal
        //                 options={{
        //                     authorization: clientToken,
        //                     paypal: {
        //                         flow: 'vault',
        //                     },
        //                 }}
        //                 onInstance={(instance) => setInstance(instance)}
        //             />

        //             <TouchableOpacity
        //                 style={{
        //                     backgroundColor: 'blue',
        //                     padding: 10,
        //                     borderRadius: 5,
        //                 }}
        //                 onPress={handlePayment}
        //                 disabled={loading || !instance || !auth?.user?.address}
        //             >
        //                 <Text style={{ color: 'white' }}>
        //                     {loading ? 'Processing ....' : 'Make Payment'}
        //                 </Text>
        //             </TouchableOpacity>
        //         </>
        //     )}
        // </View>
    );
}

export default Payment;
