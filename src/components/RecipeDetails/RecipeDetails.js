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
import Slideshow from 'react-native-slideshow';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';
import styles from './styles';
import OptionsMenu from "react-native-options-menu";
import Footer from '../common/Footer';

import iconBookmark from './../../assets/icon_bookmark.png';
import iconLike from './../../assets/icon_like.png';
import iconComment from './../../assets/icon_comment.png';
import btnAddCart from './../../assets/btn_add_to_cart.png';

class RecipeDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                url: 'http://166.62.54.122/addubby/recipe1.png',
                }, {

                url: 'http://166.62.54.122/addubby/recipe2.png',
                },
            ],
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

    DetailsView = () =>{
    console.log("Details")
    }

    componentWillMount() {
        this.setState({
        interval: setInterval(() => {
            this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
            }, 4000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const MoreIcon = require("./../../assets/option_menu.png");
        return (
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Slideshow dataSource={this.state.dataSource} position={this.state.position} onPositionChanged={position => this.setState({ position })} />
                    <View style={{ width: '100%',paddingLeft:10, paddingRight:10, height:50, backgroundColor: 'rgba(24, 24, 24, 0.5)',position:'absolute',top:0}}>
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
                </View>
                <View style={{ width: '100%',paddingLeft:30, paddingRight:30, paddingTop:20}}>
                    <View style={{ paddingBottom:5}}>
                        <Text style={TextStyles.redTextTitle}> French Onion Chicken Meatballs</Text>
                    </View>
                    <Text style={styles.grayText}>We think everything can be improved by adding meatballs to it. Even French onion soup. It turns an appetizer soup into a full meal and don't worry, we added even more cheese to it. Gruyère goes into the meatballs and then the whole thing gets topped with more before serving. And of course there's plenty of caramelized onions.</Text>
                </View>
                
                <View style={{ width: '100%',paddingLeft:10, paddingRight:10,}}>
                    <View style={{ paddingLeft:20,paddingTop:30}}>
                        <Text style={TextStyles.redTextTitle}>INGREDIENTS</Text>
                    </View>
                    <View style={[styles.cardContainer ]}>
                        <View style={{ paddingBottom:5}}>
                            <Text style={TextStyles.blackTextTitle}>FOR THE MEATBALLS</Text>
                        </View>
                        <View style={{ paddingBottom:15}}>
                            <Text style={styles.grayText}>{'2 tbsp. extra-virgin olive oil \n1 lb. ground chicken \n1/2 c. shredded Gruyère \n1/4 c. bread crumbs \n2 tbsp. freshly chopped parsley \n1 large egg, beaten \n2 cloves garlic, minced \n1 tsp. kosher salt \nFreshly ground black pepper'}</Text>
                        </View>
                        <View style={{ paddingBottom:5}}>
                            <Text style={TextStyles.blackTextTitle}>FOR THE MEATBALLS</Text>
                        </View>
                        <Text style={styles.grayText}>{'4 tbsp. butter \n2 large onions, thinly sliced \n2 cloves garlic, minced \n2 c. low-sodium beef broth \n2 tsp. freshly chopped thyme, plus more for garnish  \nKosher salt \n2 cloves garlic, minced \nFreshly ground black pepper \n1 1/2 c. shredded Gruyère'}</Text>
                    </View>
                </View>
                <View style={{ width: '100%',paddingLeft:10, paddingRight:10, paddingTop:20}}>
                    <View style={{ paddingLeft:20}}>
                        <Text style={TextStyles.redTextTitle}>Steps</Text>
                    </View>
                    <View style={[styles.stepContainer]}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '12%', height:20, justifyContent: 'center', paddingTop:10}}>
                                <View  style={{width: '75%', paddingTop:8,paddingBottom:8,  justifyContent: 'center',backgroundColor:'#d11c21',borderTopRightRadius:3,borderBottomRightRadius:3,  alignItems: 'center', }}>
                                    <Text style={styles.TextWhiteStyle}>1</Text>
                                </View>
                            </View>
                            <View style={{width: '88%', justifyContent: 'center'}}>
                                <Text style={styles.grayText}>Preheat oven to 425°. Line a large baking sheet with foil and rub with oil. In a large bowl, combine ground chicken, Gruyère, bread crumbs, parsley, egg, and garlic. Season with salt and pepper. Form into 16 meatballs, then place on prepared baking sheet and bake until golden and cooked through, 25 minutes.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.stepContainer]}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '12%', height:20, justifyContent: 'center', paddingTop:10}}>
                                <View  style={{width: '75%', paddingTop:8,paddingBottom:8,  justifyContent: 'center',backgroundColor:'#d11c21',borderTopRightRadius:3,borderBottomRightRadius:3,  alignItems: 'center', }}>
                                    <Text style={styles.TextWhiteStyle}>2</Text>
                                </View>
                            </View>
                            <View style={{width: '88%', justifyContent: 'center'}}>
                                <Text style={styles.grayText}>Meanwhile make sauce: In a large skillet over medium heat, melt butter. Add onions and cook until very soft and golden, 25 minutes, stirring often. Add garlic and cook until fragrant, 1 minute more.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.stepContainer]}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '12%', height:20, justifyContent: 'center', paddingTop:10}}>
                                <View  style={{width: '75%', paddingTop:8,paddingBottom:8,  justifyContent: 'center',backgroundColor:'#d11c21',borderTopRightRadius:3,borderBottomRightRadius:3,  alignItems: 'center', }}>
                                    <Text style={styles.TextWhiteStyle}>3</Text>
                                </View>
                            </View>
                            <View style={{width: '88%', justifyContent: 'center'}}>
                                <Text style={styles.grayText}>Add broth and thyme and season with salt and pepper. Bring to a boil, then reduce heat and let simmer until slightly thickened, 10 minutes.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.stepContainer]}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: '12%', height:20, justifyContent: 'center', paddingTop:10}}>
                                <View  style={{width: '75%', paddingTop:8,paddingBottom:8,  justifyContent: 'center',backgroundColor:'#d11c21',borderTopRightRadius:3,borderBottomRightRadius:3,  alignItems: 'center', }}>
                                    <Text style={styles.TextWhiteStyle}>4</Text>
                                </View>
                            </View>
                            <View style={{width: '88%', justifyContent: 'center'}}>
                                <Text style={styles.grayText}>Add meatballs to skillet and sprinkle with Gruyère. Cover and cook until meatballs are warmed through and cheese is melty, 5 minutes. Serve warm.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', paddingRight:10, paddingTop:20,paddingBottom:40}}>
                        <View style={{ paddingLeft:30,paddingBottom:10}}>
                            <Text style={TextStyles.redTextTitle}>Comments</Text>
                        </View>
                        <View style={{width: '100%', height: 50, justifyContent: 'center'}}>
                            <TextInput style = {styles.searchInput}  placeholder = "Main ingredient.." />
                        </View>
                    </View> 
                </View>
            </ScrollView>
            <Footer ></Footer>
        </View> 
        );
    }
}

RecipeDetails.propTypes = {
    user: PropTypes.object,
};

RecipeDetails.defaultProps = {
    user: null,
};

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);