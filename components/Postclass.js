import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

export default class Postclass extends Component {
  // state = {isHungry: true};
  state = {
    name: this.props.name,
    text: '',
  };

  render() {
    return (
      <View style={{height: 100, borderColor: 'gray', borderWidth: 1}}>
        {/* <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.setState({isHungry: false});
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? 'Pour me some milk, please!' : 'Thank you!'
          }
        /> */}
        <Text>I am {this.state.name}</Text>
        {/* <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.setState({text: 'Hahs'})}
          defaultValue={this.state.text}
        /> */}
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({input: text})}
        />
        <Button
          onPress={() => {
            this.setState({name: 'HAHA'});
          }}
          title={'Press Me'}></Button>
      </View>
    );
  }
}
