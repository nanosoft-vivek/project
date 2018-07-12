  /**
 * File Name       : style.js
 * Author          : Vivek Mishra
 * Description     : Styling of application
 * Version         : 1.0
 * Last Updated    : Aug 10  2017 
 * Last Updated By : Vivek Mishra
 **/
import {
    StyleSheet, 
    Dimensions,
    Platform,
    PixelRatio,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Style from './DynamicDimension';
module.exports = StyleSheet.create({
    loginTab:{
        borderTopColor:'#34485E',
        borderTopWidth:20
    },
    loginCenter: {
        height: height-height/4,
        width   : width
    },
    heading2:{fontSize: width/12},
    textBlack:{color:'#333'},
    columnStyle  : { flexDirection   : 'column'      },
    mtLg: {marginTop:15},
    mbMd: {marginBottom:0},
    textLeft: {
        textAlign: 'left'

    },
    textInput: {
        height                  : width/8.5,
        backgroundColor         : '#ffffff',
        borderWidth             : 1,
        borderColor             : '#ddd',
        color                   : '#555555',
        borderRadius            : 3,
         
    },
    pl           : { paddingLeft     : 15             },
    headingFont: {fontSize: width/25},
    width60       : { width : width-60},
    btnPrimary: {
        backgroundColor : '#0c94d6',
        borderWidth     : 1,
        borderColor     : '#18a689',
        shadowColor: '#ffffff',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
    },
    logButton:{
        borderWidth     : 1,        
        borderColor     : 'black',        
        backgroundColor : '#075b99',
        shadowColor: '#3f5873',
        paddingTop : 10,
        paddingBottom : 10,
        
        
    },
    rSm: {borderRadius:3},
    mtMd: {marginTop:10},
    middle:{
        alignItems          : 'center'
    },
    textCenter : {textAlign: 'center'},
    textWhite    : { color           : '#ffffff'     },
    middleFont: {fontSize: width/22},
    pullRight: {
        position: 'absolute',
        right: 0,
    },
    msgModel:{
        height:width/2.8,
    },
    fullHeight: {
        height: height
    },
    mlMd: {marginLeft:10},
    mrMd: {marginRight:10},
    modalSmallButton: {
        paddingTop: 4, 
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight:8,
        borderRadius: 3,
    },
    btnPrimary: {
        backgroundColor : '#075b99',
        borderWidth     : 1,
        borderColor     : '#18a689',
        shadowColor: '#18a689',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight:'500',
        padding: 2
    },
    btnTextModal:{fontSize: 13,},
    rowStyle: {
        flexDirection: 'row'
    },
    styleFlex: {
        flex: 1,
    },
    body: {
        height: height - 70,
        width: width - 20
    },
    bodyWidth: {
        width: width - 20
    },
    imgItem: {
        height: 50,
        width: (width - 20) / 3,
    },
    prSm: {
        paddingRight: 10
    },
    plSm: {
        paddingLeft: 10
    },
    pbSm: {
        paddingBottom: 10,
         
    },
    mSm: {
        margin: 10
    },
    itemWidth: {
        width : (width-30)/3,
    },
    card_shadow: {
        width: (width - 20) / 3,
        shadowColor: '#888',
        borderWidth: 1,
        borderColor: '#eee',
        shadowOpacity: 0,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.5,
        width: 0.5,},
        backgroundColor:'transparent',
    },
    xsmallFont: {fontSize: Style.em(0.625)},
    smallFont: {fontSize: Style.em(0.8087)},
    smallFont2: {fontSize:Style.em(0.892)},
    normalFont: {fontSize: Style.em(0.959)},
    headingFont: {fontSize: Style.em(1.035)},
    headingFont2: {fontSize: Style.em(1.101)},
    link : {color: '#b0281a',},
    pullRight: {
        position: 'absolute',
        right: 0,
    },
    center: {
        alignItems          : 'center',
        justifyContent      : 'center'
    },
    fullImage: {
        height: height * 0.4,
        width: width - 20,
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:70,
    backgroundColor: '#ffffff',
  },
   searchBar: {
    borderWidth: 1,
    height: 50,
    width: width* 0.7,
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
 
    justifyContent: 'center',
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
  fSize:{
    fontSize: 40
},
   loSize:{
   width: width*0.6,
},
container2: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 70
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
  navbarText: {
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  tabbar: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 20: 0,
    bottom: 0,
    left: 0,
    paddingLeft: 10,
    height: height *.09,
    width: width,
    backgroundColor: '#178484',
    justifyContent: 'center',
  },
  rowStyle: {
    flexDirection: 'row'
  },
  
  tabbarWidth: {
    width: width/5,
    height: height *.09,
    

  },
  tabbarWidth2: {
    width: width/4.5,
    height: height *.09,
    justifyContent:'center',
    padding:10,
    margin:5,
    
  },
   

  tabbarText: {
    fontSize: 12,
    color: '#fff',
    padding: 1,
  },
    tabbarText2: {
    fontSize: 20,
    color: '#000',
    padding: 1,
  },
  contentText: {
    color: '#594c4c',
    fontSize: 13,
    paddingTop:5,
    
    justifyContent:'center'
    
    
  },
  contentContainer: {
    paddingVertical: 20
  },
    contentText2: {
  
    paddingLeft:15,
    
    
    
  },
     contentText3: {
  
    paddingLeft:20,
    fontSize: 20,
    
    
  },
  centerText: {
      justifyContent:'center',
      padding: 10,
  },
    prl: {
      padding: 10,
       justifyContent:'center',
    },
      container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#e74c3c', },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
   avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
