import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../fakeDb";

export const userContext = createContext();

export const useUserData = () => useContext(userContext);

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchData().then((response) => setUserData(response));
  }, []);
  return (
    <userContext.Provider value={{ userData }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
