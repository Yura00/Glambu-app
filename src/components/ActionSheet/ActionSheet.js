import React from 'react';
import { Animated, View, Text } from 'react-native';

export default class ActionSheet extends React.Component {
  state = {
    popUp: new Animated.Value(0)
  }
  render () {
    const { popUp } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          bottom: popUp,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}