import React from "react";
import { View, StatusBar, Image, Text, Dimensions } from "react-native";
import { connect } from "react-redux";
import Slick from "react-native-slick";
import { setUserToken } from "../../actions/auth";
import { FBLogin, FBLoginManager } from "react-native-facebook-login";

import FBLoginView from "../../components/FBLoginView";

import { GlobalStyle, Images } from "@theme";

import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";
import Slide5 from "./slide5";
import styles from "./onboarding.style";

const { height } = Dimensions.get("window");

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
  }
  onLogin = e => {
    const {
      credentials: { token, tokenExpirationDate, userId },
      profile: { email, gender },
    } = e;
    this.props.setUserToken({
      token,
      email,
      tokenExpirationDate,
      userId,
      gender,
    });
  };

  render() {
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <StatusBar backgroundColor="#4000002f" translucent />
        <Image
          source={Images.BG_GRAD_ONBOARDING}
          style={styles.topBackground}
          resizeMode="stretch"
        />
        <View style={[GlobalStyle.pageContainer, { paddingHorizontal: 0 }]}>
          <Slick
            height={height * 0.75}
            index={0}
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: "rgba(255,255,255,.5)",
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: "#ffffff",
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }
            paginationStyle={{
              bottom: 20,
            }}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
          </Slick>
          <Text style={styles.desc}>
            We do not post in your name. We only use Facebook to login. 100%
            privacy guaranteed.
          </Text>
          <View style={styles.signinBtn}>
            <FBLogin
              buttonView={<FBLoginView />}
              ref={fbLogin => {
                this.fbLogin = fbLogin;
              }}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              permissions={["email", "user_friends"]}
              onLogin={this.onLogin}
              onLoginFound={function(e) {
                console.log(e);
              }}
              onLoginNotFound={function(e) {
                console.log(e);
              }}
              onLogout={function(e) {
                console.log(e);
              }}
              onCancel={function(e) {
                console.log(e);
              }}
              onPermissionsMissing={function(e) {
                console.log(e);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserToken: userData => dispatch(setUserToken(userData)),
    userLogin: (email, password) => dispatch(userLogin(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
