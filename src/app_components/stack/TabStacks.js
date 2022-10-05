import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieScreen from '../screens/MovieScreen';
import SearchScreen from '../screens/SearchScreen';
import TVShowsScreen from '../screens/TVShowScreen';
import { Text } from 'native-base';


const appTab = createMaterialTopTabNavigator();


const TabStacks = () => (

  <appTab.Navigator initialRouteName="MoviesScreen">
    <appTab.Screen
      name="MoviesScreen"
      component={MovieScreen}
      options={
      {
        title: () => <Text>Movies</Text>,
      }
    }
    />

    <appTab.Screen
      name="Search Results"
      component={SearchScreen}
      options={
        {
        title: () => <Text>Search Results</Text>,
        }
    }
    /> 

    <appTab.Screen
      name="TV Shows"
      component={TVShowsScreen}
      options={
        {
        title: () => <Text>TV Shows</Text>,
      }
    }
    /> 
  </appTab.Navigator>
  
);

export default TabStacks;
