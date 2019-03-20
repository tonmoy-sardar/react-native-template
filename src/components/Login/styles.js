import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  formFooter:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: 40,
    padding: 20,
    borderRadius:20,
    marginTop:20,
  },
  ButtonStyle: {
 
    marginTop:20,
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:72,
    paddingRight:72,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#a1a1a1',
  },
  BottanTextStyle:{
    color:'#000000',
    fontSize: 16,
    textAlign:'center',
    justifyContent: 'center',
  },
  SocialText: {
    paddingTop:20,
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
  },
  AlreadyRegister:{
      paddingTop:20,
      paddingBottom:10,  
      color:'#000000',
      fontSize: 14,
  },
  TextStyle:{
    color:'#000000',
    fontSize: 12,
    textAlign:'center',
    justifyContent: 'center',
  }

  
});

export default styles;
