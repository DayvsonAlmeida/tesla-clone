import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const primaryType = type === 'primary';
  const backgroundColor = primaryType ? '#171A20CC' : '#FFFFFFA6';
  const textColor = primaryType ? '#FFF' : '#171A20';

  return(
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;