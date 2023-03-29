import { View, Text, StyleSheet, Button } from 'react-native';
import { MainStackParamList } from '../navigation/MainNavigator';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<MainStackParamList, 'AuthScreen'>;

const AuthScreen = ({ navigation }:Props) => {
  console.log('AuthScreen is rendering');
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
      <Button title="CrewListScreen"
              onPress={() => navigation.navigate('CrewListScreen')} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

