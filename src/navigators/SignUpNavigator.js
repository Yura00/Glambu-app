import { StackNavigator } from "react-navigation";
import { NameScreen, UploadImages, BioScreen } from "../pages";

const SignUpNavigator = StackNavigator(
  {
    NameScreen: { screen: NameScreen },
    UploadImages: { screen: UploadImages },
    BioScreen: { screen: BioScreen },
  },
  {
    initialRouteName: "BioScreen",
    navigationOptions: {
      header: null,
    },
  },
);
export default SignUpNavigator;
