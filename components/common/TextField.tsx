import { StyleSheet, TextInput, View } from "react-native";

type TextFieldProps = {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

const styles = StyleSheet.create({
  textinputcontainer: {
    paddingHorizontal: 50,
    paddingVertical: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    fontSize: 16,
    flex: 1,
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
