import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';
import ShadowStyles from '../../helpers/ShadowStyles';
import Footer from '../common/Footer';

import recipeImage from './../../assets/recipe1.png';
import recipe2Image from './../../assets/recipe2.png';
import OptionsMenu from "react-native-options-menu";

import iconBookmark from './../../assets/icon_bookmark.png';
import iconLike from './../../assets/icon_like.png';
import iconComment from './../../assets/icon_comment.png';
import searchLogo from './../../assets/search_logo.png';

class LatestRecipes extends Component {

  constructor(props) {
    super(props);
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

  GoDetailspage = () =>{
    this.props.navigation.navigate('RecipeDetails');
  }

  DetailsView = () =>{
    console.log("Details")
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
                <View style={{ width: '100%' ,backgroundColor:'#f8f8f8', height:50,paddingLeft:10, paddingRight:10,}}>
                    <View style={{ flex: 1 ,flexDirection: 'row',justifyContent: 'center'}} >
                        <View style={{width: '15%', justifyContent: 'center'}} >
                            <Image source={searchLogo} style={{width: 38, height: 40}} ></Image>
                        </View>
                        <View style={{width: '85%', justifyContent: 'center'}} >
                            <Searchbar style = {styles.searchInput} placeholder="Ingredients name,dish" onChangeText={this.updateSearch} value={search} onEndEditing={this.onEnd}/>
                            {/* <TextInput style = {styles.searchInput}  placeholder = "Ingredients name,dish" /> */}
                        </View>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={{ flex: 1 }} underlayColor='white'>
                        
                        <Text style={TextStyles.blackTextHeading}>
                        Latest Recipes 
                        </Text>
                        <View style={[styles.card, ShadowStyles.shadow]} >
                            <View style={{ width: '100%' ,borderTopRightRadius:10,borderTopLeftRadius:10, height:50, backgroundColor:'#d11c20', paddingLeft:10, paddingRight:10}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '15%', height: 50, justifyContent: 'center'}} >
                                        <Avatar rounded icon={{ name: 'user',type: 'font-awesome' }}  />
                                    </View>
                                    <View style={{width: '55%', height: 50, justifyContent: 'center'}}>
                                        <Text style={TextStyles.whiteText}>Jessica Louren</Text>
                                    </View>
                                    <View style={{width: '20%', height: 50, justifyContent: 'center'}} >
                                        <TouchableOpacity style={styles.FollowButtonStyle} activeOpacity = { .5 }>
                                            <Text style={TextStyles.redText}> Follow </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{width: '10%', height: 50,justifyContent: 'center'}} >
                                        <OptionsMenu button={MoreIcon} buttonStyle={{ width: 10, height: 19,marginLeft: 15, resizeMode: "contain" }} destructiveIndex={1} options={["Details"]} actions={[this.DetailsView]}/>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity = { .5 } style={{width: '100%'}} onPress={()=>this.GoDetailspage()}>
                                <View style={{height: 200 }}>
                                    <Image source={recipeImage} style={{width: '100%', height: 200}} resizeMode="cover"></Image>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: '100%',paddingLeft:10, paddingRight:10, height:50, backgroundColor: 'rgba(24, 24, 24, 0.5)',position:'absolute',top:200}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '70%', height: 50, justifyContent: 'center'}}>
                                        <Image source={iconBookmark} style={{width: 44, height: 30}} ></Image>
                                    </View>
                                    <View style={{width: '15%', height: 50, justifyContent: 'center'}} >
                                        <Image source={iconLike} style={{width: 32, height: 30}} ></Image>
                                    </View>
                                    <View style={{width: '15%', height: 50,justifyContent: 'center'}} >
                                        <Image source={iconComment} style={{width: 34, height: 30}} ></Image>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '100%',paddingLeft:10, paddingRight:10}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '80%',justifyContent: 'center'}}>
                                        <Text style={TextStyles.redTextTitle}> Beef Steak</Text>
                                        <Text style={TextStyles.grayText}>Jessica Louren  # Lunch</Text>
                                    </View>
                                    <View style={{width: '20%', height: 50, justifyContent: 'center'}} >
                                        <Text style={TextStyles.grayText}>3 Min Ago</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.card, ShadowStyles.shadow]} >
                            <View style={{ width: '100%' ,borderTopRightRadius:10,borderTopLeftRadius:10, height:50, backgroundColor:'#d11c20', paddingLeft:10, paddingRight:10}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '15%', height: 50, justifyContent: 'center'}} >
                                        <Avatar rounded icon={{ name: 'user',type: 'font-awesome' }}  />
                                    </View>
                                    <View style={{width: '55%', height: 50, justifyContent: 'center'}}>
                                        <Text style={TextStyles.whiteText}>Japanese Restaurant</Text>
                                    </View>
                                    <View style={{width: '20%', height: 50, justifyContent: 'center'}} >
                                        <TouchableOpacity style={styles.FollowButtonStyle} activeOpacity = { .5 }>
                                            <Text style={TextStyles.redText}> Follow </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{width: '10%', height: 50,justifyContent: 'center'}} >
                                        <OptionsMenu button={MoreIcon} buttonStyle={{ width: 10, height: 19,marginLeft: 15, resizeMode: "contain" }} destructiveIndex={1} options={["Details"]} actions={[this.DetailsView]}/>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity = { .5 } style={{width: '100%'}} onPress={()=>this.GoDetailspage()}>
                                <View style={{height: 200 }}>
                                    <Image source={recipe2Image} style={{width: '100%', height: 200}} resizeMode="cover"></Image>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: '100%',paddingLeft:10, paddingRight:10, height:50, backgroundColor: 'rgba(24, 24, 24, 0.5)',position:'absolute',top:200}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '70%', height: 50, justifyContent: 'center'}}>
                                        <Image source={iconBookmark} style={{width: 44, height: 30}} ></Image>
                                    </View>
                                    <View style={{width: '15%', height: 50, justifyContent: 'center'}} >
                                        <Image source={iconLike} style={{width: 32, height: 30}} ></Image>
                                    </View>
                                    <View style={{width: '15%', height: 50,justifyContent: 'center'}} >
                                        <Image source={iconComment} style={{width: 34, height: 30}} ></Image>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '100%',paddingLeft:10, paddingRight:10}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{width: '80%',justifyContent: 'center'}}>
                                        <Text style={TextStyles.redTextTitle}>Beef Steak</Text>
                                        <Text style={TextStyles.grayText}>Japanese Restaurant  # Lunch</Text>
                                    </View>
                                    <View style={{width: '20%', height: 50, justifyContent: 'center'}} >
                                        <Text style={TextStyles.grayText}>3 Min Ago</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Footer ></Footer>
            </View>
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