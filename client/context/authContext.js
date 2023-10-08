import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const getLocalStorage = async () => {
      try {
        const data = await AsyncStorage.getItem("@auth");
        console.log("loginData", data);

        if (data) {
          const { user, token } = JSON.parse(data);
          setState({ ...state, user, token });
        }
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };
    getLocalStorage();
  }, []);
  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, ContextProvider };
