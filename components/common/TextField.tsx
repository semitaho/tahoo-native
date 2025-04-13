import { StyleSheet, TextInput, View } from "react-native";

type TextFieldProps = {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

const styles = StyleSheet.create({
  textinputcontainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    fontSize: 16,
    minWidth: 100,
    minHeight: 30,

    color: "#333",    
    backgroundColor: "#fff"
  },
});

const TextField: React.FC<TextFieldProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.textinputcontainer}>
      <TextInput
        style={styles.textinput}
        onChangeText={onChangeText}
        focusable={true}
        placeholder={placeholder}
        value={value}
      ></TextInput>
    </View>
  );
};

export default TextField;
