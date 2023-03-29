import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import CrewListScreen from '../screens/CrewListScreen';

export type MainStackParamList = {
  AuthScreen: undefined;
  CrewListScreen: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="AuthScreen">
      <MainStack.Screen
        name="AuthScreen"
        options={{headerShown: false}}
        component={AuthScreen}
      />
      <MainStack.Screen
        name="CrewListScreen"
        options={{headerTransparent: true}}
        component={CrewListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
