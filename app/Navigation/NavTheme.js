import { DefaultTheme } from "@react-navigation/native";
import Colors from "../Config/Colors";

export default NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.white,
  },
};
