import { ReactNode } from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  buttoncontainer: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10

  },

  text: {
    alignSelf: "flex-start",  
    color: 'white',

    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

type PrimaryButtonProps = {
  children: ReactNode;
  disabled: boolean;
  onPress: () => void;
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({  disabled, children, onPress }) => {
  return (
    <TouchableOpacity disabled={disabled}  style={styles.buttoncontainer} onPress={onPress}>
      <Text  disabled={disabled} style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
