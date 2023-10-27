import { BackHandler, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/auth/Login";
import Register from "./screen/auth/Register";
import Home from "./components/Home";
import Cart from "./components/FooterMenu/Cart";
import Account from "./components/FooterMenu/Account";
import Notification from "./components/FooterMenu/Notification";
import { ContextProvider } from "./context/authContext";
import Laptop from "./components/TopMenu.js/Laptop";
import Mobile from "./components/TopMenu.js/Mobile";
import Gadgets from "./components/TopMenu.js/Gadgets";
import Watch from "./components/TopMenu.js/Watch";
import PageDetail from "./components/PostCard/PageDetail";
import AllCategory from "./components/AllCategory";
import SelectedCategory from "./screen/SelectedCategory";
import EditProfile from "./screen/EditProfile";
import YourOrder from "./screen/YourOrder";
import AdminPanel from "./screen/AdminPanel";
import CreateProducts from './screen/AdminDashboard/CreateProducts';
import CreateCategory from './screen/AdminDashboard/CreateCategory';
import GetProducts from "./screen/AdminDashboard/GetProducts";
import Orders from "./screen/AdminDashboard/Orders";
import CartDetails from "./screen/CartDetails";
import Checkout from "./screen/CheackOut";
import { CartProvider } from "./context/cart";
import Payment from "./components/Payment";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <RootNavigation /> */}
      <ContextProvider>
        <CartProvider>
        <Stack.Navigator initialRouteName="Registers">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registers"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Carts"
            component={CartDetails}
            options={{ headerShown: false }}
          />         
           <Stack.Screen
            name="CheckOut"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Laptop"
            component={Laptop}
            // options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="payment"
            component={Payment}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mobile"
            component={Mobile}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Gadgets"
            component={Gadgets}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Watch"
            component={Watch}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostDetail"
            component={PageDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectedCategory"
            component={SelectedCategory}
            options={{ title: "Back" }}
          />
          <Stack.Screen
            name="All-category"
            component={AllCategory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false  }}
          />
          <Stack.Screen
            name="YourOrder"
            component={YourOrder}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminPanel"
            component={AdminPanel}
            options={{ headerShown: false }}
          />    
          <Stack.Screen
            name="Create-Products"
            component={CreateProducts}
            options={{ headerShown: false }}
          />    
           <Stack.Screen
            name="Create-Category"
            component={CreateCategory}
            options={{ headerShown: false }}
          />           
          <Stack.Screen
            name="Get-Products"
            component={GetProducts}
            options={{ headerShown: false }}
          />        
          <Stack.Screen
            name="Order"
            component={Orders}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Back", headerShown: false }}
          />
        </Stack.Navigator>
        </CartProvider>
      </ContextProvider>
    </NavigationContainer>
  );
}
