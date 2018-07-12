import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
TouchableHighlight,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default class App extends Component {
 constructor() {
    super()
    this.state = {
      text: '',
      currTab: 'Cheese',
      pizza: ''
    }
  }
  render() {
    return(
     <View style = {[{ marginTop: 70, flex: 1, backgroundColor:'#fff'}]}>
       <View>
        
       </View>

    </View>
  )

  }
}

const styles = StyleSheet.create({
  
  rowStyle: {
    flexDirection: 'row'
  },
  navbarText: {
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
   navbar: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 0: 0,
    top: 0,
    left: 0,
    paddingLeft: 10,
    height: height *.09,
    width: width,
    backgroundColor: '#075b99',
    justifyContent: 'center',
  },
   textRight: {
      textAlign: 'right'
    },
     columnStyle  : { flexDirection   : 'column'      },
      tabBarButton: {
      width             : (width/4),
      alignItems        : 'center',
      justifyContent    : 'center',
    },
     container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 25
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // paddingHorizontal: 10,
    marginTop: 20,
    // paddingBottom: 20
  },
  tab: {
    height: 50, 
    width: '33.33%',
    borderRightWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  images: {
    width: width,
    height: 180,
  },
 btnFullScreen: {
      height    : width/8.6,
      borderWidth : 1,
      borderRadius: 3,
      width   : width-10,
    },
     logButton:{
        borderWidth   : 1,    
        borderColor   : '#34485E',    
        backgroundColor : '#3f5873',
        shadowColor: '#3f5873',
      },
    btnPrimary: {
    backgroundColor : '#1ab394',
    borderWidth     : 1,
    borderColor   : '#18a689',
    shadowColor: '#18a689',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}  
    },
    btnDefault:{
    backgroundColor : '#3f5873',
    borderWidth     :  1,
    borderColor   : '#ccc',
    color           : '#333',
    shadowColor: '#ccc',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}  
    },
   btnSuccess:{
    backgroundColor : '#22aadd',
    borderWidth     : 1,
    borderColor   : '#1F99C7',
    color           : '#FFFFFF',
    shadowColor: '#1F99C7',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}  
   },
   btnInfo:{
    backgroundColor : '#55c3e4',
    borderWidth     : 1,
    borderColor   : '#46b8da',
    color           : '#FFFFFF',
    shadowColor: '#1F99C7',
      shadowOpacity: 0.8,
      shadowRadius: 1,
      shadowOffset: {
      height: 0.9,
      width: 0.9,}  
   },
   btnWarning:{
    backgroundColor     : '#f0ad4e',
    borderWidth         : 1,
    borderColor       : '#eea236',
    color               : '#FFFFFF',
    shadowColor       : '#eea236',
        shadowOpacity     : 0.8,
        shadowRadius      : 1,
        shadowOffset      : {
        height          : 0.9,
        width         : 0.9,} 
   },
   btnDanger:{
    backgroundColor     : '#D64937',
    borderWidth         : 1,
    borderColor       : '#d43f3a',
    color               : '#FFFFFF',
    shadowColor       : '#d43f3a',
        shadowOpacity     : 0.8,
        shadowRadius      : 1,
        shadowOffset      : {
                height  : 0.9,
                width : 0.9,
        }
   },
   rSm: {borderRadius:3},
   mtMd: {marginTop:10},
    center: {
        alignItems          : 'center',
        justifyContent      : 'center'
    },
    textWhite    : { color           : '#ffffff'     },
});