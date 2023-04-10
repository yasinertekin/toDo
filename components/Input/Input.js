import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "./Input.style";

const Input = ({ placeholder, onChangeText, value, onPress, text }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button, // always apply the default button style
          value !== "" && styles.secondbutton, // apply the active button style if the input value is not empty
        ]}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
