import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
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
  }
});

export default styles;
