import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import strings from '../../localization';
import TextStyles from '../../helpers/TextStyles';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';

import Footer from '../common/Footer';
import iconback from './../../assets/icon_back.png';

import profileImage from './../../assets/profile_image.png';
import btnAddPhoto from './../../assets/btn_add_photo.png';


class EditProfile extends Component {

  constructor(props) {
    super(props);
    state = {
        name: '',
        email: '',
        phoneNo: '',
      };
  }

  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  getMessage = () => {
    const { user } = this.props;
    return `${strings.homeMessage} ${user && user.name}`;
  }

  GoToPage = (page) =>{
    this.props.navigation.navigate(page);
  }

  render() {
      return (
            <View style={{flex: 1}}>
                <View style={{ width: '100%' ,backgroundColor:'#f8f8f8', height:50}}>
					<View style={{ flex: 1 ,flexDirection: 'row',justifyContent: 'center'}} >
						<View style={{width: '10%', justifyContent: 'center', paddingLeft:10,}} >
							<TouchableOpacity onPress={()=>this.GoToPage('Profile')}>
								<Image source={iconback} style={{width: 26, height: 15}} ></Image>
							</TouchableOpacity>
						</View>
						<View style={{width: '50%', justifyContent: 'center'}} >
							<Text style={TextStyles.blackHeadingTextHeading}>Edit Profile</Text>
						</View>
                        <View style={{width: '40%',  justifyContent: 'center',alignItems: 'center', }}>
                            <TouchableOpacity style={styles.SaveButtonStyle} activeOpacity = { .5 }>
                                <Text style={styles.whiteTextTitle}> Save </Text>
                            </TouchableOpacity>
                        </View>
					</View>
				</View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Image source={profileImage}></Image>
                    <View style={{paddingTop:20}}>
                        <Image source={btnAddPhoto}></Image>
                    </View>
                    <View style={[styles.formContainer]}>
                        <View style={{alignSelf: 'stretch',marginVertical: 10,}}>
                            <TextInput style = {styles.profileInput}  placeholder = "Name" />
                        </View>
                        <View style={{alignSelf: 'stretch',marginVertical: 10,}}>
                            <TextInput style = {styles.profileInput}  placeholder = "Email" />
                        </View>
                        <View style={{alignSelf: 'stretch',marginVertical: 10,}}>
                            <TextInput style = {styles.profileInput}  placeholder = "Where do you live?" />
                        </View>
                        <View style={{alignSelf: 'stretch',marginVertical: 10,}}>
                            <TextInput style = {styles.profileInput}  placeholder = "About you and love your cooking" />
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
            <Footer ></Footer>
        </View>
        );
    }
}

EditProfile.propTypes = {
    user: PropTypes.object,
};

EditProfile.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);