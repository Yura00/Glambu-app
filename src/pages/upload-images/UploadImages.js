import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import BottomButton from "../../components/BottomButton";
import GridView from "react-native-super-grid";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { GlobalStyle, Images } from "@theme";
import styles from "./UploadImages.style";

class UploadImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  onNext = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "BioScreen",
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    const items = [0, 1, 2, 3, 4, 5];
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <View style={GlobalStyle.pageContainer}>
          <View style={GlobalStyle.container}>
            <Text style={styles.title}>Nice to meet you Paul :-)</Text>
            <Text style={styles.desc}>
              Now, I need you to upload some pictures of you. You can edit or
              delete the picture anytime.
            </Text>
            <GridView
              itemDimension={90}
              items={items}
              style={styles.gridView}
              renderItem={item => (
                <View style={styles.itemContainer} key={item}>
                  <TouchableOpacity style={styles.action}>
                    <Icon name="plus" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={GlobalStyle.wrapper}>
            <Image source={Images.IC_COMMENTS} />
            <Text style={styles.commentText}>
              The most appropriate profiles should contain full-body pictures a
              nice smile, clean and visible pictures.
            </Text>
          </View>
        </View>
        <BottomButton name="Go to final step" active onPress={this.onNext} />
      </View>
    );
  }
}

export default UploadImages;
