import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.props.updateMode(0);
    this.props.editPost(this.state.id);
  }

  handleDelete() {
    var copyArray = this.props.postArray;
    copyArray.splice(this.state.id, 1);
    for (var i = 0; i < copyArray.length; i++) {
      copyArray[i].id = i;
    }
    this.props.deletePost(copyArray, this.state.id);
  }

  render() {
    return (
      <View style={styles.post}>
        <Text style={styles.title} numberOfLines={1}>
          {this.props.title}
        </Text>
        <Text style={styles.content} numberOfLines={2}>
          {this.props.content}
        </Text>
        <TouchableOpacity onPress={() => this.handleDelete()}>
          <FontAwesomeIcon name="trash" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleEdit()}>
          <FontAwesomeIcon name="pencil-square-o" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  post: {
    margin: 10,
    width: 250,
    height: 80,
    padding: 5,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#e6e6e6',
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    width: 200,
  },
  content: {
    fontSize: 17,
    width: 200,
    height: 40,
  },
});
