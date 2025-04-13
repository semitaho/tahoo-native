import { StyleSheet, Text, View } from "react-native";

type TitleProps = {
  children?: React.ReactNode;
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

const Title: React.FC<TitleProps> = ( { children} ) => { 
  return (
    <View>
    <Text style={styles.title}>{ children }</Text>
    </View>
  );
};

export default Title;