import { View, Text } from "react-native";
import React from "react";
import { ContextProvider } from "./context/authContext";
import ScreenMenu from "./ScreenMenu";

const RootNavigation = () => {
  return (
    <ContextProvider>
      <ScreenMenu />
     </ContextProvider>
  );
};

export default RootNavigation;
