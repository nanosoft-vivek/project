import {
  StyleSheet,
  Dimensions,
} from 'react-native';
var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
  },
   searchBar: {
    borderWidth: 1,
    height: 40,
    width: width* 0.8,
  },
  fullWidth: {
    width: width
  },
  rightWidth: {
    width: width*0.6
  },
  mtSm: {
    marginTop: 10,
  },
  pSm: {
    padding: 10,
  },
  rowStyle: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

   iMg: {
    borderRadius: height * 0.3/2,
     width: height * 0.3, 
     height: height * 0.3
  },
   iMga: {
    borderRadius: height * 0.1/2,
     width: height * 0.1, 
     height: height * 0.1
  },
  fSize:{
    fontSize: 40
},
   loSize:{
   width: width*0.6,
},
});
module.export = styles;
