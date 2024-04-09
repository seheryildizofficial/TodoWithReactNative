import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

const Input = ({
  placeholder = 'type something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon style={styles.icon} name={iconName} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Input;
