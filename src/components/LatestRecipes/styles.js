import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: Colors.primary,
  // },
  ContinueButtonStyle: {
 
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:50,
    paddingRight:50,
    backgroundColor:'#d11c21',
    borderRadius:20,
    
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  actionBar: {
    backgroundColor: '#b3181c',
    color: '#000000',
    paddingHorizontal: 10
  },
  container: {
    backgroundColor: '#dadada',
    paddingLeft: 5,
    paddingRight: 5
  },
  card: {
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      marginHorizontal: 10,
      padding: 0,
      borderRadius:10,
      marginTop:20,
    },
    
    coverEmpty: {
      flex: 0.6,
      width: null
    },
    name: {
      flex: 0.25,
      fontSize: 18,
      color: '#444444',
      fontFamily: 'Roboto-Regular',
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10
    },
    addOn: {
      flex: 0.15,
      display: 'flex',
      flexDirection: 'row'
    },
    leftAligned: {
       flex: 0.3,
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'center',
       paddingLeft: 10
    },
    rightAligned: {
      flex: 0.7,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
      
    },
    icon: {
      height: 15,
      width: 15,
      marginTop: 2
    },
    iconText: {
      fontSize: 12,
      fontFamily: 'Roboto-Light',
      marginLeft: 5
    }
});

export default styles;
