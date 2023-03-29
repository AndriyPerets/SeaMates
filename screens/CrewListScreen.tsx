import { Button, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation/MainNavigator";

type Props = StackScreenProps<MainStackParamList, 'CrewListScreen'>;



const CrewListScreen = ({ navigation }:Props) => {
  return (
    <View style={styles.container}>
      <Text>CrewListScreen</Text>
      <Button title="AuthScreen"
              onPress={() => navigation.navigate('AuthScreen')} />
    </View>
  );
}
export default CrewListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
