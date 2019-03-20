import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import Button from '../common/Button';
import TextField from '../common/TextField';
//import ErrorView from '../common/ErrorView';
import ShadowStyles from '../../helpers/ShadowStyles';
import TextStyles from '../../helpers/TextStyles';
//import strings from '../../localization';
import { login, actionTypes } from '../../actions/UserActions';
import getUser from '../../selectors/UserSelectors';
import errorsSelector from '../../selectors/ErrorSelectors';
import { isLoadingSelector } from '../../selectors/StatusSelectors';
import styles from './styles';
import logo from './../../assets/logo.png';
import LatestRecipes from '../LatestRecipes';
import Home from '../Home';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    //this.navigateToHomeIfLogged();
  }

  
 
  ButtonClickCheckFunction = () =>{
    // navigate('Login')}
    this.props.navigation.navigate('LatestRecipes');
  
   }

  state = {
    name: '',
    email: '',
    phoneNo: '',
  };

  componentDidUpdate() {
    this.navigateToHomeIfLogged();
    return null;
  }

  navigateToHomeIfLogged = () => {
    if (this.props.user !== null) {
      this.props.navigation.navigate('App');
    }
  }

  passwordChanged = value => this.setState({ password: value });

  emailChanged = value => this.setState({ email: value });

  login = () => this.props.login(this.state.email, this.state.password);

  render() {
    const { isLoading, errors } = this.props;
    return (
      <View style={styles.container}>
      
      <Image source={logo}></Image>
      <Text style={TextStyles.createRecipes}>
          Create Recipes,  
      </Text>
      <Text style={TextStyles.improveText}>
        improve your cooking. 
      </Text>

      <Text style={styles.SocialText}>
        Continue with social 
      </Text>
      
      <TouchableOpacity
          style={styles.ButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }>
            <Text style={styles.BottanTextStyle}> Sign up with Email </Text>
        </TouchableOpacity>
      
        <View style={[styles.formContainer, ShadowStyles.shadow]}>
         
          <TextField
            placeholder='Name'
            onChangeText={this.emailChanged}
            value={this.state.name}
          />
          <TextField
            placeholder='Email'
            onChangeText={this.emailChanged}
            value={this.state.email}
          />
          <TextField
            placeholder='Phone No'
            onChangeText={this.emailChanged}
            value={this.state.phoneNo}
          />
          <View style={styles.formFooter}>
            <Text style={styles.AlreadyRegister}>
              Already registered with email? Login
            </Text>
            <Text style={styles.TextStyle}>
            By signing up, you agree to 
            </Text>
            <Text style={styles.TextStyle}>
            our Terms of Service and Privacy Policy.
            </Text>
          </View>
          
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  user: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  errors: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

Login.defaultProps = {
  user: null,
  errors: [],
};

const mapStateToProps = state => ({
  user: getUser(state),
  isLoading: isLoadingSelector([actionTypes.LOGIN], state),
  errors: errorsSelector([actionTypes.LOGIN], state),
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
