import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: this.props.editTitle,
      contentText: this.props.editContent,
      isSubmitted: false,
      element: {
        key: 0,
        id: 0,
        title: '',
        content: '',
      },
    };
  }

  handleSubmit(event) {
    var element = {...this.state.element};
    element.key = this.props.toEdit;
    element.id = this.props.toEdit;
    element.title = this.state.titleText;
    element.content = this.state.contentText;
    this.setState({element});
    this.props.submitEdit(element);
  }

  render() {
    return (
      <View style={styles.field}>
        <TextInput
          style={styles.input}
          onChangeText={titleText => this.setState({titleText: titleText})}
          value={this.state.titleText}
        />
        <TextInput
          style={styles.input}
          onChangeText={contentText =>
            this.setState({contentText: contentText})
          }
          value={this.state.contentText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={e => this.handleSubmit(e)}>
          <Text>Submit Change</Text>
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
  },
  input: {
    marginLeft: 22,
    marginTop: 5,
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
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 5,
    width: 140,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
