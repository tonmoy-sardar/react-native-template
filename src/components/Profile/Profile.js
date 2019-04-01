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
	TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';
import Footer from '../common/Footer';

import profileImage from './../../assets/profile_image.png';

import iconSetting from './../../assets/icon_setting.png';
import iconChart from './../../assets/icon_chart.png';
import iconCart from './../../assets/icon_cart.png';
import iconShare from './../../assets/icon_share.png';
import iconSearch from './../../assets/icon_serach.png';

class Profile extends Component {

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

		const MoreIcon = require("./../../assets/option_menu.png");
		return (
			<View style={{flex: 1}}>
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<View style={styles.container}>
						<Image source={profileImage}></Image>
						<View style={{paddingTop:20}}>
							<Text style={TextStyles.redTextTitle}>Jessica Louren</Text>
						</View>
						<View style={{ width: '70%'}}>
							<View style={{flex: 1, flexDirection: 'row', paddingTop:20,}}>
								<View style={{width: '50%',  justifyContent: 'center',alignItems: 'center',}}>
									<Text style={TextStyles.blackTextTitle}>0</Text>
								</View>
								<View style={{width: '50%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>0</Text>
								</View>
							</View>
							<View style={{flex: 1, flexDirection: 'row',paddingTop:5,}}>
								<View style={{width: '50%', justifyContent: 'center',alignItems: 'center',}}>
									<Text style={TextStyles.blackTextTitle}>Followers</Text>
								</View>
								<View style={{width: '50%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>Following</Text>
								</View>
							</View>
							<View style={{flex: 1, flexDirection: 'row',paddingTop:15,}}>
								<View style={{width: '25%',  justifyContent: 'center',alignItems: 'center',}}>
									<Image source={iconSearch} style={{width: 27, height: 28}} ></Image>
								</View>
								<View style={{width: '25%',  justifyContent: 'center',alignItems: 'center',}} >
									<Image source={iconChart} style={{width: 31, height: 28}} ></Image>
								</View>
								<View style={{width: '25%',  justifyContent: 'center',alignItems: 'center',}} >
									<Image source={iconCart} style={{width: 35, height: 28}} ></Image>
								</View>
								<View style={{width: '25%', justifyContent: 'center',alignItems: 'center',}} >
									<Image source={iconShare} style={{width: 26, height: 28}} ></Image>
								</View>
							</View>
						</View>
						<View style={{ width: '90%'}}>
							<View style={{flex: 1, flexDirection: 'row', paddingTop:10,}}>
								<View style={{width: '82%',  justifyContent: 'center',alignItems: 'center',}}>
									<TouchableOpacity style={styles.ContinueButtonStyle} activeOpacity = { .5 }onPress={()=>this.GoToPage('EditProfile')}>
										<Text style={styles.TextStyle}> Edit Profile </Text>
									</TouchableOpacity>
								</View>
								<View style={{width: '18%',  justifyContent: 'center',alignItems: 'center', paddingTop:20,}} >
									<TouchableOpacity  activeOpacity = { .5 } onPress={()=>this.GoToPage('Settings')}>
										<Image source={iconSetting} style={{width: 44, height: 44}} ></Image>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View style={{ width: '90%'}}>
							<View style={{width: '100%',  justifyContent: 'center',alignItems: 'center',}}>
								<TouchableOpacity style={styles.otherButtonStyle} activeOpacity = { .5 }>
									<Text style={styles.blackTextTitle}> Connections </Text>
								</TouchableOpacity>
							</View>
							<View style={{width: '100%',  justifyContent: 'center',alignItems: 'center',}}>
								<TouchableOpacity style={styles.otherButtonStyle} activeOpacity = { .5 }>
									<Text style={styles.blackTextTitle}> Cooksnaps </Text>
								</TouchableOpacity>
							</View>
							<View style={{flex: 1, flexDirection: 'row', paddingTop:20,}}>
								<View style={{width: '33%',  justifyContent: 'center',alignItems: 'center',}}>
									<Text style={TextStyles.blackTextTitle}>0</Text>
								</View>
								<View style={{width: '33%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>0</Text>
								</View>
								<View style={{width: '33%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>0</Text>
								</View>
							</View>
							<View style={{flex: 1, flexDirection: 'row',paddingTop:5,}}>
								<View style={{width: '33%', justifyContent: 'center',alignItems: 'center',}}>
									<Text style={TextStyles.blackTextTitle}>Private</Text>
								</View>
								<View style={{width: '33%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>Published</Text>
								</View>
								<View style={{width: '33%',  justifyContent: 'center',alignItems: 'center',}} >
									<Text style={TextStyles.blackTextTitle}>Cooksnap</Text>
								</View>
							</View>
							<View style={{width: '100%',  justifyContent: 'center',alignItems: 'center',}}>
								<TouchableOpacity style={styles.ContinueButtonStyle} activeOpacity = { .5 }>
									<Text style={styles.TextStyle}> Add Recipes </Text>
								</TouchableOpacity>
							</View>
							<View style={{width: '100%',  justifyContent: 'center',alignItems: 'center',}}>
								<TouchableOpacity style={styles.ContinueButtonStyle} activeOpacity = { .5 }>
									<Text style={styles.TextStyle}> Add Restaurent </Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
				<Footer ></Footer>
			</View>
			);
		}
	}

	Profile.propTypes = {
		user: PropTypes.object,
	};

	Profile.defaultProps = {
		user: null,
	};

	const mapStateToProps = state => ({
		user: getUser(state),
	});

	const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);