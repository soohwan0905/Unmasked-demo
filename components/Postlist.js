import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Post from './Post.js';

export default class Postlist extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.viewContainer}>
          {this.props.postArray.map(c => (
            <Post
              postArray={this.props.postArray}
              key={c.id}
              id={c.id}
              title={c.title}
              content={c.content}
              editPost={this.props.editPost}
              deletePost={this.props.deletePost}
              updateMode={this.props.updateMode}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    backgroundColor: '#c9c9c9',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  posts: {margin: 5, backgroundColor: 'gray'},
});
