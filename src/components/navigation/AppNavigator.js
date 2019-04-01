import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';
import Profile from '../Profile';
import Home from '../Home';
import Login from '../Login';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LatestRecipes from '../LatestRecipes';
import RestaurantRecipe from '../RestaurantRecipe';
import EditProfile from '../EditProfile';
import RestaurantDetails from '../RestaurantDetails';
import RecipeDetails from '../RecipeDetails';
import Bookmark from '../Bookmark';
import Settings from '../Settings';
import RestaurantSearch from '../RestaurantSearch';
import Restaurant from '../Restaurant';
import RestaurantShopping from '../RestaurantShopping';
import AddRecipe from '../AddRecipe';
import Region from '../Region';

const iconForTab = ({ state }) => {
  switch (state.routeName) {
    case 'Home':
      return homeIcon;
    case 'Profile':
      return settingsIcon;
    default:
      return null;
  }
};

const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
  <Image
    source={icon}
    style={{ tintColor }}
  />
);

// const LatestRecipesStack = createStackNavigator({ LatestRecipes });
// const HomeStack = createStackNavigator({ Home });
// const AppStack = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Profile: ProfileStack,
//   },
//   {
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: Colors.primary,
//       inactiveTintColor: Colors.gray,
//       style: {
//         backgroundColor: Colors.White,
//       },
//     },
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ tintColor }) => (// eslint-disable-line
//         <TabIcon
//           icon={iconForTab(navigation)}
//           tintColor={tintColor}
//         />
//       ),
//     }),
//   },
// );


const AppStack = createStackNavigator(
  {
    Home: Home,
    LatestRecipes: LatestRecipes,
    RestaurantRecipe:RestaurantRecipe,
    EditProfile:EditProfile,
    Profile:Profile,
    RecipeDetails:RecipeDetails,
    RestaurantDetails:RestaurantDetails,
    Bookmark:Bookmark,
    Settings:Settings,
    SignIn:SignIn,
    SignUp:SignUp,
    RestaurantSearch:RestaurantSearch,
    Restaurant:Restaurant,
    RestaurantShopping:RestaurantShopping,
    AddRecipe:AddRecipe,
    Region:Region,
  },
  {
    initialRouteName: 'Home',
  }
);



//  const AppStack = createStackNavigator({ LatestRecipes });

export default AppStack;
