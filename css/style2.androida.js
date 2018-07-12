import { StyleSheet,Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import Style from './DynamicDimension';
module.exports = StyleSheet.create({
    container: {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : '#fcfcfc',
        width           : null,
        height          : null,
    },
    activator: {
    	alignItems      : 'center',
		justifyContent  : 'center',
		position		: 'absolute',
		top				: 60,
		right			: 0,
		bottom			: 0,
		left			: 0,
    },
    resultIndicator: {
    	justifyContent 	: 'center',
    	padding			: 5,
    	backgroundColor	: '#178484',
    	alignItems     	: 'center',
    	borderRadius	: 18,
    	height			: 30,
    	width			: 30,
    	marginLeft		: 2,
    	alignSelf       : 'center',
    },
    dndActivator: {
        top : 0, 
        left: 160,
    },
    activatorLib:{
    	position    : 'absolute',
        top         : (height/2)-31,
        right       : (width/11),
    },
    tocScrollView:{
    	// paddingTop : width/6,
    },
    quesionPic:{
   	 paddingBottom	: 12
    },
    libCrn: {fontSize: Style.em(1)},
    inputBorder: {
    	borderRadius:3, 
    	borderWidth	: 1,
    	borderColor	:'#ddd',
    },
     ebookNav:{
        // paddingTop: width/90,
    },
    heightInnerContainer:{
    	height			: height - 61,  // set for practiceTest height
    },
    resetIco:{
		  marginRight: Style.em(0.75),
		  marginLeft : Style.em(0.75),
	 },
    imageDownload:{
		  fontWeight:'bold',
		  fontSize:Style.em(1.1875),
          color:'#63ae55',
		  backgroundColor:'transparent',
		  position:'absolute',
		  bottom:0,
		  borderBottomWidth:1,
		 },
    sidebarTab:{
    	height:53,
    	paddingTop:4,
    	paddingRight:15,
    },
    sidePane: {
        position: 'absolute',
        top: 30,
        bottom: 50
        // backgroundColor: '#1ab394',
    },
    prepSidePos:{
		marginTop: -20,
	},
	prepDots:{
		height: 8,
		width: 8, 
		borderRadius: 4,
	},
    bodyHeight:{height: height-89},
    bodyHeightQuiz:{height: height-130},
    btnFullScreen:{
        height      : 42,
        borderWidth : 1,
        padding     : 10,
        borderRadius: 3,
        // width : width-10,
    },
    threeDotsList : {
        position: 'absolute',
        right: 5,
        top : 5,
        borderRadius : 5,
        backgroundColor : '#fff',
        borderWidth : 1, 
        borderColor : '#ccc',
        width : 200,
        padding : 15
    },
    logButton:{
    	borderWidth		: 1,		
    	borderColor		: '#617d8a',		
    	backgroundColor	: '#178484',
    	shadowColor: '#617d8a',
    },
    btnPrimary: {
    	backgroundColor	: '#1ab394',
		borderWidth     : 1,
		borderColor		: '#18a689',
        shadowColor: '#18a689',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
      },
      ml70:{
	  		marginLeft: 70,
	  	},
      btnDefault:{
        backgroundColor : '#178484',
        borderWidth     :  1,
        borderColor     : '#ccc',
        color           : '#333',
        shadowColor: '#ccc',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
      },
      dbContentPost:{
  	    flex:1,
  	    borderColor: '#ddd',
  	    marginLeft: 5,
  	    marginTop:2,
  	    marginBottom:4,
  	    justifyContent:'center',
      },
     btnSuccess:{
        backgroundColor : '#22aadd',
        borderWidth     : 1,
        borderColor     : '#1F99C7',
        color           : '#FFFFFF',
        shadowColor: '#1F99C7',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
     },
     btnInfo:{
 	 	backgroundColor	: '#55c3e4',
 	 	borderWidth     : 1,
 	 	borderColor		: '#46b8da',
 	 	color           : '#FFFFFF',
 	 	shadowColor: '#1F99C7',
 	    shadowOpacity: 0.8,
 	    shadowRadius: 1,
 	    shadowOffset: {
 	    height: 0.9,
 	    width: 0.9,}	
 	 },
     btnWarning:{
        backgroundColor : '#f0ad4e',
        borderWidth     : 1,
        borderColor     : '#eea236',
        color           : '#FFFFFF',
        shadowColor: '#eea236',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
     },
     btnDanger:{
        backgroundColor : '#D64937',
        borderWidth     : 1,
        borderColor     : '#d43f3a',
        color           : '#FFFFFF',
        shadowColor: '#d43f3a',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}
     },
    small:{
        fontSize : Style.em(0.625),
        textAlign:'center'
    },
    textInput: {
        height          : 42,
        backgroundColor : 'transparent',
        borderWidth     : 1,
        borderColor     : '#000',
        color           : '#555555',
        borderRadius    : 3,
    },
    iconEmail:{
        borderColor             : '#cccccc',
        borderWidth             : 1,
        borderBottomLeftRadius  : 2,
        borderTopLeftRadius     : 2,
        height                  : 40,
        width                   : 40,
        backgroundColor         : '#ffffff',
        textAlign               : 'center'
    },
    clear:{
      marginTop : 2
    },
    tocHead:{
        backgroundColor     :'#178484',
        height: 60,
    },
    tocHeadNormal:{
    	 backgroundColor     :'#178484',
         height: 60,
         //paddingTop: 13,
    },
    elastic:{
    	/*position: 'absolute',
    	top: 60,
    	borderTopWidth	: 1,
    	borderTopColor     : '#178484',   */
        marginTop : 60
    },
    error:{
        color   : 'red',
        padding : 5
    },
    tocNavbar: {
         backgroundColor :'#178484', 
         height			 : 60,
    },
    tocListAndroid:{
		marginLeft: 0,
		paddingLeft: 57,
		marginTop: 15,
		marginBottom: 30,
	},
	tocListAndroidPanel:{
			marginLeft: 0,
			marginRight: 0,
			paddingLeft: 10,
			paddingRight:0,
			marginTop: 15,
	},
	tocBullet: {
		borderColor : '#bdbdbd',
		borderWidth : 2,
		borderRadius: 16,
		width		: 32,
		height		: 32,
		backgroundColor: '#EEDC9D',
		position:'absolute',
		left: -40,
	},
	tocBulletPane: {
		left: 2,
		position:'relative',
	},
	tocBulletTxt:{
		color: '#999',
		fontWeight: 'bold',
		fontSize: Style.em(0.875),
	},
    navTop: {
		position:'absolute',
		top:0,
		right:0,
		left:0,
	},
    navbar: {
        backgroundColor 	: '#178484',
        height              : 60,
        left            	: 0,
        right         		: 0,
        top             	: 0,
        borderBottomWidth	: 1,
        borderBottomColor	: '#178484',
        position        : 'absolute',
        shadowColor: '#178484',
        shadowOpacity: 0.7,
        shadowRadius: 2,
        shadowOffset: {
        height: 2,
        width: 2,},
        justifyContent : 'center'
    },
    searchContainerGlossary: {  
    	backgroundColor:'#29bbbb',
        width:width,
        height:60,
        position:'absolute',
        top:0,
        right:0,
        left:0,
    },
    logButton:{
    	borderWidth		: 1,		
    	borderColor		: '#617d8a',		
    	backgroundColor	: '#178484',
    	shadowColor: '#617d8a',
    },
    capsule: {      
        height          : 50,       
        borderRadius    : width/1,      
        borderWidth     : 1,        
        borderColor     : '#617d8a',        
        backgroundColor :'#178484',     
        marginLeft      : 19,     
        marginRight     : 19,     
        marginTop       : 5,     
    }, 
    capsuleIco:{        
        position: 'absolute',       
        left:20,        
        top: 10,     
    },      
    capsuleTxt: {       
        fontSize: Style.em(1.1875),        
        marginLeft: 50,
        marginTop: 9,
        color    : '#fff',      
        fontWeight: '400',      
    },      
    capsuleArrow: {     
        position		: 'absolute',       
        right			: 13,      
        top				:13,      
    },
    profileBack: {
		  position		: 'absolute',
		  right			: 17,
		  top			: 11,
		  padding		:5,
	},
    prepNav:{height:61},
    navbarTitle: {
        color               : '#fff',
        fontSize            : Style.em(1.375),
        fontWeight          : '400',
        alignSelf           : 'flex-start',
        textAlign           : 'left', 
    },
    labTitleWidth: {
		 marginRight	: 100,
	},
    logSwitch:{
		position	: 'absolute',
		top			: 16,
		right		: 17,
	},
	navbarTitleTOC:{
		marginTop	   : 14,    
	},
	tocMenuModal:{
		height: height / 6 ,
	},
	tocMenuContainer:{
		padding:20,
		marginBottom:23,
	},
    navbarTitleOnly : {
    	color       : '#fcfcfc',
        fontSize    : Style.em(1.2857),
        fontWeight  : 'bold',
        marginLeft  : 15,
        marginRight : 56,
        position    : 'relative',
        top    		: -4,
    },
    sidebar: {
        padding         : 10,
        paddingTop      : 30,
        backgroundColor : '#178484',
    },
    linkText: {
        flex        : 1,
        fontSize    : Style.em(1.125),
        color       : '#fff',
        fontWeight  : 'bold'
    },
    innerContainer: {
    	position        : 'relative',
    	top             : 60, // do not change it
    	left			: 0,
    	right			: 0,
    },
    ebookContainer:{
    	position        : 'absolute',
    	bottom			: 0,
    	left			: 0,
    	right			: 0,
    	top				: 60,
    },
    absolutePos:{position:'absolute'},
    navigationContainer:{
    	position        : 'relative',
    	top             : 61, // do not change it
    	height			: height - 35,
    },
    innerContainerSearch:{
    	position        : 'absolute',
    	top             : 61, // do not change it
    	left			: 0,
    	right			: 0,
    },
    innerContainerDb: {
    	position        : 'absolute',
    	top             : 61, // do not change it
    	paddingTop		: 10,
    	left			: 0,
    	right			: 0,
    	bottom			: 0
    },
    welcomeContainer:{
    	paddingTop: 110,
    },
    bullet:{
        width: 33,
        fontWeight: 'bold',
    },
    innerContainer2: {
        marginTop             : 125,
    },
    resultContent:{
    	marginLeft		: 12,
    	justifyContent  : 'center',
    	width			: width-100,
    },
    lighter:{
    	fontWeight: '400',
    },
    courseBox:{
        backgroundColor : '#ffffff',
        borderColor     :'#dddddd',
        borderWidth     : 1,
        marginBottom    : -1.5,
        // flexDirection : 'row',
        // width :(width-15),
        marginLeft      : 7,
        marginRight     : 7,
        padding         :8,
        // flexWrap: 'nowrap',
    },
    courseBoxLA: {
    	backgroundColor	: '#ffffff',		   
    	borderColor		: '#dddddd',		    
    	borderWidth		: 1,
    	marginLeft      : 27,     
        marginRight     : 27,  
    	padding			: 8,
    	// flexDirection : 'column',
    	marginTop		: 8,
    	marginBottom	: 15,
        // flexWrap: 'nowrap'
    	borderLeftWidth:3,
    	borderLeftColor:'#178484',
    	// borderRadius: ((width/32)-3)/2,
    	shadowColor			: '#666',
        shadowOpacity		: .2,
        shadowRadius		: 2,
        shadowOffset		: 
	        {
	          height		: 2,
	          width			: 2,
	        },
    },
    libContentLA: {		
    	position: 'relative', 
        height: 62,
        marginLeft: 93,
        width:null
    },
    lastAccess:{
    	position:'absolute',
    	bottom: 13,
    	left: 112,
    	fontSize			: Style.em(0.8125),
    	color:'#b0281a',
    	marginRight:100
    },
    smView:{
    	margin:width/30,
    	marginTop:0,
    },
    lastAccessPlay:{
    	position:'absolute',
    	bottom:17.5,
    	color:'#178484',
    	left: 35,
    	transform: [{rotate: '45deg'}],
    	opacity:0.7,
    	backgroundColor:'#ffffff90',
    	alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        height:44,
    	width:44.5,
        borderWidth:0.8,
        borderColor:'#fefaf9',
        borderRadius:23,
    },
    labDbIcons: {
		position 			: 'absolute', 
		top 				: 13, 
		right 				: 17
	},
    psm          : { padding         : 3             },
    p            : { padding         : 5             },
    pmd          : { padding         : 10            },  
    plsm         : { paddingLeft     : 3             },
    pl           : { paddingLeft     : 5             },
    plmd         : { paddingLeft     : 10            }, 
    prsm         : { paddingRight    : 3             },
    pr           : { paddingRight    : 5             },
    prmd         : { paddingRight    : 10            }, 
    ptsm         : { paddingTop      : 3             },
    pt           : { paddingTop      : 5             },
    ptmd         : { paddingTop      : 10            },  
    pbsm         : { paddingBottom   : 3             },
    pb           : { paddingBottom   : 5             },
    pbmd         : { paddingBottom   : 10            }, 
    midumWidth   : { width           : (width*2+50)  },
    screenWidth2 : { width           : (width*3)/4-10},
    textGray     : { color           : '#676767'     },
    textWhite    : { color           : '#ffffff'     },
    cb           : { backgroundColor:'#eee'},
    cb11         : { backgroundColor:'#BA6089'},
    cb12         : { backgroundColor:'#66BB6A'},
    cb21         : { backgroundColor:'#4489FE'},        
    cb15         : { backgroundColor:'#FADC60'},        
    cb31         : { backgroundColor:'#E57373'},        
    cb7          : { backgroundColor:'#F48FB1'},        
    cb1          : { backgroundColor:'#F4A816'},        
    cb0          : { backgroundColor:'#A1897F'},        
    cb8          : { backgroundColor:'#B0BFC6'},        
    cb9          : { backgroundColor:'#FF5444'},        
    cb10         : { backgroundColor:'#FE4A65'},        
    cb16         : { backgroundColor:'#FFA500'},        
    cb17         : { backgroundColor:'#0192FF'},        
    cb18         : { backgroundColor:'#B9B299'},        
    cb2          : { backgroundColor:'#A7D5C1'},        
    cb3          : { backgroundColor:'#F5D75F'},        
    cb4          : { backgroundColor:'#B5CE34'},        
    cb5          : { backgroundColor:'#DCB664'},        
    cb6          : { backgroundColor:'#B06F50'},        
    cb13         : { backgroundColor:'#E59689'},        
    cb14         : { backgroundColor:'#CDC697'},        
    cb19         : { backgroundColor: 'goldenrod'},         
    cb22         : { backgroundColor:'#19A966'},        
    cb23         : { backgroundColor:'#FFC927'},        
    cb24         : { backgroundColor:'#CDDC39'},        
    cb25         : { backgroundColor:'#0C6667'},        
    cb26         : { backgroundColor:'#CA8E7F'},        
    cb27         : { backgroundColor:'#BFE1DB'},        
    cb28         : { backgroundColor:'#693AB8'},        
    cb29         : { backgroundColor:'#FF5534'},        
    cb30         : { backgroundColor:'#FADC60'},
    bgGray       : { backgroundColor:'#fcfcfc'},
    rowStyle     : { flexDirection   : 'row'         },
    columnStyle  : { flexDirection   : 'column'      },
    selfCenter   : { alignSelf       : 'center'      },
    correct      : { marginTop       : 120           },
    title1:{
        fontSize: Style.em(0.75),
        fontWeight: 'bold'
    },
    title2:{
        fontSize: Style.em(0.875),
        fontWeight: 'bold'
    },
    title3:{
        fontSize: Style.em(1),
        fontWeight: 'bold'
    },
    cb:{
        borderColor: '#dddddd',
        borderWidth:1
    },
    dashboardBox:{
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor:'#ffffff',
        width:(width-10),
        flexDirection: 'row',
    },
    tabbar:{
        //flexDirection:'row',
        position		:'absolute',
        bottom			: 0,
        right			:0,
        left			:0,
        //borderColor: '#dddddd',
        //borderTopWidth: 1,
        //width:width,
        height: 58,
        backgroundColor : '#178484',
    },
    tabBarButton:{
        width: 120,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttons:{
        backgroundColor: '#178484',
        borderWidth:2,
        borderStyle: 'solid',
        borderColor: '#178484',
        padding: 10,
        borderRadius:3,
        marginLeft:2,
        width:(width-10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorWhite:{
        color:'white',
        fontWeight:'bold'
    },
    colorGreen:{
        color:'rgb(0, 128, 0)',
        fontWeight:'bold'
    },
    colorRed:{
        color:'red',
        opacity:.8,
        fontWeight:'bold'
    },
    textBlack:{color:'#333'},
    colorBlack:{
        color:'black',
        fontWeight:'bold'
    },
    disabled:{
    	opacity: 0.4
    },
    toc_heading:{
    	color:'#178484',
	    fontWeight:'700',
	    fontSize: Style.em(1.0942),
      },
      correctAns:{
        color: '#5cb85c',
      },
     incorrectAns:{
        color: '#d44a44',
      },
     toc_content:{
        color:'#474747',
        fontWeight:'400',
        fontSize: Style.em(1),
        lineHeight: 26
      },
    mdmg:{
        marginTop:5,
    },
    leftData: {
    	width: (width*2/3) + (width/38),
    	marginLeft: width/38,
    	marginRight: width/38,
    },
    plannerTxt:{lineHeight:12,},
    blankUser:{
        fontSize		: Style.em(5.3125),
        color			: '#cccccc90',
    },
    wizardIco:{
		position: 'relative',
		top: (height/2)-40
	},
    labelSuccess:{
        backgroundColor: '#5cb85c',
        borderRadius: 2,
        color: '#fff',
        padding: 2,
        marginTop: 1,
        fontWeight: '600',
        maxWidth: 74,
        minWidth: 74,
    },
    labelWarning:{
        backgroundColor: '#f0ad4e',
        borderRadius: 2,
        color: '#fff',
        padding: 2,
        marginTop: 1,
        fontWeight: '600',
        maxWidth: 74,
        minWidth: 74,
    },
    labelDanger:{
        backgroundColor: '#D64937',
        borderRadius: 2,
        color: '#fff',
        padding: 2,
        marginTop: 1,
        fontWeight: '600',
        maxWidth: 74,
        minWidth: 74,
    },
    labelInfo:{
        backgroundColor: '#337ab7',
        borderRadius: 2,
        color: '#fff',
        padding: 2,
        marginTop: 1,
        fontWeight: '600',
        maxWidth: 74,
        minWidth: 74,
    },
    roundCircle: {
        paddingLeft:5,
        paddingLeft:5,
        width:100,
        height:100,
        backgroundColor: '#E9E9E9',
        borderColor:'#dddddd',
        borderWidth: 1,
        borderRadius:80,
        overflow: 'hidden',
    },
    profileInnerContainer: {
    	position        : 'relative',
    	top             : 30,
    	paddingLeft		: 23,
    },
    iosTools:{
	  	position	:'absolute',
	  	top			:0,
	  	right		:0,
	  	left		:0,
	},
    profileInput:{
    	marginRight		:22,
    	flex			: 1, 
    },
    displayBlock:{flex			: 1, },
    profileHeader:{
    	// width:width,
    	backgroundColor		:'#f6f6f6',
    	position       		: 'relative',
    	paddingTop				: width/16,
    	borderBottomWidth	: 1,
    	borderBottomColor	:'#ddd',
    },
    profilePencil :{
    	position			:	'absolute',
    	right				:	18,
    	top					:	17,
    	padding				:   3,
    },
    Profilepic: {
  		width				:120,
  		height				:120,
  		borderRadius		:60,
  		marginBottom        : width/18,
  		overflow:'hidden'
     },
	 camera:{
		  padding: 5,
		  borderRadius: 40,
		  height	: 40,
		  width:40,
		  backgroundColor		: '#f55020',
		  position:'absolute',
		  bottom: width/15,
		  right: -(width/40),
		  alignItems      : 'center',
			justifyContent  : 'center'
	},
    profileImage: {
        backgroundColor: 'transparent',
        alignSelf:'center'
    },
    controlLabel: {
        fontSize: Style.em(0.875),
        fontWeight: '600',
        paddingTop: 10,
        color:'#333',
    },
    mbxm:{ marginBottom: 3 },
    mtxm:{ marginTop: 3 },
    mrxm:{ marginRight: 3 },
    mlxm:{ marginLeft: 3 },
    mb:{ marginBottom: 5 },
    mt:{ marginTop: 5 },
    mr:{ marginRight: 5 },
    ml:{ marginLeft: 5 },
    mbsm:{ marginBottom: 10 },
    mtsm:{ marginTop: 10 },
    mrsm:{ marginRight: 10 },
    mlsm:{ marginLeft: 10 },
    mbmd:{ marginBottom: 20 },
    mtmd:{ marginTop: 20 },
    mrmd:{ marginRight: 20 },
    mlmd:{ marginLeft: 20 },
    mblg:{ marginBottom: 30 },
    mtlg:{ marginTop: 30 },
    mrlg:{ marginRight: 30 },
    mllg:{ marginLeft: 30 },
    mbxl:{ marginBottom: 40 },
    mtxl:{ marginTop: 40 },
    mrxl:{ marginRight: 40 },
    mlxl:{ marginLeft: 40 },
    mbxl3 : { marginBottom : 65 },
    
    mtNlg: {marginTop: -15,},
    mlNlg: {marginLeft: -15,},
    
    mrNlg: {marginRight: -15,},
    
    mtNxl: {marginTop: -25,},
    
    mlNxl: {marginLeft: -30,},
    mlNxxl: {marginLeft: -35,},
    
    mlN: {marginLeft: -10,},
    mlNsm: {marginLeft: -5,},
     
    center:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    },
    moveRight: {
    	justifyContent	: 'flex-end',
    	alignItems		: 'flex-end',
    },
    moveLeft: {
    	justifyContent	: 'flex-start',
    	alignItems		: 'flex-start',
    },
    prepEngineReviewLabel:{
    	position  	  			: 'absolute',
        top       	 			: (height/2)-40,
        left   					: 45,
        width					: width - 100,
        alignItems				: 'center',
        justifyContent			: 'center',
        alignSelf				:'center'
    },
	gridViewTab:{
		width: ((width-60)/3)+23, 
		padding: 18,
		alignItems: 'center',
		// height: (height/8)+10, 
	},
	gridViewIcon:{
		fontSize: Style.em(2.3376),
	},
    rotate90deg:{
		 transform: [{rotate: '90deg'}],
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center',
	},
	prepIco:{marginTop:-2,marginLeft:2},
    listCounterEbook:{
    	width: (width/18)+50,
    	flexDirection   : 'row',
    	textAlign:'center',
    },
    questionListLesson: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        height: (width/5.5),
    },
    midcenter:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    sideContainer:{
        position: 'relative',
        marginTop:50
    },
    hide: {
        opacity: 0
    },
    listBox:{
        borderColor: '#dddddd',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor:'#ffffff',
        width:width,
        flexDirection: 'row',
    },
    resultContainer: {
	    flex: 1,
	    //marginTop: 5,
	},
    navbar2: {
		backgroundColor	: '#178484',
		position:'absolute',
		top: 0,
		right: 0,
		left: 0,
		shadowColor: '#888',
		width: width,
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {
        height: 2,
        width: 2,},
		height : 60,
        justifyContent : 'center'
    },
    listCounter:{
        width: (width/18)+15,
        textAlign:'center',
    },
    listContent:{
        flex: 1
    },
    bookmarkIcon : {
        height : Style.em(2.9),
        width  : width * 0.09,
        marginLeft : Style.em(0.65),
    },
    flashcardBoxBody:{
        marginTop : -Style.em(2.9),
        height: (height/2)-120,
    },
    indicatorBox:{
        width:70,
        height:30,
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius:20,
        paddingTop:5
    },
    flashcardBox:{
    	width:(width-30),
    	height: (height/2)-110,
    	borderColor: '#ddd',
    	backgroundColor: '#f9f9f9',
    	borderBottomWidth: 1,
    	borderRadius: 2,
    	marginLeft:4,
    },
    cardTitleWidth : {
        width : width - ( width * 0.2 + 20 )
    },
    // pmdCard:{padding:10},
    bgImage:{
    	height: null,
    	width: null,
    	backgroundColor:'rgba(0,0,0,0)',
    	resizeMode: 'cover',
    },
    fullContainer :{
    	position:'absolute',
    	top:0,
    	right:0,
    	bottom:0,
    	left:0
    },
    cardHead:{
        backgroundColor:'#888',
        borderBottomWidth:1,
        borderColor:'#ddd',
        backgroundColor:'#888', 
        width : width - 32
    },
    h1:{
        fontSize:Style.em(1),
        fontWeight:'bold'
    },
    progressBar:{
        width:((width*.99))
    },
    cb16:{backgroundColor:'#ffffff'},
    sidePanelItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 16
    },
    divider: {
        height: 1,
        backgroundColor: '#ffffff'
    },
    roundCircle2: {
        paddingLeft:5,
        width:80,
        height:80,
        backgroundColor: '#E9E9E9',
        borderColor:'#dddddd',
        borderWidth: 1,
        borderRadius:50,
    },
    sidebarTitle:{
        width: ((width*2)/3),
        fontWeight:'bold',
        fontSize: Style.em(0.875),
        paddingBottom: 10,
        paddingLeft: 5
    },
    bottomMargin:{height:5,width:200},
    progressPercentContainer:{
        position: 'relative',
        marginTop:30,
    },
    flashcard_btn:{
        width:40,
        backgroundColor:'green',
        borderWidth:0,
        borderRadius:40,
        padding:2,
        height:40
    },
    btn_diff:{opacity:.6},
    sidePaneBtn:{
        width: ((width*2)/3),
        padding: 5,
    },
    corr_incorr_point:{
        fontWeight:'bold',
        width:width*1/6
    },
    smWidth:{width:width*1/6},
    mL:{marginLeft:width*1/19},
    mL2:{marginLeft:width*1/20},
    shadow: {
        backgroundColor: '#ffffff',
        borderColor:'#bbbbbb',
        borderWidth:1,
    },
    backgroundProgress: {
        backgroundColor: '#dadfd9',
        overflow: 'hidden'
    },
    fillProgress: {
        backgroundColor: '#f8ac59',
    },
    lessonsButton: {
    	width: 70,
    	height: 10,
    	borderRadius: 10,
    	backgroundColor:'#f2f2f2'
    },
    selectedItem:{
    	backgroundColor:'#727272'
    },
    cb17:{backgroundColor:'#bbbbbb'},
    noborder:{borderWidth:0},
    width9:{width:width*9},
    smheight:{height:height*1/4},
    mdWidth:{width:width*1/2+30},
    mdWidth2:{width:width*1/2+70},
    pic: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 5,
      },
    sidepaneDivider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc'
      },
    headerWidth:{
        backgroundColor:'#178484',
    },
    profile: {
        width: 98,
        height: 98,
        borderRadius: 50,
        marginLeft: -5
    },
    textLabel: {
        width: (width*2)/9
    },
    textCenter:{textAlign:'center'},
    Width2: {
        width: (width*5)/8
    },
    width4: {
        width: (width*7)/8
    },
    top1:{top:0},
    top2:{top:80},
    contentWidth:{
        width: (width*3)/4,
    },
    tocContentWidth:{
        width: (width*3)/5, 
    },
    numberWidth: {
        width: width/16
    },
    popoverContainer: {
         height: height/4
    },
    popupMain: {
        width:width,
        position:'relative',
        bottom:0,
    },
    darkGray:{color: '#5e5e5e'},
    width4: {
        width   : (width*7)/8
    },
    popoverBox:{
        height: height/21,
        borderColor: '#ddd',
        borderBottomWidth:1,
    },
    leftPopoverBox:{
        height: height/4,
    },
    thirdWidth: {
        width:width/3
    },
    inputPopoverBox:{
        width   : (width*8)/17,
        height  : height/20,
    },
    width3: {
        width   : (width*4)/7
    },
    filterIcon: {
        width   : width/5,
        height  : height/20
    },
    progressBar: {
        position        : 'absolute',
        backgroundColor : 'transparent'
    },
    panelContainer: {
        backgroundColor : '#fff',
        margin          :10,
        overflow        :'hidden'
    },
    panelTitle: {
        flex        : 1,
        padding     : 10,
        color       :'#2a2f43',
        fontWeight  :'bold'
    },
    panelBody: {
        padding     : 10,
        paddingTop  : 0
    },
    resultNumber: {
        color       : '#b0281a',
        fontWeight  : 'bold',
        fontSize    : Style.em(0.95238)
    },
    chapterName: {
        color   : '#b0281a',
        fontSize: Style.em(1.07143)
    },
    correctNumber: {
        color       : '#b0281a',
        fontWeight  : 'bold',
        fontSize    : Style.em(1.07143)
    },
    innerLay: {
        width           : width/4, 
        height          : width/4, 
        flex            : 1, 
        justifyContent  : 'center',
        alignItems      : 'center', 
        backgroundColor : '#fff'
    },
    questionList: {
        borderColor         : '#ddd',
        borderBottomWidth   : 1,
        height              : width/5,
        backgroundColor     : '#fefefe',
    },
    questionList2: {
        borderColor         : '#999',
        borderBottomWidth   : 1,
    },
    fullWidth: {
        width: width
    },
    fullHeight: {
        height: height
    },
    fullScreen:{
    	position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    practiceBtn: {
        borderColor: '#777', 
        borderWidth: 2, 
        height: height/8.4,
        width: height/8.4,
        borderRadius: height/7.4,
        shadowColor: '#888',
        shadowOpacity: 0.8,
        shadowRadius: 2.5,
        shadowOffset: {
        height: 0,
        width: 0,}  
    },
    practiceTest: {
        width: 142,
        margin: width/20,
        textAlign: 'center',
         alignItems      : 'center',
         justifyContent  : 'center',
    },
    practiceType: {
        textAlign: 'center',
        backgroundColor: 'transparent', 
    },
    practiceItam:{
        fontSize: Style.em(0.78125),
        position: 'relative',
        top: -5,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontWeight: '500'
    },
    practiceTxt:{
         fontSize: Style.em(1.125),
         width: 130,
    	 fontWeight: '400',
    	 width: 140,
    	 textAlign: 'center',
    	 marginTop: 4,
    	 backgroundColor: 'transparent',
    	 color: '#444',
    	 flex : 1,
    },
    practiceSlider:{
    	marginLeft:-15,
    },
    helpSwitch:{
    	marginTop:14,
    },
    testHelpPost: {
    	width:width-87, 
    },
    prepBeta: {
         fontSize: Style.em(0.96875),
         fontWeight: 'bold',
         textAlign: 'center',
         marginTop: 19,
         height: 20,
         backgroundColor: 'transparent',
        color: '#444',
        overflow:'visible',
    },
    betaBtn:{
        fontWeight:'500',
        position:'relative',
        top:0,
        color: '#444',
    },
    horizontal_line: {
    	height			: 1,
    	backgroundColor : '#ccc',
    	marginRight		: 15,
    	marginLeft		: 15,
    },
    overflowHidden:{overflow:'hidden'},
    overflowVisible:{overflow:'visible'},
    QuestionLine: {
        width   :(width*3)/4-5,
    },
    fontSize1: {
        fontSize: Style.em(0.95238)
    },
    fontSize2: {
        fontSize: Style.em(1.5625)
    },
    height20   : { height     : height / 20 },
    height18   : { height     : height / 18 },
    height8    : {height:height/8},
    height7    : {height:height/7},
    height6    : {height:height/6},
    height5    : {height:height/5},
    height9    : {height:height/9},
    ptlg       : {paddingTop: 20},
    settingbtn : {
        width              : 50,
        borderWidth        : 1,
        borderColor        :'#ddd',
        borderRadius       : 10,
        right              : 12,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius:0
    },
    tocModalBox : {
    	position		: 'absolute',
    	bottom			: -77,
    	backgroundColor	: '#fcfcfc',
    	width:width,
    },
    width60 : { width : width-60},
    width30 : { width : (width/3)-5},
    cb20    : { backgroundColor:'#F8F8F8'},
    sidePaneSnippet: {
    	width: width*.65,
    	height: width/18,
    	overflow: 'hidden'
    },
    loginCenter: {
        padding:20
    },
    leftWidth: {
        width:width/4
    },
    timervalue:{
        width:110,
        position:'absolute',
        right: 18,
        top:1,
    },
    centerWidth: {
        width:width/2
    },
    fcDivider:{
    	height: width/10, 
    	width: 4,
    	position:'relative',
    	top:-13,
    },
    textClock:{
    	marginTop:2,
    },
    testHistoryHeader: {
        width           : width,
        height          : width/5,
        backgroundColor :'#6FBACE',
    },
    testHistoryBody: {
        width           : width-20,
        height          : height/2 - height/6,
        margin          : 10,
        backgroundColor :'#F6F6F6',
        borderRadius    : width/37,
        borderWidth     : 1,
    },
    circlebtn: {
        borderColor : '#178484',
        borderWidth : 2,
        borderRadius: 15,
        width       : 30,
        height      : 30,
    },
    pl2: {
        paddingLeft:20,
    },
    smallTab: {
        width   : width/3,
        height  : 52
    },
    twoTab: {
        width: width/2,
        height: 52
    },
    itemBox: {
        backgroundColor:'#FFF',
        borderRadius: 3,
        borderWidth : 1,
        borderColor: '#ddd',
        margin: 10,
        width: width-14,
    },
    greyBorderTop: {
        borderTopWidth:1,
        borderColor:'#ddd'
    },
    greyBorderBottom: {
        borderBottomWidth:1,
        borderColor:'#ddd'
    },
    tabHeader: {
        backgroundColor   : '#E9E9E9',
        borderTopLeftRadius      : 5,
        borderTopRightRadius      : 5,
        width             : width-20,
        padding: 8,
    },
    bottomRadius: {
        backgroundColor   : '#E9E9E9',
        height            : width/37,
        width             : width-22,
        position          : 'relative',
        bottom            : width/37,
    },
    testHistoryBox: {
        borderBottomWidth : 1,
        height            : height/6
    },
    radioButtonOuter: {
    	height            : width/19.2,
    	width             : width/19.2,
    	borderRadius      : (width/19.2)/2,
    	borderWidth       : 1.5,
    	// borderColor : '#ccc',
    	alignItems        : 'center',
    	justifyContent    : 'center',
    	alignSelf		  : 'center',
    	marginTop		  : -2.2,
    },
    testOption:{
    	paddingLeft		  : width/50,
    	borderWidth		  : 1,
    	borderColor		  : '#d3d3d3',
    	borderRadius	  : 2,
    },
    optionCorrectMode:{
    	borderColor		  :'#5bb720',
    },
    optionIncorrectMode:{
    	borderColor		  :'#af2517',
    },
    reviewText:{
        color: '#fff',
        fontWeight: '400',
    },
    reviewBg:{
        backgroundColor:'rgba(0,0,0,.6)',
    },
    testText: {
    	marginTop			: 17,
    	position			:'relative',
    	left				: 0,
    	right				: 0,
    	paddingRight		: 10,
    },
    radioButtonInner: {
        height            : 9,
        width             : 9,
        borderRadius      : 6,
        borderWidth       : 1,
        borderColor       : '#fff',
        backgroundColor   : '#fff'
    },
    checkboxButton: {
        height            : 19,
        width             : 19,
        borderColor       : '#fff',
        alignItems        : 'center',
        justifyContent    : 'center',
        alignSelf		  : 'center',
        borderWidth       : 1,
        marginTop		  : -2,	
    },
    testOptionTab:{
    	position		  :'absolute',
    	left			  :-16.8,
    	top				  :0,
    	bottom			  :0.5,
    	width			  :width/6.15, 
    	borderRightWidth  :1,
    	borderRightColor  :'#d3d3d3',
    	backgroundColor	  :'#5f6062',
    	marginLeft:9,
    },
    testOptionCorrect:{
    	borderRightColor  :'#5bb720',
    	backgroundColor	  :'#65a00d',
    },
    testOptionIncorrect:{
    	borderRightColor  :'#af2517',
    	backgroundColor	  :'#e14747',
    },
    
    slider: {
        width: width-72,
    },
    slider1: {
        width: 310,
    },
    toolbarIcon:{
    	position			: 'absolute',
    	bottom				: 20,
    	left:0,
    	right:0,
    	height:Style.em(3.7875),
    	borderTopWidth : 1,
    	borderTopColor : '#ccc',
    	backgroundColor:'#fdfdfd',
    },
    toolbarReviewIndicator:{
        justifyContent		: 'center',
    },
    toolbarIndicator        : {
        position            : 'absolute',
        width               : width * 0.3,
        top                 : 0,
        height              : 60,
        left                : width * 0.35,
        right               : width * 0.35,
    },
    toolIncorrect:{
    	right:(width/2)-(width/2.33),
    },
    toolCorrect:{
    	right:(width/2)-120, 
    },
    timer: {
        backgroundColor : '#178484',
        position:'absolute',
        top: 58,
        height: 42,
        shadowColor: '#888',
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {
        height: 2,
        width: 2,}  
    },
    androidMt:{
    	marginTop:7,
    	marginLeft: 3,
    	marginRight: 2,
    	},
    activeTab:{
		alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor:'#116969',
	},
	normalTab:{
		alignItems      : 'center',
		justifyContent  : 'center',
	},
    timerText: {
        fontWeight:'400',
        fontSize: Style.em(1.0625),
        color:'#fff',
        marginLeft: 18,
    },
    topBorder : {
        borderColor       : '#dddddd',
        borderTopWidth    : 1,
    },
    bookmarkpos : {
        position: 'relative',
        right   : (width/3)+5,
    },
    bookmarkTabs:{
    	width: (width-140)/3,
    },
    bookmarkTabsModal:{
    	width: (width-100)/3,
    },
    modalBox : {
        position        : 'absolute',
        height          : height/5,
        bottom : -( height/5 - 32) ,
        left   : 0,
        backgroundColor : '#fcfcfc',
        width           : width-(width/4.92),
    },
    bottomIcon : {
        width           : ( width-(width/4.92))/3
    },
    filterHeight: {
        height          : height/10,
        width           : width-(width/4.92),
    },
    sidepaneText : {
        width   : width*.55, 
        color   : '#b0281a'
    },
    heading : {
        fontSize : Style.em(1.5625),
        fontWeight: 'bold',
    },
    instruction : {
    	fontSize: Style.em(1.0625),
    	lineHeight: 25,
    	color:'#333',
    	textAlign: 'justify',
    	marginLeft: width/30,
    	marginRight: width/30,
    	marginBottom: width/13,
    },
    lineHeight:{
    	lineHeight:22
    },
    smallButton: {
        paddingTop: 3, 
        paddingBottom: 3,
        paddingLeft: 7,
        paddingRight:7,
        borderRadius: 3,
    },
    modalSmallButton: {
    	paddingTop: 3, 
    	paddingBottom: 4,
    	paddingLeft: 8,
    	paddingRight:8,
    	borderRadius: 3,
    },
    btnText: {
        color: '#fff',
        fontSize: Style.em(1),
        fontWeight:'400',
        margin: 2
    },
    btnTextModal:{fontSize: Style.em(0.9375)},
    performanceBody: {
        width: width-20,
        margin: 0,
        backgroundColor:'#fff',
        borderRadius: width/37,
        borderWidth : 1,
        padding: 0,
        paddingTop: 0,
    },
    testStatus: {
        marginTop: 0,
        marginBottom: 10,
    },
    buttonWidth: {
        width: width/4
    },
    buttonText: {
        fontSize: Style.em(1),
        fontWeight: '600'
    },
    resultTopMargin : {
        //marginTop : 40
    },
    middle:{justifyContent     : 'center'},
    textRight: {
        textAlign: 'right'
    },
    loginLogo: {
        height: 90,
        width: 90,
        borderWidth: 1,
        borderRadius: 58,
        borderColor: '#ccc',
        alignSelf       : 'center'
    },
    mtSm: {marginTop: 3},
    mrSm: {marginRight: 3},
    mbSm: {marginBottom:3},
    mlSm: {marginLeft:3},
      mt: {marginTop: 5},
      mr: {marginRight:5},
      mb: {marginBottom: 5},
      ml: {marginLeft:5},
    mtMd: {marginTop:10},
    mrMd: {marginRight:10},
    mbMd: {marginBottom:10},
    mlMd: {marginLeft:10},
    mtLg: {marginTop:15},
    mrLg: {marginRight:15},
    mbLg: {marginBottom:15},
    mlLg: {marginLeft:15},
    mtXl: {marginTop:20},
    mrXl: {marginRight:20},
    mbXl: {marginBottom:20},
    mlXl: {marginLeft:20},
     mSm: {margin:3},
       m: {margin:5},
     mMd: {margin:10},
     mLg: {margin:15},
     mXl: {margin:20},
     
    ptSm: {paddingTop: 3},
    prSm: {paddingRight: 3},
    pbSm: {paddingBottom:3},
    plSm: {paddingLeft:3},
      pt: {paddingTop: 5},
      pr: {paddingRight:5},
      pb: {paddingBottom: 5},
      pl: {paddingLeft:5},
    ptMd: {paddingTop:10},
    prMd: {paddingRight:10},
    pbMd: {paddingBottom:10},
    plMd: {paddingLeft:10},
    ptLg: {paddingTop:15},
    prLg: {paddingRight:15},
    pbLg: {paddingBottom:15},
    plLg: {paddingLeft:15},
    ptXl: {paddingTop:20},
    prXl: {paddingRight:20},
    pbXl: {paddingBottom:20},
    plXl: {paddingLeft:20},
     pSm: {padding:3},
       p: {padding:5},
     pMd: {padding:10},
     pLg: {padding:15},
     pXl: {padding:20},
     
     pbxl: {paddingBottom:40},
         
    textCenter : {textAlign: 'center'},
    textJustify: {textAlign: 'justify'},
      textRight: {textAlign: 'right'},
       textLeft: {textAlign: 'left'},

    normal: {fontWeight: 'normal'},
      bold: {fontWeight: '400'},
    
        lhSm: {lineHeight:15},
        lhMd: {lineHeight:19},
    lhNormal: {lineHeight:21},
        lhLg: {lineHeight:30},
        lhXl: {lineHeight:40},

    rSm: {borderRadius:3},
      r: {borderRadius:5},
    rMd: {borderRadius:10},
    rLg: {borderRadius:15},
    rXl: {borderRadius:20},
    
    nm: {margin:0},
    np: {padding:0},
    nb: {borderWidth:0},
    nr: {borderRadius:0},

    nmt: {marginTop:0},
    nmb: {marginBottom:0},
    nml: {marginLeft:0},
    nmr: {marginRight:0},

    npT: {paddingTop:0},
    npB: {paddingBottom:0},
    npL: {paddingLeft:0},
    npR: {paddingRight:0},
    
    xsmallFont			: {fontSize: Style.em(0.625)},
    smallFont			: {fontSize: Style.em(0.75)},
    smallFont2			: {fontSize: Style.em(0.8125)},
    normalFont			: {fontSize: Style.em(0.875)},
    headingFont			: {fontSize: Style.em(0.9375)},
    headingFont2		: {fontSize: Style.em(1)},
    middleFont			: {fontSize: Style.em(1.0625)},
    headingFontXl		: {fontSize: Style.em(1.125)},
    headingFontXl1		: {fontSize: Style.em(1.25)},
    capsuleIcoSize		: {fontSize: Style.em(1.4375)},
    headingFontXl2		: {fontSize: Style.em(1.5)},
    headingFontXl3      : {fontSize: Style.em(1.972)},
    heading2			: {fontSize: Style.em(1.75)},
    titleHeading		: {fontSize: Style.em(1.875)},
    testCheck			: {fontSize: Style.em(0.75)},  // navigation check mark
    toolbarIco			: {fontSize: Style.em(1.5)},
    toolbarIcoCard:{fontSize:Style.em(1.875)},
    switchFont			: {fontSize: Style.em(0.6875)},
    
    bgBlack:{backgroundColor: 'black'},
    bgWhite:{backgroundColor: 'white'},
    
    mtnSm: {marginTop: -3},
    mrnSm: {marginRight: -3},
    mbnSm: {marginBottom: -3},
    mlnSm: {marginLeft: -3},
    modalClose:{
    	backgroundColor:'#e01f1f',
    	padding:7,
    	paddingBottom:6,
    	paddingTop:6,
    	borderRadius:50,
    },
    
    card_shadow:{
  	  shadowColor: '#888',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.5,
        width: 0.5,},
    },
    
    prepCircle:{
    	height: 28,
		width: 28,
		borderRadius: 14,
		alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
	},
	prepEngineIndicators:{
		width:width,
    	marginTop:20,
    },
    prepEnginePlay:{
		position:'absolute',
		top:(height/3)-18,
		left:(width/2)-55,
	},
	leftWidthMargin: {
    	width:(width-20)/4,
    },
    pullRight: {
        position: 'absolute',
        right: 0,
    },
    dateButton: {
    	borderWidth: 1,
    	borderColor: '#ccc',
    	backgroundColor: '#fff',
    	borderRadius: 3,
    	height: 25,
    	padding: 5,
    	justifyContent   : 'center',
	    alignItems       : 'center',
	    backgroundColor  : '#fcfcfc',
    },
    prepEngineBody:{
    	width:width,
    	height:height,
    	paddingTop: 10,
    },
    toolText:{
		color: '#555',
		fontWeight:'400',
		marginTop:1,
		fontSize:Style.em(1.125),
	},
    prepEngineDrawer:{
    	width:(width/2)+124,
    	height:height,
    	marginTop:-20,
    	backgroundColor:'red' 
    },
    prepEngineResult:{
    	width:(width/1.3), 
    	height:(height-(height/4.2)),
    	marginTop:90,      
    },
    sidepaneWidth:{
    	width:(width/2)+122,
    },
    prepEngineIndicatorsPane:{
    	width:(width/2)+100,
    	position:'absolute',
    	top:60,
    	paddingBottom:15,
    },
    paneText:{
    	fontSize:Style.em(0.6875),
    },
    leftWidthMarginPane: {
    	width:width/5.4,
    	margin:0,
    },
    prepPlay:{
    	backgroundColor:'white',
    	position:'relative',
    	top:6,
    },
    prepEngineProg:{
		left:10, 
		marginTop: 3, 
		height: 8,
		marginRight:15,
	},
    sidepaneUser:{
    	fontSize: Style.em(2.6875),
    	marginLeft: 4,
    },
    pullLeft: {
        position: 'absolute',
        left: 0,
    },
    progressTxt:{
    	fontSize: Style.em(0.625),
    	lineHeight: 25,
    	marginTop:12,
    	fontWeight: '500'
    },
    userPicBlank: {
        height: 55,
        width: 50,
        marginTop: -3,
    },
    userPic: {
        height: 55,
        width: 55,
        borderRadius: (55),
    },
    singleBorder: {
        borderWidth: 1,
        borderColor: '#fcfcfc',
    },
    yellowView:{
        padding: 30,
        backgroundColor: '#f8ac59',
    },
    welcomePane: {
        justifyContent : 'center',
    },
    dbIco: {
    	marginTop:-2
    },
    newDashboard: {  
    	height: 80,
        paddingLeft        		: 8,        
        paddingRight       		: 8,
        flexDirection			: 'row',
        alignItems				: 'center',
        flex					: 1, 
        backgroundColor 		: '#FFF',           
        borderWidth    			: 1, 
        borderColor				: '#ddd',
        marginBottom	    	: 8,  
        marginTop			 	: 0,
        marginLeft      		: 8,
        marginRight     		: 8,
        borderLeftWidth 		: 3,
        shadowColor				: '#666',
        shadowOpacity			: .2,
        shadowRadius			: 2,
        shadowOffset			: {
          height: 2,
          width: 2
        }
    },
    newDashboardTextHelp: {  
        paddingLeft        		: 8,        
        paddingRight       		: 8,
        flexDirection			: 'row',
        alignItems				: 'center',
        flex					: 1, 
        backgroundColor 		: '#FFF',           
        borderWidth    			: 1, 
        borderColor				: '#ddd',
        marginBottom	    	: 8,  
        marginTop			 	: 0,
        marginLeft      		: 8,
        marginRight     		: 8,
        borderLeftWidth 		: 3,
        shadowColor				: '#666',
        shadowOpacity			: .2,
        shadowRadius			: 2,
        shadowOffset			: {
          height: 2,
          width: 2
        }
    },
    dbArrow: {
    	position:'absolute',
    	right:5,
    	top:27,
    	backgroundColor:'transparent',
    },
    dashboardBorderBox: {       
        borderTopWidth:1,       
        borderColor:'#ddd',     
        paddingTop : 5,     
        marginTop: 8,
        marginTop: 8,
    },
    dbContent:{
        flexWrap: 'wrap',
        flexDirection: 'column',
        flex:1,
        paddingTop: 3,
        paddingBottom:8,
        marginLeft: 6,
        marginRight:5,
    },
    footerModal:{
    	width			: width+5,
		backgroundColor :'transparent',
		position		: 'absolute',
		bottom			: 0,
		left			:0,
		right			:0,
    },
    grid:{
        width			: width+5,
        alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor	: '#fcfcfc',
		height			: 200,
		position		: 'absolute',
		bottom			: 0,
		left			: 0,
		right			: 0,
    },
    newDashboardIco:{           
        position: 'absolute',           
        left: -43,
        top: 3,     
    },
    dbSmallText:{
        fontSize:Style.em(0.7875),
    	color:'#333',
    	position:'relative',
    	left:0,
    	marginRight:8,
    },
    dbSmallTextPost:{
        fontSize:Style.em(0.75),
    },
    newDashboardTxt: {      
        fontSize: Style.em(1.1375),        
        fontWeight: '500',      
    },      
    newDashboardArrow: {        
        position: 'absolute',       
        right: -20,     
    }, 
    listIcon:{
    	fontSize: Style.em(1.25),
    },
    mediaIcons:{
    	borderTopWidth:0,
    	paddingTop:0,
    	marginTop:5,
    },
    preClr     : { color : '#F9A041' },     
    lsnClr     : { color : '#69A142' },     
    pracClr    : { color : '#029688' },        
    postClr    : { color : '#4DB889' },        
    labClr     : { color : '#F2745F' },
    linkIns    : { color : '#ce6262' },
    textGreen  : { color : '#00ff00' },
    winHeight  : { height: height },     
    link       : { color : '#b0281a' }, 
    certi      : { color : '#337ab7' },
    alertMini : {       
        borderWidth : 1,
        borderLeftWidth: 2,
    },
    alert : {       
        paddingTop: 7,
        paddingBottom:7,
        paddingLeft: 12,
        margin: 10,     
        borderWidth : 1,
        borderLeftWidth: 3,
    },
    checkType: {
        marginTop: -50,
    },
    alertWarning : {        
        backgroundColor: '#fcf8e3',     
        borderColor: '#faebcc',
        borderLeftColor: '#f8ac59',
    },
    alertInfo : {		
        backgroundColor: '#d9edf7',		
	    borderColor: '#bce8f1',
	    borderLeftColor: '#1ab394',
    },
    alertSuccess : {        
        backgroundColor: '#dff0d8',     
        borderColor: '#d6e9c6', 
        borderLeftColor: '#46a546',
    },      
    alertDanger : {     
        backgroundColor: '#f2dede',     
        borderColor: '#ebccd1', 
        borderLeftColor: '#ed5565',
    },
    alertPrimary : {     
        backgroundColor: '#337ab7',     
        borderColor: '#2e6da4', 
        borderLeftColor: '#2cd6da',
    },           
    textWarning : {color : '#8a6d3b',},  
    textInfo    : {color : '#31708f',},
    textSuccess : {color : '#3c763d',},     
    textDanger  : {color : '#a94442',},
    textSuccessDwills  : {color : '#1c84c6',},
    plannerBox: {
        width: width*7/8,
        padding: 10,
        backgroundColor: '#fff',
        borderColor : '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemBox2: {
        backgroundColor:'#fff',
        borderRadius: width/36,
        borderWidth : 1,
        borderColor: '#ccc',
        margin: 10,
        width: width-20,
    },
    userPicBlank: {
        height: 55,
        width: 55,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#fcfcfc',
        backgroundColor: '#E9E9E9',
        overflow: 'hidden',
    },
    libPicCircle: {     
        height: 50,     
        width: 95,      
        borderWidth: 0,     
        padding: 1,     
        overflow: 'hidden', 
        position:'absolute',
        marginTop:5,
    },
    libPic: {
        flex:1,
    },
    libContent: {       
    	position: 'relative', 
        height: 62,   
        top: -2, 
        marginLeft: 93,
        width:null
    },
    textGreen  : { color : '#00ff00'},
    iosLineHeight: {
        height     : 25,
        lineHeight : -4,
    },
    plannerBox: {
        width: width*7/8,
        padding: 10,
        backgroundColor: '#fff',
        borderColor : '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemBox2: {
        backgroundColor:'#fff',
        borderRadius: width/37,
        margin: 10,
        width: width-20,
    },
    rr : {		 
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    italic:{fontStyle:'italic'},
    studyPlannerHeader: {
    	width: width,
    	height: (height/7) - 5,
    },
    userPic2: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#fcfcfc'
    },
    tip_c: {
        backgroundColor: '#dff0d8',
        borderWidth: 1,
        borderColor: '#d6e9c6',
        borderLeftWidth: 3,
        borderLeftColor: '#46a546',
        width: width-10,
        height: 100
    },
    tip_text: {
        width: width-53,
        height: 100
    },
    reportBox: {
        width: width-30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    leftDataBullet: {
    	width: (width*2/3) -5,
    },
    lessonBox: {
        borderWidth: 1,
        borderColor: '#ddd'
    },
    lessonHeader: {
        width: width-22,
        backgroundColor: '#f9f9f9'
    },
    loginCard : {       
        backgroundColor : '#fcfcfc',        
        width: 340,     
        borderRadius: 3     
    },      
    loginBtn:{      
        height      : 40,       
        borderWidth : 1,        
        padding     : 10,       
        borderRadius: 3,        
        width: 310,     
    },  
    nbt:{borderTopWidth:0},
    searchBar: {        
        padding: 7,     
        height: height/19,      
        fontSize: Style.em(1.0625),       
        color: '#555555',       
        width: width-20,        
        borderWidth: 1,     
        borderColor: '#ffffff',     
        backgroundColor: '#ffffff'      
    },     
    playicon:{
    	borderRadius:15,
		height: 25,     
        width: 25,
        padding: 2,
        borderWidth: 1, 
        borderColor: '#fcfcfc',	
        position: 'absolute',
        top: 12,
        left: 35,
        opacity: 0.9,
        overflow: 'hidden',
    },
    videoDuration:{
    	backgroundColor: '#333',
    	opacity: 0.9,
    	paddingTop: 0,
    	paddingLeft: 2,
    	paddingRight: 3,
    	paddingBottom: 1.5,
    	position: 'absolute',
    	right: 0,
    	bottom:0,
	},
	videoDurationText:{
		color: '#fff',
    	fontSize: Style.em(0.6875),
    	fontWeight: '700',
    	marginTop:0.8
	},
    lhdb:{
    	lineHeight: 21,
    },
    plannerHeight:{
    	height: height-25,
    	paddingTop:10,
    	paddingLeft:5,
    	paddingRight:6,
    },
    bgTransparent:{
        backgroundColor: 'transparent',
    },
    searchContainer: {            
        backgroundColor:'#29bbbb',
        // width:width,
        height: 60,
        left            	: 0,
        right         		: 0,
        top             	: 0,
        position        : 'absolute',
        
    }, 
    serachBackBtn: {		
	    position: 'absolute',		
	    right :14,		
	    top: -1,
	    bottom:0,
	    justifyContent: 'center',
    },	     
    searchLib: {        
        paddingLeft      : 13, 
        paddingRight     : 55,
        paddingBottom    : 15, 
        paddingTop	     : 6, 
        marginRight      : -3,
        fontSize         : Style.em(1.1875),        
        position         : 'relative',       
        top              : 0,
        left			 : -1,
        right			 : 0,
        // width : (width+12),
        lineHeight 		 :0,
        color:'#fcfcfc',
        
    },      
    forgot: {		
    	position:'relative',
    	right:0,
    },
    orContainer:{
    	borderBottomWidth:1,
    	borderBottomColor:'#ccc',
    	marginTop:width/8,
    	marginBottom:width/15,
    },
    googleLog:{
    	color: '#fff',
    	width: 56,
        borderRadius: 28,
        height: 56,
        backgroundColor: '#D44326',
        borderWidth:1,
        margin		:6,
        marginTop	: 12,
        borderColor: '#B7291B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center'
    },
    fbLog:{
        backgroundColor: '#3b5998',
        borderWidth:1,
        borderColor: '#3b6998',
    },     
    startTest:{     
        marginTop: 10,      
        fontSize: Style.em(1.1875),       
    },      
    firstTile: {        
        marginTop: 4,       
    },
    testList: {
        borderColor     :'#dddddd',         
        borderWidth     : 1,
        borderTopWidth: 0,
        padding         : 10,
        alignItems      : 'center',
        backgroundColor: '#fbfbfb',
        marginLeft		: -5,
       	marginRight		:-5,
    },
    testListHead:{
        borderColor     :'#dddddd',         
        borderWidth     : 1,            
        borderTopRightRadius    : 7,
        borderTopLeftRadius    : 7,
        padding         : 10,
        backgroundColor: '#E9E9E9',
        marginLeft		: -5,
    	marginRight		:-5,
    },
    marginWidth: {
        width :(width-20),  
    },
    fcSidepaneHead: {
        height: 70,
        width:width-(width/5),
        backgroundColor:'#178484',
    },
    cardPane:{
		//marginTop: 70, 
    	height:height - 70,
	},
    lightBold:{
        fontWeight: '400',
    },
    testCogs:{
    	borderWidth:1,
    	borderColor:'#ddd',
    	padding				: 3,
    	paddingBottom		: 9,
    	paddingTop			: 5,
    	width				: width - 10,
        justifyContent		: 'space-around',
        flex				: 1,
        marginBottom		: -3,
        backgroundColor		: '#fcfcfc'	
    },
    def_container :{
    	alignItems		: 'flex-end',
    	paddingBottom	: 5,
    },
    answerBox: {
    	/*
		 * backgroundColor:'#F6F6F6', borderRadius: width/57, borderWidth : 1,
		 * borderColor: '#ddd', marginLeft: 2, width: width-20, overflow:
		 * 'hidden',
		 */
    	//width: width-40,
    	marginBottom:	width/40,
    },
    ebookContent: {
        flex: 1,
        marginTop: 76,
        padding: 5,
        paddingTop:0,
        width : width - 10,
        marginLeft: 0,
        marginRight:0
    },
    textLightGray:{
        color: '#ddd',
    },
    vCenter:{alignSelf      : 'center'},
    gridView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modal: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    textPrimary:{color:'#178484'},
    fullModalContent:{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        width: width-40,
        height: height-40,
        backgroundColor:'#F8F8F8',
        alignItems      : 'center',
        justifyContent  : 'center',
        paddingBottom: 40,
    },
    msgModel:{
		height:120,
		paddingBottom: 20
	},
	msgResetModel:{
		height:100,
		paddingTop: 22
	},
	popupModal:{
		 backgroundColor:'transparent',
	},
	bottom: {
    	bottom: 0,
    },
    quarterModalContent:{
		backgroundColor	: '#fcfcfc',
		position		: 'absolute',
		bottom:10,
		right:-1,
    },
    quarterModalContentBottom:{
    	position: 'relative',
        right: 0,
        bottom: 0,
        left: 0,
    },
    modalScroll:{height:height-24},
    popoverTextInput: {
        padding:15,
        height: height/6,
        fontSize: Style.em(0.9375),
        color: '#555',
        width: width,
        borderTopWidth: 1,
        borderTopColor: '#178484',
        paddingRight:70,
        marginBottom:-7,
    },
    fullWidthPos:{
    	justifyContent   : 'center',
	    alignItems       : 'center',
    	right: 0,
    	left: 0,
    	position: 'relative',
    },
    testHistoryModal:{paddingTop:12,height: 209},
    modalBtnClose:{
    	alignItems      : 'center',
		justifyContent  : 'center',
        backgroundColor:  '#1ab394',
        right: 16,
        bottom:32,
        position: 'absolute',
        height: 36,
        width:36,
        borderRadius: 19,
    },
    bottom: {
    	bottom: 0,
    },
    modalBtnCloseBottom:{
    	justifyContent   : 'center',
	    alignItems       : 'center',
    	backgroundColor:  '#1ab394',
    	right: 0,
    	bottom: 0,
    	left: 0,
    	height: 40,
    	position: 'relative',
    },
    tocTab:{
  		position:'absolute',
  		left:-50,
  		paddingLeft:50
  	},
    modalBtn: {
    	fontSize: Style.em(1.0625),
    	padding: 5,
    	fontWeight: '400'
    },
    modalBtnBottom: {
    	fontSize: Style.em(1.0625),
    	marginTop: 5,
    	paddingBottom: 1,
    	fontWeight: '400'
    },
    dateButton: {
    	borderWidth: 1,
    	borderColor: '#ccc',
    	backgroundColor: '#fff',
    	borderRadius: 3,
    	height: 25,
    	padding: 5,
    	justifyContent   : 'center',
	    alignItems       : 'center',
    },
    switchBtn: {
    	borderWidth: 1,
    	borderColor: '#ccc',
    	backgroundColor: '#fff',
    	height: 25,
    	padding:width/80,
    	justifyContent   : 'center',
	    alignItems       : 'center',
    },
    activeSwitch:{
    	marginRight: -1,
    	backgroundColor: '#207967',
    	// borderRightWidth: 1,
    },
    toc_heading_multi:{
		color:'#444',
		fontWeight:'600',
	    fontSize: Style.em(.1180),
	},
	tocChapter:{
		backgroundColor:'#fff',
		position: 'relative',
		top: 10,
		paddingBottom: 18,
		right: 30,
		paddingTop: 10,
	},
    switchBtn1: {borderTopLeftRadius: 3,borderBottomLeftRadius: 3,},
    switchBtn2: {borderTopRightRadius: 3,borderBottomRightRadius: 3,},
    startBtn: {
        width           : (width*3)/10,
        height          : width/9,
        borderWidth     : 1,
        borderColor     : '#AA0808',
        backgroundColor :'#AA0808',
        borderRadius    : 8,
    },
    linkWithbtn: {
        width           : (width*3)/10,
        height          : width/9,
        borderWidth     : 1,
        borderColor     : '#1AB293',
        backgroundColor :'#1AB293',
        marginLeft      : width/5,
        marginRight     : width/5,
        borderRadius    : 8,
    },
    sectionTag:{
        left:-4,
        top:7
    },
    bubles:{height: 20, width: 20, borderRadius: 10, backgroundColor: '#ffffff', marginRight: 6,},
    iosLineHeight: {
    	marginTop:-6,
    },
    ligther:{fontWeight:'500'},
    libLoading:{
    	position: 'absolute', 
    	top:height/2-60,
    	left: 33,
    	width: width-60,
    	backgroundColor:'#5c5d5f',
    	borderWidth:1,
    	borderColor:'#888',
    	borderRadius:3,
    	padding:15,
    	paddingTop:8,
    },
    lhSmLib: {lineHeight:15,fontWeight:'bold',fontSize:Style.em(1.25)},
    dbLeftIconsSize:{fontSize:Style.em(2.5)},
    dbLeftIconsSizeMini:{fontSize:Style.em(2.25)},
    dbLeftIcon:{width:42,textAlign:'center'},
    testNavigationBody: {
    	marginBottom:50,
    	padding: 12,
    },
    bkMarkNavigation:{
    	position:'absolute',
    	top:4,
    	left:7,
    },
    bookMrk:{marginLeft:32},
    bookMrkNot:{marginLeft:-32},
    alertComponent:{
		height: 170,
		paddingBottom:18
	},
    // Utility codes:
    nmtScroll:{marginTop:0},
    nmrScroll:{marginRight:0},
    nmbScroll:{marginBottom:0},
    nmlScroll:{marginLeft:0},
    
    mtSmScroll:{marginTop:3},
    mrSmScroll:{marginRight:3},
    mbSmScroll:{marginBottom:3},
    mlSmScroll:{marginLeft:3},
    
    mtScroll:{marginTop:5},
    mrScroll:{marginRight:5},
    mbScroll:{marginBottom:5},
    mlScroll:{marginLeft:5},
    
    mtMdScroll:{marginTop:10},
    mrMdScroll:{marginRight:10},
    mbMdScroll:{marginBottom:10},
    mlMdScroll:{marginLeft:10},
    
    mtLgScroll:{marginTop:15},
    mrLgScroll:{marginRight:15},
    mbLgScroll:{marginBottom:15},
    mlLgScroll:{marginLeft:15},
    
    mtXlScroll:{marginTop:20},
    mrXlScroll:{marginRight:20},
    mbXlScroll:{marginBottom:20},
    mlXlScroll:{marginLeft:20},
    
    mtXlXScroll:{marginTop:30},
    mrXlXScroll:{marginRight:30},
    mbXlXScroll:{marginBottom:30},
    mlXlXScroll:{marginLeft:30},
    
    mtnXlScroll:{marginTop:-20},
    mrnXlScroll:{marginRight:-20},
    mbnXlScroll:{marginBottom:-20},
    mlnXlScroll:{marginLeft:-20},
    
    mtMdnScroll:{marginTop:-10},
    mrMdnScroll:{marginRight:-10},
    mbMdnScroll:{marginBottom:-10},
    mlMdnScroll:{marginLeft:-10},
    
    mtLgNScroll:{marginTop:-15},
    mrLgNScroll:{marginRight:-15},
    mbLgNScroll:{marginBottom:-15},
    mlLgNScroll:{marginLeft:-15},
    
    mtnScroll:{marginTop:-5},
    mrnScroll:{marginRight:-5},
    mbnScroll:{marginBottom:-5},
    mlnScroll:{marginLeft:-5},
    
    mMdScroll:{margin:10},
    mtNSmScroll:{marginTop:-3},
    
    textCenterAndro:{textAlign:'center'},
    relativeAndro: {position: 'relative'},
    
    ptMdScroll:{paddingTop:10},
    pbMdScroll:{paddingBottom:10},
    
    // Utility codes END:
    
    linkWithIns: {
		width:width-115,
		height:42,
    },
    removeInstructor:{
    	marginTop:-2,
    	backgroundColor:'transparent',
    		
    },
    removeInstructor:{
    	paddingLeft:20,
    	paddingRight:5,
    },
    videoList: {marginLeft: 8},
    glossaryBox:{
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 10,
	},
	labDashboard:{
    	height: 78,		
    	paddingRight       :8,
    	flexDirection: 'row',
	    flex:1,	
	    backgroundColor	: '#FFF',		   
    	borderColor: '#ddd',
    	borderWidth		: 1,	
    	borderRadius: 5,
    	marginBottom    : 10,
    	width: width-21,
    	marginLeft: 2,
    	alignSelf   		    : 'center',
    },
    labDb:{top:60},
    labContent:{
    	width: width-117,
    	margin: 10,
    	marginRight: 12,
    },
	labIco:{
		width: 79,
		height: 78,
		backgroundColor:'transparent',
		alignItems     : 'center',
		justifyContent : 'center',
		alignSelf      : 'center',
		borderRightWidth:1,
		borderRightColor:'#ddd',
	},
	labLeftIconsSizeMini:{fontSize:Style.em(2.125),marginTop:2,},
	labLeftIconsSize:{fontSize:Style.em(2.5625)},
	labDuration:{
    	opacity: 0.9,
    	paddingTop: 3,
    	paddingLeft: 4,
    	paddingRight: 4,
    	paddingBottom: 3,
    	marginTop:1,
	},
	labTime:{
		fontSize: Style.em(0.875),
		color: '#555',
		fontWeight: '400',
		marginTop:-4,
	},
    dateData: {
    	// width: (width*2/3) -10 ,
    },
    halfWidthPlaner:{
		width:width-142,
	},
    /*--------------- SM MODULES STYLES---------------*/
	smLeftTab:{
    	marginLeft:0,
    },
    firstTabSmDefault:{
    	borderTopColor: '#D9D9D9',
    	backgroundColor:'#D9D9D9',
        borderLeftWidth: 0,
    },
    firstDragTabAlt:{	
    },
    TabSmDefaultAlternate:{
    },
    firstTabSm:{
    	borderTopColor:'#555',
    	backgroundColor:'#436C7F',
    },
    firstTabSmDrop:{
    	borderTopColor:'#555',
    	backgroundColor:'#D9D9D9',
    },
    firstTabSmDefaultDrop:{
    	borderBottomColor: '#D9D9D9',
    	backgroundColor:'#D9D9D9',
    },
    smTab:{
    	height: 32,
    	borderWidth:1,
    	backgroundColor:'#D9D9D9',
    	borderColor:'#555',
        marginBottom: -1,
    },
    smTabDrop:{
    	height: 32,
    	borderWidth:1,
    	backgroundColor:'#436C7F',
    	borderColor:'#555',
        marginTop: -2,
    },
    smTabDropActive:{
    	height: 32,
    	borderWidth:1,
    	backgroundColor:'#D9D9D9',
    	borderColor:'#555',
    	borderTopColor:'#ffffcc',
    	borderBottomWidth:0,
    },
    smDragContainer:{
    	borderColor:'#555',
    	borderWidth:1,
    	backgroundColor:'#D9D9D9',
    	borderTopLeftRadius:4,
    	borderTopRightRadius:4,
    },
    dragComponentMlist:{
    	borderRadius:3,
    	backgroundColor:'#D9D9D9',
    	justifyContent:'center',
    	alignItems:'center',
    },
    dragClone: {
    	width :(width-30),
        position:'absolute',
        marginLeft:13,
        alignSelf:'center',
    },
    dashedBorderRed:{
    	borderWidth:1,
    	borderColor:'red',
    	borderStyle:'dashed',
    	borderRadius:7,
    },
    cRContainer: {
        borderWidth:1,
        borderTopWidth:0.4,
        borderColor:'#4e7e80',
    },
    singleMatchListRow:{
    	borderColor:'#555', 
    	borderWidth:1,
    	borderRadius:3, 
    	marginTop:12,
    	padding:10,
    	paddingLeft:20,
    	width :(width-26),
    	backgroundColor:'#D9D9D9',
    },
    singleMLcount:{
    	position:'absolute',
    	left:8,
    	textAlign:'center',
    },
    singleMLDropAns:{
    	borderTopWidth:1,
    	borderBottomColor:'#666',
    	marginTop:10,
    	marginRight:-10,
    	marginBottom:-10,
    	marginLeft:-20,
    	backgroundColor:'#436C7F',
    	padding:9,
    	paddingLeft:20,
    	borderRadius:2,
    },
    undoSm:{
    	alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
    	position:'absolute',
    	top:-1,
    	right:-1,
    	borderColor : '#555',
        borderWidth : 1,
        borderRadius: 11,
        width       : 22,
        height      : 22,
    	backgroundColor:'#fff',
    	flex:1
    },
    leftButton: {
        left: 17,
        bottom :35,
        position:'absolute', 
    },
    rightButton: {
        right: 15,
        bottom :35,
        position:'absolute',
    },
    nextButtonSM:{
    	bottom : 50,
    },
    androidButton: {
        position : 'absolute',
        bottom   : 0,
        left     : 0
    },
    dragCloneWidth:{
    	width: width-40
    },
    dragClonetop:{
    	top:34,
    },
    dragClonetopRemid:{
    	top:59,
    },
    width27:{
    	width:width-33,
    },
    width28:{
    	width:width-33,
    },
    droppabelConWidth :{
    	width : width-26,
    },
    multimatchActivator :{
    	top:0,
		left:25,
		bottom:0,
		alignItems      : 'center',
		justifyContent  : 'center',
    },
    closeButtonDnd: {
    	top: 17,
    },
    /*--sm END--*/
    rotate180deg:{
        transform: [{rotate: '180deg'}],
    },
    infoWidth:{
		width:width-33,
		height:270,
	},
    doubleBackSwitch:{
        left           : 18,
        top            : 14,
        position       : 'absolute',
        alignSelf      : 'center',
        justifyContent : 'center',
        paddingRight   : 17,
    },
    webviewContainer: {
        position        : 'relative',
        paddingTop      : 10,
        marginTop       : 69 // do not change it
    },
    bookmarkButton : {
    	position: 'absolute', 
    	left: 7, 
    	top: 5,
    	padding:5,
    	backgroundColor:'transparent'
    },
    gradeBox: {
		borderColor		:	'#ddd',
		borderWidth		:	1,
		borderRadius	:	3,
		margin			:	9,
		marginTop		:	0,
		padding			:	8
	},
	xLargeFont : {
		fontSize : Style.em(2.5),
	},
	point:{
    	backgroundColor			: 'transparent',
    	position				: 'absolute',
    	right:0,
    	bottom:8,
    	left:0,
    },
    point2:{
        backgroundColor         : 'transparent',
        position                : 'absolute',
        right:0,
        bottom:8,
        left:4,
    },
    icon_play:{
    	backgroundColor			: 'transparent',
    	position				: 'absolute',
    	right:0,
    	bottom:17,
    	left:14,
    },
	donutIcon:{
    	fontSize:Style.em(1.59375)
    },
    bdrWidth1: {
		borderWidth: 1
	},
	bdrGray: {
		borderColor: 'gray'
	},
	bdrRed: {
		borderColor: 'red'
	},
	centerAlign: {
		alignItems: 'center'
	},
	bgDarkGray: {
		backgroundColor: '#4c4c4c'
	},
	bgDarkerGray: {
		backgroundColor: '#333333'
	},
	textDowny: {
		color: '#6ED3CF'
	},
    smOption:{justifyContent: 'center'},
});