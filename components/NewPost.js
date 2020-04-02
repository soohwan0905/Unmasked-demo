import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: '',
      contentText: '',
      isSubmitted: false,
      element: {
        key: 0,
        title: '',
        content: '',
      },
    };
  }

  handleCreate(event) {
    var element = {...this.state.element};
    element.key = this.props.postArray.length;
    element.id = this.props.postArray.length;
    element.title = this.state.titleText;
    element.content = this.state.contentText;
    this.setState({element});
    this.props.createPost(element);
    this.props.hideCreate();
  }

  render() {
    return (
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          onChangeText={titleText => this.setState({titleText: titleText})}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          onChangeText={contentText =>
            this.setState({contentText: contentText})
          }
          placeholder="Content"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={e => this.handleCreate(e)}
          title={this.props.placeHolder}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  field: {
    backgroundColor: '#e6e6e6',
    width: 250,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    margin: 5,
    marginLeft: 20,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#a4cfed',
    borderRadius: 5,
    margin: 5,
    marginLeft: 70,
    width: 100,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
