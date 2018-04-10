import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Onboarding } from '../pages';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator(
  {
    Onboarding: {
      screen: Onboarding
    }
  },
  {
    // initialRouteName: 'RootDrawerNavigator',//test
    initialRouteName: 'Onboarding',
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    }
  }
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
