import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Login from './login';
import History from './History';
import Settings from './Settings';

const Stack = createStackNavigator();

const App = () => {
  const [FontSize, setFontSize] = useState(20);

  const changeSize = () => {
    if (FontSize === 20) {
      setFontSize(32);
    } else {
      setFontSize(20);
    }
    return FontSize;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="screen">
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}>
            {props => <Login {...props} />}
          </Stack.Screen>

          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}>
            {props => <Home {...props} FontSize={FontSize} />}
          </Stack.Screen>

          <Stack.Screen
            name="History"
            options={{
              headerShown: false,
            }}
            component={History}
          />

          <Stack.Screen
            name="Settings"
            options={{
              headerShown: false,
            }}>
            {props => (
              <Settings
                {...props}
                changeSize={changeSize}
                FontSize={FontSize}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
