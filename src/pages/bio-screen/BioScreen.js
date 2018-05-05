import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { GlobalStyle, Images, Colors } from "@theme";
import BottomButton from "../../components/BottomButton";

import styles from "./BioScreen.style";

class BioScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: "",
    };
  }
  onNext = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "MainTab",
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    const { bio } = this.state;
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <View style={GlobalStyle.pageContainer}>
          <View
            style={[GlobalStyle.container, { justifyContent: "flex-start" }]}>
            <Text style={styles.title}>
              Wow, you simply look lik a real boss!
            </Text>
            <Text style={styles.desc}>
              Now tell us something about your self.{"\n"}You can write about
              your hobbies, values, net worth, and visions in life.
            </Text>
            <TextInput
              placeholder="Your Profile text"
              style={styles.nameInput}
              value={bio}
              underlineColorAndroid={Colors.commentText}
              onChangeText={bio => this.setState({ bio })}
              maxLength={500}
              multiline
            />
            <Text style={styles.maxLength}>{bio.length} / 500</Text>
          </View>
          <View style={GlobalStyle.wrapper}>
            <Image source={Images.IC_COMMENTS} />
            <Text style={styles.commentText}>
              For more info, questions, feedback and perhaps to say hello,
              kindly send an e-mail to hello@glambu.com. We will respond within
              24 hours :-)
            </Text>
          </View>
        </View>
        <BottomButton
          name="Finished, let's go!"
          active={bio.length != 0}
          onPress={this.onNext}
        />
      </View>
    );
  }
}

export default BioScreen;
