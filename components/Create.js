/* eslint-disable eqeqeq */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import NewPost from './NewPost.js';
import EditPost from './EditPost.js';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.showCreate = this.showCreate.bind(this);
    this.hideCreate = this.hideCreate.bind(this);
  }

  showCreate(event) {
    this.props.updateMode(0);
  }

  hideCreate(event) {
    this.props.updateMode(1);
  }

  render() {
    //if default mode
    if (this.props.mode == 0) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={e => this.showCreate(e)}>
          <Text style={styles.buttonText}>Create Post</Text>
        </TouchableOpacity>
      );
    }
    // // if create mode
    else if (this.props.mode == 1) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={e => this.hideCreate(e)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <NewPost
            style={styles.input}
            createPost={this.props.createPost}
            hideCreate={this.hideCreate}
            postArray={this.props.postArray}
            placeHolder="Submit"
          />
        </View>
      );
    }
    //if edit mode
    else if (this.props.mode == 2) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={e => this.hideCreate(e)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <EditPost
            style={styles.button}
            postArray={this.props.postArray}
            toEdit={this.props.toEdit}
            editContent={this.props.editContent}
            editTitle={this.props.editTitle}
            submitEdit={this.props.submitEdit}
          />
        </View>
      );
    }
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
