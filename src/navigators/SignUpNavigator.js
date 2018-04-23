import { StackNavigator } from "react-navigation";
import { NameScreen, UploadImages } from "../pages";

const SignUpNavigator = StackNavigator(
  {
    NameScreen: { screen: NameScreen },
    UploadImages: { screen: UploadImages },
  },
  {
    initialRouteName: "UploadImages",
    navigationOptions: {
      header: null,
    },
  },
);
export default SignUpNavigator;
