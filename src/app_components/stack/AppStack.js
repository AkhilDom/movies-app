import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailScreen from '../screens/MovieDetail';
import TabStacks from './TabStacks';
import {Text} from 'native-base';

const appStack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <appStack.Navigator>
      <appStack.Screen
        name="Movies"
        component={TabStacks}
        options={
          {
          title: 'Movies App',
          headerStyle: {
            backgroundColor: '#3a5167',
          },
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerTitleAlign: 'center',
        }
      }
      />

    <appStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route }) => ({
          id: route.params.id,

          headerTitle: () => (
            <Text fontSize={16} color="blue.400" textAlign="left">
              Back to List
              <Text fontSize={18} color="black" >
                {' '}
                {route.params.title}
              </Text>
            </Text>
          ),
        })}
      />
    </appStack.Navigator>
  </NavigationContainer>
);

export default AppStack;
