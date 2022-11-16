import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./AuthContext";
import authStorage from "./Storage";

export default UseAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};
