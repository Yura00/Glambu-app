import React, { Fragment } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "@theme";
const OfferCard = props => {
  return (
    <View style={styles.cardWraper}>
      <Image source={{ uri: props.uri }} style={styles.avartaImg} />
      <View style={styles.infoView}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>${props.price}</Text>
        </View>
        {props.accept && (
          <Fragment>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}>
              <Feather
                name="check"
                color="#6e9451"
                size={14}
                style={{ paddingRight: 10 }}
              />
              <Text>Accepted your offer</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 15,
                borderTopColor: "#0000001f",
                borderTopWidth: 1,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
                onPress={() => props.onCall('phone', '+1 415-486-4800')}
              >
                <MaterialCommunityIcons
                  name="cellphone-android"
                  size={24}
                  color={Colors.secondary}
                />
                <Text style={styles.acceptText}>PHONE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => props.onCall('whatsapp')}
              >
                <FontAwesome
                  name="whatsapp"
                  size={24}
                  color={Colors.secondary}
                />
                <Text style={styles.acceptText}>WHATSAPP</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
        {props.pending && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="md-time"
              color="#00000061"
              size={20}
              style={{ paddingRight: 10, paddingVertical: 10 }}
            />
            <Text>{props.pending.timeStamp}</Text>
          </View>
        )}
        {props.reject && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="block-helper"
              color="#9c5353"
              size={14}
              style={{ paddingRight: 10, paddingVertical: 10 }}
            />
            <Text>{props.reject.reason}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default OfferCard;
const styles = StyleSheet.create({
  cardWraper: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 7,
    paddingTop: 10,
    paddingLeft: 10,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 0.6,
    elevation: 3,
  },
  avartaImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoView: {
    flex: 1,
    paddingLeft: 16,
  },
  cardHeader: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16,
  },
  name: {
    fontSize: 18,
    color: "#212121",
  },
  price: {
    fontSize: 18,
    color: "#00000061",
  },
  acceptText: {
    color: Colors.secondary,
    fontSize: 16,
    paddingLeft: 7,
  },
});
