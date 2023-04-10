import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./JobCard.style";

const Jobcard = ({ item, removeTodo, longPressTodo }) => {
  return (
    <TouchableOpacity
      style={item.deleted ? styles.secondCard : styles.card}
      onPress={() => removeTodo(item.id)}
      onLongPress={() => longPressTodo(item.id)}>
      <Text
        style={
          item.deleted // check if the 'deleted' field is true
            ? styles.secondCardText // apply this style if true
            : styles.cardText // apply an empty style if false
        }>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Jobcard;
