import React from 'react'
import { View, StatusBar, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { setUserToken } from '../../actions/auth'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import FBLoginView from '../../components/FBLoginView';

import { GlobalStyle, Colors } from '../../themes'
import { BG_GRAD_ONBOARDING } from '../../themes/images'
import styles from './onboarding.style'

class Onboarding extends React.Component {
  constructor(props) {
    super(props)
  }
  onLogin = (e) => {
    const {
      credentials: {
        token,
        tokenExpirationDate,
        userId
      },
      profile: {
        email,
        gender
      }
    } = e;
    this.props.setUserToken({token, email, tokenExpirationDate, userId, gender})
  }
  
  render() {
    return (
      <View style={GlobalStyle.fullPageContainer}>
        <StatusBar backgroundColor="#4000002f" translucent />
        <Image
          source={BG_GRAD_ONBOARDING}
          style={styles.topBackground}
          resizeMode="cover"
        />
        <View style={GlobalStyle.pageContainer}>
          <Text style={styles.title}>Offer money for a date</Text>
          <View style={styles.signinBtn}>
            <FBLogin
              buttonView={<FBLoginView />}
              ref={(fbLogin) => { this.fbLogin = fbLogin }}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              permissions={["email","user_friends"]}
              onLogin={this.onLogin}
              onLoginFound={function(e){console.log(e)}}
              onLoginNotFound={function(e){console.log(e)}}
              onLogout={function(e){console.log(e)}}
              onCancel={function(e){console.log(e)}}
              onPermissionsMissing={function(e){console.log(e)}}
            />
          </View>
          
        </View>
      </View>
    )
  }
}


function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUserToken: (userData) => dispatch(setUserToken(userData)),
    userLogin: (email, password) => dispatch(userLogin(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding)