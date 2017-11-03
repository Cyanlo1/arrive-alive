
'use strict';

const React = require('react');
const {
  Image,
  StyleSheet,
  TouchableOpacity,
} = require('react-native');



class ProfileButton extends React.Component {
  _onPressButton() {
   
  }
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
     
     <Image
        source={require('./assets/arrive-alive.jpg')}
      //  style={styles.profilePic}
      style={{width: 200, height: 200, borderRadius: 30}}
      />
      </TouchableOpacity>
    );
  }
}



var styles = StyleSheet.create({
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
});

module.exports = ProfileButton;
