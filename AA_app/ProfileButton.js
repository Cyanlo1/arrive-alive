
'use strict';

const React = require('react');
const {
  Image,
  StyleSheet,
} = require('react-native');


class ProfileButton extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/arrive-alive.jpg')}
      //  style={styles.profilePic}
      style={{width: 200, height: 200, borderRadius: 30}}
      />
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
