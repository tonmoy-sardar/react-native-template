import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import ShadowStyles from '../../helpers/ShadowStyles';
import TextStyles from '../../helpers/TextStyles';
import getUser from '../../selectors/UserSelectors';

import styles from './styles';
import logo from './../../assets/logo.png';
import iconback from './../../assets/icon_back.png';

class SignIn extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        state = {
            name: '',
            email: '',
            phoneNo: '',
        };
    }

    GoToPage = (page) =>{
        this.props.navigation.navigate(page);
    }

    login = () => this.props.login(this.state.email, this.state.password);

    render() {
        return (
                <View style={{flex: 1}}>
                    <View style={{ width: '100%' ,backgroundColor:'#f8f8f8', height:50}}>
                        <View style={{ flex: 1 ,flexDirection: 'row',justifyContent: 'center'}} >
                            <View style={{width: '10%', justifyContent: 'center', paddingLeft:10,}} >
                                <TouchableOpacity onPress={()=>this.GoToPage('Login')}>
                                    <Image source={iconback} style={{width: 26, height: 15}} ></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '90%', justifyContent: 'center'}} >
                                <Text style={TextStyles.blackHeadingTextHeading}>Sign Up</Text>
                            </View>
                            
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.container}>
                            <Image source={logo}></Image>
                            <Text style={TextStyles.createRecipes}>Create Recipes,</Text>
                            <Text style={TextStyles.improveText}>improve your cooking.</Text>
                            
                            <View style={[styles.formContainer, ShadowStyles.shadow]}>
                                <TextField placeholder='Name' />
                                <TextField placeholder='Email' />
                                <TextField placeholder='Phone No'/>
                                <View style={{width: '100%', paddingTop:20,  justifyContent: 'center',alignItems: 'center' }}>
                                <TouchableOpacity style={styles.SaveButtonStyle} activeOpacity = { .5 } onPress={()=>this.GoToPage('LatestRecipes')}>
                                    <Text style={styles.whiteTextTitle}> Sign Up </Text>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.formFooter}>
                                    <TouchableOpacity onPress={()=>this.GoToPage('SignIn')}>
                                        <Text style={styles.AlreadyRegister}>Already registered with email? Login</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.TextStyle}>By signing up, you agree to</Text>
                                    <Text style={styles.TextStyle}>our Terms of Service and Privacy Policy.</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                );
            }
        }

SignIn.propTypes = {
    user: PropTypes.object,
};

SignIn.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);