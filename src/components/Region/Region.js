import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';
import Footer from '../common/Footer';
import { CheckBox } from 'react-native-elements';

import iconAbout from './../../assets/icon_about.png';
import iconFeedback from './../../assets/icon_feedback.png';
import iconCommunity from './../../assets/icon_community.png';
import iconTerms from './../../assets/icon_terms.png';
import iconPrivacy from './../../assets/icon_privacy.png';
import iconNotification from './../../assets/icon_notification.png';
import iconProfileEdit from './../../assets/icon_profile_edit.png';
import iconFindFriend from './../../assets/icon_find_friend.png';
import iconback from './../../assets/icon_back.png';

class Region extends Component {

	constructor(props) {
		super(props);
		this.state = {
			switchValue: false,
			checked1: true
		 }
	}

	static navigationOptions = {
		header: null,
		tabBarVisible: false,
	};

	state = {
		search: '',
	  };

	

	getMessage = () => {
		const { user } = this.props;
		return `${strings.homeMessage} ${user && user.name}`;
	}

	GoToPage = (page) =>{
        this.props.navigation.navigate(page);
    }

	toggleSwitch = (value) => {
		this.setState({switchValue: value})
	}

	updateSearch = search => {
		this.setState({ search });
	  };
	  onEnd = () =>{
		this.props.navigation.navigate('RestaurantSearch');
	  }

	render() {
		
		const { search } = this.state;
		const MoreIcon = require("./../../assets/option_menu.png");
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
							<Text style={TextStyles.blackHeadingTextHeading}>Find your cooking community</Text>
						</View>
					</View>
				</View>
				<ScrollView contentContainerStyle={styles.contentContainer}>
					<View  style={{ margin: 10}}>
						<View style={{width: '100%', justifyContent: 'center'}} >
							<Searchbar style = {styles.searchInput} placeholder="Search Language or region" onChangeText={this.updateSearch} value={search} />
						</View>
						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							containerStyle={styles.checkContainer1}
							title='English'
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							checked={this.state.checked1}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>

						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							containerStyle={styles.checkContainer}
							title='United States'
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							iconRight
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>

						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='United Kingdom'
							containerStyle={styles.checkContainer}
							iconRight
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>

						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='South Africa'
							containerStyle={styles.checkContainer}
							iconRight
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>
						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='India'
							containerStyle={styles.checkContainer}
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							iconRight
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>
						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='Australia'
							containerStyle={styles.checkContainer}
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							iconRight
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>
						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='Nigeria'
							containerStyle={styles.checkContainer}
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							iconRight
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>
						<View style={{width: '100%', justifyContent: 'center', paddingTop:10}} >
						<CheckBox
							title='Kenya'
							containerStyle={styles.checkContainer}
							right={true}
							checkedIcon='dot-circle-o'
  							uncheckedIcon='circle-o'
							iconRight
							checked={this.state.checked}
							onPress={() => this.GoToPage('Login')}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
			);
		}
	}

	Region.propTypes = {
		user: PropTypes.object,
	};

	Region.defaultProps = {
		user: null,
	};

	const mapStateToProps = state => ({
		user: getUser(state),
	});

	const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Region);