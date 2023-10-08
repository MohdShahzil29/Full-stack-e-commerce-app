import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ContextProvider } from "./context/authContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screen/auth/Register";
import Login from "./screen/auth/Login";
import Home from "./components/Home";
import Account from "./components/FooterMenu/Account";
import Notification from "./components/FooterMenu/Notification";
import Cart from "./components/FooterMenu/Cart";
import HeaderMenu from "./components/Menu/HeaderMenu";

const ScreenMenu = () => {
  const [state] = useContext(ContextProvider);
  const authUser = state?.user && state.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Registers">
      {authUser ? (
        <>
          <Stack.Screen
            name="Carts"
            component={Cart}
            options={{ headerShown: true }}
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
            name="Home"
            component={Home}
            options={{ title: "Back", headerRight: () => <HeaderMenu /> }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>

  //   <Stack.Navigator initialRouteName="Registers">
  //   <Stack.Screen
  //     name="Login"
  //     component={Login}
  //     options={{ headerShown: false }}
  //   />
  //   <Stack.Screen
  //     name="Registers"
  //     component={Register}
  //     options={{ headerShown: false }}
  //   />
  //   <Stack.Screen
  //     name="Carts"
  //     component={Cart}
  //     options={{ headerShown: true }}
  //   />
  //   <Stack.Screen
  //     name="Notification"
  //     component={Notification}
  //     options={{ headerShown: false }}
  //   />
  //   <Stack.Screen
  //     name="Account"
  //     component={Account}
  //     options={{ headerShown: false }}
  //   />
  //   <Stack.Screen
  //     name="Home"
  //     component={Home}
  //     options={{ title: "Back", headerRight: () => <HeaderMenu /> }}
  //   />
  // </Stack.Navigator>
  );
};

export default ScreenMenu;
