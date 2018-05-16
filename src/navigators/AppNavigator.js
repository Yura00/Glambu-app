import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { Onboarding, MakeOffer } from "../pages";
import { addListener } from "../utils/redux";
import SignUpNavigator from "./SignUpNavigator";
import MainTabNavigator from "./MainTabNavigator";

export const AppNavigator = StackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: null,
      },
    },
    RegisterationFlow: {
      screen: SignUpNavigator,
    },
    MainTab: {
      screen: MainTabNavigator,
    },
    MakeOffer: {
      screen: MakeOffer,
    },
  },
  {
    initialRouteName: "Onboarding",
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigationReducer: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, navigationReducer } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationReducer,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationReducer: state.navigationReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);
