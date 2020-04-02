import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class DeleteAll extends Component {
  handleDelete() {
    this.props.deleteAll();
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleDelete()}
        title="Delete All Posts">
        <Text style={styles.buttonText}>Delete All</Text>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
