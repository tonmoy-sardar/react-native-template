import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';
import ShadowStyles from '../../helpers/ShadowStyles';
import backgroundImage from './../../assets/home.png';
import logoHome from './../../assets/logo_home.png';
import Login from '../Login';
import recipeImage from './../../assets/recipe1.png';

class LatestRecipes extends Component {
  
  // static navigationOptions = {
  //   header: null,
  // };

  constructor(props) {
    super(props);
   
  }
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

 

  getMessage = () => {
    const { user } = this.props;
    return `${strings.homeMessage} ${user && user.name}`;
  }

  ButtonClickCheckFunction = () =>{
 
   // navigate('Login')}
   this.props.navigation.navigate('Login');
 
  }

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.contentContainer}>
      // <View style={styles.container}>
      //   <Text style={TextStyles.lightTitle}>
      //    Test edfdsf
      //   </Text>
      // </View>
      // </ScrollView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity 
                style={{ flex: 1 }} 
                underlayColor='white'
            >
            <View style={[styles.card, ShadowStyles.shadow]} >
            <View style={{ width: '100%' ,borderTopRightRadius:10,borderTopLeftRadius:10, height:50, backgroundColor:'#d11c20', paddingLeft:10, paddingRight:10}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: '15%', height: 50, backgroundColor: 'powderblue',justifyContent: 'center'}} >
                  <Avatar rounded icon={{ name: 'home' }}  />
                  </View>
                  <View style={{width: '50%', height: 50, backgroundColor: 'skyblue',justifyContent: 'center'}}>
                  <Text style={TextStyles.improveText}>
                    Jessica Louren  
                  </Text>
            
                  </View>
                  <View style={{width: '25%', height: 50, backgroundColor: 'steelblue'}} />
                  <View style={{width: '10%', height: 50, backgroundColor: 'powderblue'}} />
                </View>
            </View>
            <Image source={recipeImage} style={{width: '100%', height: 200}} resizeMode="cover"></Image>
            <Text style={TextStyles.improveText}>
        improve your cooking.  
      </Text>
            
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
                style={{ flex: 1 }} 
                underlayColor='white'
            >
            <View style={[styles.card, ShadowStyles.shadow]} >
            <ImageBackground source={recipeImage} style={{width: '100%', height: 250,  borderRadius:10}} resizeMode="cover"></ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
                style={{ flex: 1 }} 
                underlayColor='white'
            >
            <View style={[styles.card, ShadowStyles.shadow]} >
            <ImageBackground source={recipeImage} style={{width: '100%', height: 250,  borderRadius:10}} resizeMode="cover"></ImageBackground>
          </View>
        </TouchableOpacity>
        </ScrollView>
      
    );
  }
}




LatestRecipes.propTypes = {
  user: PropTypes.object,
};

LatestRecipes.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = () => ({});




export default connect(mapStateToProps, mapDispatchToProps)(LatestRecipes);
