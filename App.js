/* eslint-disable eqeqeq */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Postlist from './components/Postlist.js';
import Create from './components/Create.js';
import DeleteAll from './components/DeleteAll.js';
import {postData} from './data.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: postData,
      isEditing: false,
      toEdit: 0,
      editTitle: '',
      editContent: '',
      mode: 0,
    };
    this.createPost = this.createPost.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updateMode = this.updateMode.bind(this);
  }

  createPost(element) {
    this.setState({postArray: this.state.postArray.concat([element])});
  }

  //receive appropriate index, title, and content; set toEdit to true to start editing mode
  editPost(id) {
    this.setState({mode: 2}); //convert to edit mode
    this.setState({toEdit: id});
    this.setState({editContent: this.state.postArray[id].content});
    this.setState({editTitle: this.state.postArray[id].title});
  }

  //function call from submit button of the edit field. Update array with new content
  submitEdit(element) {
    var copyArray = this.state.postArray;
    copyArray.splice(element.id, 1, element);
    this.setState({postArray: copyArray});
    this.setState({mode: 0}); //convert to default after submission
  }

  //receive copied and spliced array and update the array
  deletePost(copyArray, id) {
    this.setState({mode: 0});
    this.setState({postArray: copyArray});
  }

  //update the array with an empty array
  deleteAll() {
    this.setState({mode: 0});
    this.setState({postArray: []});
  }

  updateMode(modeChange) {
    if (modeChange == 0) {
      this.setState({mode: 1});
    } else if (modeChange == 1) {
      this.setState({mode: 0});
    }
  }

  render() {
    if (this.state.postArray.length == 0) {
      return (
        <View style={styles.main}>
          <Text style={styles.titleText}>Demo</Text>
          <Text style={styles.noPost}>No Posts</Text>
          <Create
            mode={this.state.mode}
            updateMode={this.updateMode}
            isEditing={this.state.isEditing}
            createPost={this.createPost}
            postArray={this.state.postArray}
            toEdit={this.state.toEdit}
            editContent={this.state.editContent}
            editTitle={this.state.editTitle}
            submitEdit={this.submitEdit}
          />
        </View>
      );
    }
    return (
      <View style={styles.main}>
        <Text style={styles.titleText}>Demo</Text>
        <Create
          mode={this.state.mode}
          updateMode={this.updateMode}
          isEditing={this.state.isEditing}
          createPost={this.createPost}
          postArray={this.state.postArray}
          toEdit={this.state.toEdit}
          editContent={this.state.editContent}
          editTitle={this.state.editTitle}
          submitEdit={this.submitEdit}
        />
        <Postlist
          postArray={this.state.postArray}
          editPost={this.editPost}
          deletePost={this.deletePost}
          updateMode={this.updateMode}
        />
        <DeleteAll deleteAll={this.deleteAll} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#a4cfed',
  },
  titleText: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 50,
    height: 130,
    paddingTop: 60,
  },
  noPost: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
