import React from 'react'
import { TouchableOpacity, Button, View, Text, Image, TextInput, Alert, Switch } from 'react-native'
import { connect } from 'react-redux'
import { userLogin } from '../../actions'

import { GlobalStyle, Colors } from '../../themes'
import styles from './login.style'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  login () {
  }
  
  render() {
    return (
      <View style={[GlobalStyle.pageContainer, style={ backgroundColor: '#F0F0F0'}]}>
        <View style={styles.topBar}>
          {/* <Image source={Images.bg_login} style={styles.topBackground} />
          <Image source={Images.logo} style={styles.logo} /> */}
        </View>

        <View style={styles.mainContent}>
          <TouchableOpacity style={styles.button} label='Log In' onPress={() => this.login()}/>
          <Text style={styles.textTerms}>
            By registering. I have read and agreed to the {"\n"} https://PMH/terms and the https://PMH/privacy
          </Text>
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
    userLogin: (email, password) => dispatch(userLogin(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)