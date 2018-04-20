import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { GlobalStyle, Colors, Images } from '@theme';
import BottomButton from '../../components/BottomButton';
import styles from './NameScreen.style';

class NameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render () {
    const { name } = this.state;
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <View style={GlobalStyle.pageContainer}>
          <View style={GlobalStyle.container}>
            <Text style={styles.title}>
              Hi Mr. ...
            </Text>
            <TextInput
              placeholder='What is your name?'
              style={styles.nameInput}
              value={name}
              underlineColorAndroid={Colors.commentText}
              onChangeText={ (name) => this.setState({ name }) }
            />
          </View>
          <View style={GlobalStyle.wrapper}>
            <Image source={Images.IC_COMMENTS} />
            <Text style={styles.commentText}>
              Did you know that gentlemen have extremely high extremely high privacy at Glambu? It's only a girl you sent a date offer to can view your profile!
            </Text>
          </View>
        </View>
        <BottomButton name="Next" active={name.length != 0}/>
      </View>
    )
  }
}
export default NameScreen;