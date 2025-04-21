import { ReactNode } from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  buttoncontainer: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 7,
    flexDirection: 'row',
    marginTop: 10,
    width: '80%',


  },

  buttoncontainerdisabled: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 7,
    marginTop: 10,
    width: '80%',

  },

  text: {
    color: 'white',

    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

type PrimaryButtonProps = {
  children: ReactNode;
  disabled: boolean;
  onPress: () => void;
};
const PrimaryButton: React.FC<PrimaryButtonProps> = ({  disabled, children, onPress }) => {
  return (
    <TouchableOpacity disabled={disabled}  style={disabled ? styles.buttoncontainerdisabled : styles.buttoncontainer} onPress={onPress}>
      <Text  disabled={disabled} style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
