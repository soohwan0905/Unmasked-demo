import React, {Component, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

export default function Postfunction(props) {
  const first = props.first;
  const middle = props.middle;
  const last = props.last;

  function getFullName(firstName, secondName, lastName) {
    return firstName + ' ' + secondName + ' ' + lastName;
  }

  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState('');

  return (
    <View style={{height: 100, borderColor: 'gray', borderWidth: 1}}>
      <Text>Hello, I'm {getFullName(first, middle, last)}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
}
