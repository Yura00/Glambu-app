import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BottomButton from "../../components/BottomButton";
import GridView from "react-native-super-grid";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { GlobalStyle, Images } from "@theme";
import styles from "./UploadImages.style";

class UploadImages extends React.Component {
  render() {
    const items = [
      { name: "TURQUOISE", code: "#1abc9c" },
      { name: "EMERALD", code: "#2ecc71" },
      { name: "PETER RIVER", code: "#3498db" },
      { name: "AMETHYST", code: "#9b59b6" },
      { name: "WET ASPHALT", code: "#34495e" },
      { name: "GREEN SEA", code: "#16a085" },
    ];
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
                <View style={styles.itemContainer}>
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
        <BottomButton name="Next" onPress={this.onNext} />
      </View>
    );
  }
}

export default UploadImages;
