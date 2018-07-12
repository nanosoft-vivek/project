import { 
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
const deviceType     = Platform.OS === 'ios' ? true : false ;
var { height, width } = Dimensions.get('window');
import Style from './DynamicDimension';
module.exports = StyleSheet.create({
	container: {
	    flex             : 1,
	    justifyContent   : 'center',
	    alignItems       : 'center',
	    backgroundColor  : '#fcfcfc',
	    width            : null,
        height           : null
	  },
	  activator: {
		  paddingTop:(width/10)-(width/17),
		  marginTop	:width/17,
	  },
	  iosActivator:{
		  position:'absolute',
		  top:(height/2),
		  right:0,
	  },
	  activatorExtMod:{
		  position:'absolute',
		  top:width/3,
		  right:0,
		  left:0,
		  bottom:0,
	  },
	  weblinkModal:{
	  	backgroundColor:'#059e7f',
	  	paddingTop:20
	  },
	  profileInput:{
	    	marginRight		: width/22,
	    	flex			: 1, 
	    },
	  sidePane: {
		  position       : 'absolute',
		  top            : 30,
		  bottom         : 50
	  },
	  resetIco:{
		  marginRight: Style.em(0.75),
		  marginLeft : Style.em(0.75),
	 },
	  loginTab:{
		  borderTopColor:'#34485E',
		  borderTopWidth:20
	  },
	  iosTools:{
	  	backgroundColor :'#34485E',
	  	paddingTop		:50
	  },
	  imageDownload:{
		  fontWeight			:'bold',
		  fontSize				: Style.em(1.4871),
		  color					:'#16a765',
		  backgroundColor		:'transparent',
		  position				:'absolute',
		  bottom				:0,
		  borderBottomWidth		: 1,
		 },
	  nbt:{borderTopWidth:0},
	  textPrimary:{color:'#1ab394'},
	  bodyHeight:{height: height-79},
	  bodyHeightQuiz:{height: height-79},
	  btnFullScreen: {
	    height		: width/8.6,
	    borderWidth	: 1,
	    borderRadius: 3,
	    width		: width-10,
	  },
	  fullScreenIOS:{
		  height		: height,
	  	  width			: width,
	  },
	  logButton:{
	    	borderWidth		: 1,		
	    	borderColor		: '#34485E',		
	    	backgroundColor	: '#3f5873',
	    	shadowColor: '#3f5873',
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
	  btnDefault:{
		backgroundColor	: '#3f5873',
		borderWidth     :  1,
		borderColor		: '#ccc',
		color           : '#333',
		shadowColor: '#ccc',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}	
	  },
	 btnSuccess:{
	 	backgroundColor	: '#22aadd',
	 	borderWidth     : 1,
	 	borderColor		: '#1F99C7',
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
		backgroundColor			: '#f0ad4e',
		borderWidth    			: 1,
		borderColor				: '#eea236',
		color           		: '#FFFFFF',
		shadowColor				: '#eea236',
        shadowOpacity			: 0.8,
        shadowRadius			: 1,
        shadowOffset			: {
        height					: 0.9,
        width					: 0.9,}	
	 },
	 btnDanger:{
		backgroundColor			: '#D64937',
		borderWidth    			: 1,
		borderColor				: '#d43f3a',
		color           		: '#FFFFFF',
		shadowColor				: '#d43f3a',
        shadowOpacity			: 0.8,
        shadowRadius			: 1,
        shadowOffset			: {
        				height	: 0.9,
        				width	: 0.9,
        }
	 },
	 modalClose:{
		 	backgroundColor		 : '#e01f1f',
	    	padding				 : (width/60)-0.5,
	    	borderRadius		 : width/2,
	    },
	  small: {
	    fontSize          		 : Style.em(0.625),
	    textAlign         		 : 'center'
	  },
	  textInput: {
		height					: width/8.5,
		backgroundColor			: '#ffffff',
		borderWidth				: 1,
		borderColor				: '#ddd',
		color					: '#555555',
		borderRadius			: 3,
	},
	iconEmail: {
		borderColor            : '#cccccc',
		borderWidth            : 1,
		borderBottomLeftRadius : 2,
		borderTopLeftRadius    : 2,
		height                 : 40,
		width                  : 40,
		backgroundColor        : '#ffffff',
		textAlign              : 'center'
	},
	clear: {
	  marginTop				: 2
	},
	error: {
		color  			    : 'red',
		padding				: 5
	},
	center: {
		alignItems      	: 'center',
		justifyContent		: 'center'
	},
	logSwitch:{
		right				: width/35,
		top					: 20,
		position			: 'absolute',
		alignSelf      		: 'center',
		justifyContent		: 'center',
		height				: width/7.6,
	},
	navTop: {
		position			: 'absolute',
		top					: 0,
		right				: 0,
		left				: 0,
	},
	navbarTitle: {
		color           	: '#fff',
		fontSize        	: Style.em(1.3618),
		fontWeight      	: "400",
		alignSelf       	: 'center',
		textAlign			: 'center',	
	},
	titleWidth: {
		width				: width-100
	},
	labTitleWidth: {
		width				: width-(width/2.3),
		textAlign			:'left',
		marginLeft			: -(width/4.5),
	},
	glossaryBox:{
		padding				: 10,
		marginTop			: 10,
	},
	labDbIcons: {
		position 			: 'absolute', 
		top					: (height <= 480) 
									? width/11
									: ((height > 480 && height < 667) 
											? width/10.9
											: ((height >= 667 && height < 736) 
													? width/12.5 
													: width/12.3
											 	)
										),
		right 				: width/9.5,
	},
	middle:{
		alignItems   	    : 'center'
	},
	navbarTitleOnly:{
		color               : '#ffffff',
		fontSize            : Style.em(1.25),
		fontWeight          : "500",
		alignSelf           : 'center',		
		marginRight         : 56,
	},
	sidebar: {
        padding             : 10,
        paddingTop     		: 30,
    },
    linkText: {
    	flex            	: 1,
        fontSize        	: Style.em(1.125),
        color           	: '#fff',
        fontWeight     	 	: 'bold'
    },
    navbar: {
		backgroundColor	    : '#008080',
		position		    : 'absolute',
		left         	    : 0,
		right          	    : 0,
		top					: 20, 
		shadowColor			: '#888',
        width               : width,
        shadowOpacity		: 0.8,
        shadowRadius		: 3,
        shadowOffset		: {
        		height		: 3,
        		width		: 0,
        },
		height				: width/7.6,
        justifyContent		: 'center',
			
	},
	searchContainer: {		
    	alignItems			: 'center',
    	position			: 'absolute',
    	top					: 0,
		left           		: 0,
		right         		: 0,
    	borderTopWidth		: 20,
    	backgroundColor		: deviceType ? '#5a6d7d' : '#1fadad',
    	borderTopColor		: '#34485E',
    	shadowColor			: '#5a6d7d',
        shadowOpacity		: 1,
        shadowRadius		: 4,
        shadowOffset		: {
        			height	: 3,
        			width	: 3,
        }  
    },		
    serachBackBtn: {		
	    position			: 'absolute',		
	    left				: 14,		
	    top					: 0,
	    bottom				: width/65,
	    justifyContent		: 'center',
	    paddingTop       	: width/55,
	    backgroundColor		: '#fff',
    },		
    searchLib: {		
    	paddingLeft    	  	: width/8,		
    	paddingBottom    	: width/100,		
    	paddingRight     	: width/80,	
    	paddingTop       	: width/70,	
    	fontSize         	: Style.em(1.29375),		
    	height           	: width/7.68,
    	marginRight			:-5,
    	borderColor      	: '#5a6d7d',	
    	backgroundColor  	: '#fff',
    	borderWidth      	: 1,		
    	right			 	: -4,		
    	left 			 	: -1,		
    	top              	: -1,
    	color				: '#5a6d7d',
    },	
    innerContainer: {
    	position        	: 'absolute',
    	top             	: width/5.5, // do not change it
    	bottom				: 0,
    	paddingTop			: Style.em(1.36184),
    	right				: 0,
    	left				: 0,
    },
    ebookContainer:{
    	position       		: 'absolute',
    	top             	: width/8.5, // do not change it
    	bottom				: 0,
    	left				: 0,
    	right				: 0,
    	paddingTop			: width/14,
    },
    innerContainerSearch:{
    	position        	: 'relative',
    	top             	: width/5.5, // do not change it
    	paddingTop      	: width/19, // do not change it
    },
    iosInnerContainer: {
    	position        	: 'absolute',
    	top             	: width/5.5, // do not change it
    	bottom				: 0,
    	paddingTop			: width/19,	
    	left				: 0,
    	right				: 0,
    },
    innerContainerDb: {
    	position       	 	: 'absolute',
    	top            		: width/5.5, // do not change it
    	bottom				: 0,
    	paddingTop			: width/19,
    	right				: 0,
    	left				: 0,
    },
    navigationContainer:{
    	position        	: 'absolute',
    	top             	: width/16.5, // do not change it
    	bottom				: 0,
    	paddingTop			: width/8,
    	right				: 0,
    	left				: 0,
    },
    smView:{
    	margin				: width/30,
    	marginTop			: width/129,
    },
    profileInnerContainer: {
    	position       		: 'relative',
    	top            		: width/17,
    	paddingLeft			: width/20
    },
    profileHeader:{
    	backgroundColor		: '#f6f6f6',
    	position       		: 'relative',
    	top             	: -(width/30),
    	paddingTop			: width/16,
    	borderBottomWidth	: 1,
    	borderBottomColor	: '#ddd',
    },
    Profilepic: {
  		width				: width/3.5,
  		height				: width/3.5,
  		backgroundColor		: '#1ab394',
  		borderColor			: '#fff',
  		borderWidth			: 2,
  		borderRadius		: (width/3.5)/2,
  		marginBottom        : width/18,
     },
     profile: {
   		width				:  (width/4)+10,
   		height				:  (width/4)+10,
   		borderRadius		: ((width/4)+10)/2,
   		backgroundColor		: '#1ab394',
  		borderColor			:'#fff',
  		borderWidth			: 2,
     },
     loginLogo: {
    	 width				: (height <= 480) ? width/3.8 : (width/4)+5,
    	 height				: (height <= 480) ? width/3.8 : (width/4)+5,
    	 borderRadius		: (height <= 480) ? ((width/3.8)/2) : ((width/4)+5)/2,
    	 backgroundColor	: '#1ab394',
   	     borderColor		:'#fff',
   		 borderWidth		: 2,
     },
     orContainer:{
     	width				: width,
     	borderBottomWidth	: 1,
     	borderBottomColor	: '#ccc',
     	marginTop			: (height <= 480) ? width/15 : width/5,
     	marginBottom		: width/15,
     },
	 camera:{
		  padding			: width/44,
		  paddingBottom		: (width/44)-2,
		  borderRadius		: (width/44) + width/25,
		  backgroundColor	: '#1ab394',
		  position			:'absolute',
		  bottom			: width/15,
		  right				: -(width/40),
	},
    tocScrollView:{
    	paddingTop    	    : 0,
    },
    elastic:{
    	marginTop : ( width / 7.6 ) + 20
    },
    tocHead:{ 
    	height				: width/4.6,
    },
    tocHeadNormal:{
    	height				: width/4,
    },
    heightInnerContainer:{
    	height				: height - ((width/31) + width/12.5)
    },
    innerContainer2			: {
        marginTop           : 125,
    },
    courseBox: {
    	backgroundColor		: '#ffffff',		   
    	borderColor			:'#dddddd',		    
    	borderWidth			: 1,		    
    	marginBottom	   	: -2,		    	
    	flexDirection		: 'row',		    	
    	//width				: (width-15),		    	
    	marginLeft  	    : 7,
    	marginRight  	    : 7,
    	padding				: width/32,
        // flexWrap			: 'nowrap'
    },
    courseBoxLA: {
    	backgroundColor		: '#ffffff',		   
    	borderColor			:'#dddddd',		    
    	borderWidth			: 1,		    	
    	flexDirection		: 'column',		    	
    	padding				: (width/32)-3,
    	marginLeft			: width/17,		
    	marginRight			: width/17,		
    	marginTop			: width/62,
    	marginBottom		: width/35,
        // flexWrap			: 'nowrap'
    	borderLeftWidth		: 3,
    	borderLeftColor		:'#3f5873',
    	borderRadius		: ((width/32)-3)/2,
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
    	position			: 'relative',		
    	//top				: width/300,
    	flex				: 1,
    	//width				:(width-(width/2.35)),
    },
    lastAccess:{
    	position			: 'absolute',
    	bottom				: width/33,
    	left				: (width/3.11),
    	fontSize			: Style.em(0.9513),
    	color				: '#b0281a',
    	backgroundColor		: 'transparent',
    },
    lastAccessPlay:{
    	position			: 'absolute',
    	bottom				: (width/23),
    	color				:'#fff',
    	left				: (width/9.6),
    	transform			: [{rotate: '45deg'},],
    	opacity				: 0.8,
    	height				: width/8.7,
    	width				: width/8.7,
    	borderRadius		: (width/8.5)/2,
    	backgroundColor		: '#ffffff90',
    	alignItems			: 'center',
        justifyContent		: 'center',
        alignSelf			: 'center',
        borderWidth			: 1,
        borderColor			: '#fefefe99'
    },
    psm          : { padding         : 3             },
    p            : {dding         : 5             },
    pmd          : { padding         : 10            },  
    plsm         : { paddingLeft     : 3             },
    pl           : { paddingLeft     : 5             },
    plmd         : { paddingLeft     : 20            }, 
    pllg         : { paddingLeft     : 20            }, 
    prsm         : { paddingRight    : 3             },
    pr           : { paddingRight    : 5             },
    prmd         : { paddingRight    : 10            }, 
    prlg         : { paddingRight    : 20            }, 
    ptsm         : { paddingTop      : 3             },
    pt           : { paddingTop      : 5             },
    ptmd         : { paddingTop      : 10            },  
    pbsm         : { paddingBottom   : 3             },
    pb           : { paddingBottom   : 5             },
    pbmd         : { paddingBottom   : 10            }, 
    midumWidth   : { width           : (width*2+50)  },
    screenWidth2 : { width           : ((width*3)/4) },
    textGray     : { color           : '#676767'     },
    textWhite    : { color           : '#ffffff'     },
    cb			 : { backgroundColor:'#eee'},
	cb11		 : { backgroundColor:'#BA6089'}, 		  
	cb12		 : { backgroundColor:'#66BB6A'},   		 
	cb21		 : { backgroundColor:'#4489FE'}, 		
	cb15		 : { backgroundColor:'#FADC60'},   		
	cb31		 : { backgroundColor:'#E57373'},   		
	cb7			 : { backgroundColor:'#F48FB1'}, 		
	cb1			 : { backgroundColor:'#F4A816'},  		
	cb0			 : { backgroundColor:'#A1897F'},   		
	cb8			 : { backgroundColor:'#B0BFC6'},   		
	cb9			 : { backgroundColor:'#FF5444'},   		
	cb10		 : { backgroundColor:'#FE4A65'},   		
	cb16		 : { backgroundColor:'#FFA500'},		
	cb17		 : { backgroundColor:'#0192FF'},   		
	cb18		 : { backgroundColor:'#B9B299'},  		
	cb2		 	 : { backgroundColor:'#A7D5C1'},  		
	cb3			 : { backgroundColor:'#F5D75F'},  		
	cb4			 : { backgroundColor:'#B5CE34'},  		
	cb5			 : { backgroundColor:'#DCB664'},   		
	cb6			 : { backgroundColor:'#B06F50'},   		
	cb13		 : { backgroundColor:'#E59689'},   		
	cb14		 : { backgroundColor:'#CDC697'},   		
	cb19		 : { backgroundColor: 'goldenrod'}, 		
	cb22		 : { backgroundColor:'#19A966'},  		
	cb23		 : { backgroundColor:'#FFC927'},  		
	cb24		 : { backgroundColor:'#CDDC39'},  		
	cb25		 : { backgroundColor:'#0C6667'},   		
	cb26         : { backgroundColor:'#CA8E7F'},  		
	cb27         : { backgroundColor:'#BFE1DB'},		
	cb28		 : { backgroundColor:'#693AB8'},		
	cb29		 : { backgroundColor:'#FF5534'},		
	cb30		 : { backgroundColor:'#FADC60'},
	bgGray       : { backgroundColor:'#ccc'},
    rowStyle     : { flexDirection   : 'row'         },
    columnStyle  : { flexDirection   : 'column'      },
    selfCenter   : { alignSelf       : 'center'      },
    correct      : { marginTop       : 120           },
    backButton:{
    	position:'absolute',
    	left:(width/30),
    	top:((width/30)-3),
    	width:(width/14),
    },
    disabled:{
    	opacity: 0.4
    },
    title1: {
    	fontSize     : Style.em(0.75),
    	fontWeight   : 'bold'
    },
    title2: {
    	fontSize     : Style.em(0.959),
    	fontWeight   : 'bold'
    },
    title3: {
    	fontSize     : Style.em(1.078125),
    	fontWeight   : 'bold'
    },
    title4: {
        fontSize     : Style.em(1.29375),
        fontWeight   : 'bold'
    },
    cb: {
    	borderColor  : '#dddddd',
        borderWidth  : 1
    },
    dashboardBox :{
    	borderColor       : '#dddddd',
    	borderBottomWidth : 1,
    	paddingTop        : 15,
    	paddingBottom     : 15,
    	backgroundColor   : '#ffffff',
    	width             : width,
    	flexDirection     : 'row',
    },
    tabbar: {
    	flexDirection     : 'row',
    	position          : 'absolute',
    	bottom            : 0,
    	right             : 0,
    	backgroundColor   : '#ffffff',
    	borderColor       : '#dddddd',
    	borderTopWidth    : 1,
    	width             : width,
    	height            : width/10, // do not change it is standred
    	alignItems        : 'center',
    },
    fcDivider:{
    	height: width/10, 
    	width: 3,
    },
    tabBarButton: {
    	width             : (width/4),
    	alignItems        : 'center',
    	justifyContent    : 'center',
    },
    tabBarText: {
    	color             : '#676767',
    	fontSize          : Style.em(0.75)
    },
    buttons: {
        backgroundColor   : '#1AB394',
        borderWidth       : 2,
        borderStyle       : 'solid',
        borderColor       : '#1AB394',
        padding           : 10,
        borderRadius      : 3,
        width             : (width-20),
        justifyContent    : 'center',
        alignItems        : 'center',
    },
    colorWhite: {
        color             : 'white',
        fontWeight        : 'bold'
    },
    colorGreen: {
        color             : 'rgb(0, 128, 0)',
        fontWeight        : 'bold'
    },
    colorRed: {
        color             : 'red',
        fontWeight        : 'bold'
    },
    colorBlack: {
        color             : 'black',
        fontWeight        : 'bold'
    },
    answer: {
        position          :'relative',
        bottom            : 100,
        left              : 120,
        width             : 100,
        backgroundColor   : 'transparent',
        borderWidth       : 0,
        opacity           : 0,
    },
	toc_heading:{
	    color:'#1ab394',
	    fontWeight:'700',
	    fontSize: Style.em(1.125),
	},
	toc_heading_multi:{
		color:'#444',
		fontWeight:'600',
	    fontSize: Style.em(1.125),
	},
	tocChapter:{
		backgroundColor:'#fff',
		position: 'relative',
		top: 10,
		paddingBottom: 18,
		right: 30,
		paddingTop: 10,
	},
	toc_content:{
	    color:'#474747',
	    fontWeight:'400',
	    fontSize: Style.em(1.045),
	    lineHeight: (width > height) ? (width*.04) : (height*.04),
	},
	mdmg:{
		marginTop:5,
	},
	sidebarTab:{
		height: width/7.35,
		paddingLeft: width/50,
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
	moveRight: {
    	justifyContent	: 'flex-end',
    	alignItems		: 'flex-end',
    },
    moveLeft: {
    	justifyContent	: 'flex-start',
    	alignItems		: 'flex-start',
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
	wizardIco:{
		position: 'relative',
		top: (height/2)-((width/4)+10)
	},
	blankUser:{
		fontSize: Style.em(7.09375),
		color: '#ccc',
	},
    roundCircle: {
		width: (width/4)+10,
		height: (width/4)+10,
		backgroundColor: '#E9E9E9',
		borderRadius: ((width/4)+10)/2,
		overflow: 'hidden',
	},
	profileImage: {
		backgroundColor: 'transparent',
		alignSelf:'center'
	},
	controlLabel: {
		fontSize: Style.em(0.959),
		fontWeight: '500',
		color: '#333',
	},
	mbxm  : { marginBottom : 3 },
	mtxm  : { marginTop    : 3 },
	mrxm  : { marginRight  : 3 },
	mlxm  : { marginLeft   : 3 },
	mb    : { marginBottom : 5 },
	mt    : { marginTop    : 5 },
	mr    : { marginRight  : 5 },
	ml    : { marginLeft   : 5 },
	mbsm  : { marginBottom : 10 },
	mtsm  : { marginTop    : 10 },
	mrsm  : { marginRight  : 10 },
	mlsm  : { marginLeft   : 10 },
	mbmd  : { marginBottom : 20 },
	mtmd  : { marginTop    : 20 },
	mrmd  : { marginRight  : 20 },
	mlmd  : { marginLeft   : 20 },
	mblg  : { marginBottom : 30 },
	mtlg  : { marginTop    : 30 },
	mrlg  : { marginRight  : 30 },
	mllg  : { marginLeft   : 30 },
	mbxl  : { marginBottom : 40 },
	mtxl  : { marginTop    : 40 },
	mrxl  : { marginRight  : 40 },
	mlxl  : { marginLeft   : 40 },
	msm   : { margin       : 10 },
    mbxl2 : { marginBottom : 50 },
	mbxl3 : { marginBottom : 65 },
	center: {
		alignItems     : 'center',
		justifyContent : 'center',
		alignSelf      : 'center'
	},
	middle:{justifyContent     : 'center'},
	italic:{fontStyle:'italic'},
	sideContainer: {
    	position  : 'relative',
    	marginTop : 69
    },
    tocMenuModal:{
		height: height / 6,
	},
	tocMenuContainer:{
		padding:width/20
	},
    vCenter:{alignSelf      : 'center'},
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
    listCounter:{
    	width: (width/18)+10,
    },
    listCounterEbook:{
    	width: (width/18)+20,
    },
    testText: {
    	marginTop			: width/33,
    	position			:'relative',
    	left				: -(width/70)
    },
    textContent:{
    	lineHeight			: width/20,
    },
    reviewText:{
    	color: '#FFF',
    	fontWeight: 'bold',
    },
    listContent:{
    	flex: 1
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
    	height: (height/2)-120,
    	borderColor: '#ddd',
    	backgroundColor: '#f9f9f9',
    	borderBottomWidth: 1,
    	borderRadius: 2,
    	marginLeft:4,
    },
    flashcardBoxBody:{
        marginTop : -Style.em(2.9),
        height: (height/2)-120,
    },
    bookmarkIcon : {
        height : Style.em(2.9),
        width  : width * 0.09,
        marginLeft : Style.em(0.65),
    },
    fullContainer :{
    	position:'absolute',
    	top:0,
    	right:0,
    	bottom:0,
    	left:0
    },
    bgImage:{
    	height: null,
    	width: null,
    	backgroundColor:'rgba(0,0,0,0)',
    	resizeMode: 'cover',
    },
    cardHead:{
    	backgroundColor:'#888',
    	borderBottomWidth:1,
    	borderColor:'#ddd',
    	backgroundColor:'#888', 
        width : (width-30),
    },
    cardTitleWidth : {
        width : width - ( width * 0.09 + 44 ),
        //backgroundColor:'red', 
    },
    pmdCard:{padding:10},
	h1: {
		fontSize: Style.em(1.6842),
		fontWeight:'bold'
	},
	sidebarTitle:{
		width: ((width*2)/3),
		fontWeight:'bold',
		fontSize: Style.em(0.875),
		paddingBottom: 10,
		paddingLeft: 5
	},
	bottomMargin:{
		height:65,
		width: ((width*2)/3),
	},
	flashcard_btn:{
		width:40,
    	backgroundColor:'green',
    	borderWidth:0,
    	borderRadius:40,
    	padding:2,
    	height:40
    },
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
    btn_diff:{opacity:.6},
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
    shadow: {
        backgroundColor: '#ffffff',
        shadowColor: '#888',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 4
        }
      },
      card_shadow:{
    	  shadowColor: '#888',
          shadowOpacity: 0,
          shadowRadius: 1,
          shadowOffset: {
          height: 0.5,
          width: 0.5,},
          backgroundColor:'transparent',
      },
      selectedItem:{
    	backgroundColor:'#727272'
      },
    pic: {
  		width:70,
  		height:70,
  		backgroundColor: '#E9E9E9',
  		borderColor:'#dddddd',
  		borderWidth: 1,
  		borderRadius:35,
  		margin: 5,
      },
    sidePaneBox:{
    	borderColor: '#dddddd',
    	borderBottomWidth: 1,
    	paddingTop: 5,
    	paddingBottom: 5,
    	backgroundColor:'#ffffff',
    	flexDirection: 'row',
    },
    midcenter:{
  		  flex:1,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
  	},
  	headerWidth:{
  		backgroundColor:'#3f5873',
  	},
  	activeTab:{
  		alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor:'#2d4156',
	},
	normalTab:{
		alignItems      : 'center',
		justifyContent  : 'center',
	},
  	greyBorderBottom: {
  		borderBottomWidth:1,
  		borderColor:'#ddd'
  	},
  	greyBorderTop: {
  		borderTopWidth:1,
  		borderColor:'#ddd'
  	},
  	tocTab:{
  		position:'absolute',
  		left:-50,
  		paddingLeft:20
  	},
  	smOption:{justifyContent: 'center'},
    textLabel: {
    	width: (width*2)/9
    },
  	cb17:{backgroundColor:'#bbbbbb'},
    noborder:{borderWidth:0},
    width9:{width:width*9},
    smheight:{height:height*1/4},
    mdWidth2:{width:width*1/2+70},
    userInfo: {
    	width: (width*5)/9-2
    },
    fullWidth: {
    	width: width
    },
    fullWidth5: {
    	width: width+5
    },
    contentWidth:{
    	width: (width*3)/4,
    },
    numberWidth: {
    	width: width/16
    },
    Width2: {
    	width: (width*5)/8
    },
    top1:{top:0},
    top2:{top:80},
    cb16:{backgroundColor:'#ffffff'},
    popoverContainer: {
        width: width,
        height: height/8,
        paddingTop:  height/70    
    },
    popupMain: {
    	 position: 'absolute',
         top:  0,
	},
	darkGray:{color: '#5e5e5e'},
	popoverTextInput: {
		padding:width/16,
		paddingBottom:width/10,
		height: height/6,
		fontSize: Style.em(1.035),
		color: '#555',
	  	width: width,
	  	borderTopWidth: 1,
	  	borderTopColor: '#ddd',
	  	alignSelf: 'center',
	},
	width4: {
		width: (width*7)/8
	},
	alertComponent:{
		height: 140,
	},
	popoverBox:{
		height: height/21,
		width: width
	},
	leftPopoverBox:{
		width: width,
		height: height/9
	},
	inputPopoverBox:{
		width: (width*8)/17,
		 height: height/20,
	},
	width3: {
		width: (width*4)/7
	},
	filterIcon: {
		width: width/5,
		height: height/20
	},
	progressBar: {
		position: 'absolute',
		backgroundColor: 'transparent'
	},
	panelContainer: {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    ebookNav:{
    	//paddingTop: width/90,
    },
    panelTitle: {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    panelBody: {
        padding     : 10,
        paddingTop  : 0
    },
    resultNumber: {
    	color: '#b0281a',
    	fontWeight: 'bold',
    	fontSize: Style.em(0.959)
    },
    chapterName: {
    	color: '#b0281a',
    	fontSize: Style.em(1.078125)
    },
    correctNumber: {
    	color: '#b0281a',
    	fontWeight: 'bold',
    	fontSize: Style.em(1.078125)
    },
    innerLay: {
    	width: width/4, 
    	height: width/4, 
    	flex: 1, 
    	justifyContent: 'center',
		alignItems: 'center', 
		backgroundColor: '#fff'
    },
    questionList: {
    	borderColor: '#ddd',
    	borderBottomWidth: 1,
    	height: (width/5.8),
    	backgroundColor: '#fefefe',
    },
    linkWithIns: {
    		//width:width-130,
    		height:35
    },
    questionListLesson: {
    	borderBottomWidth: 1,
    	borderBottomColor: '#ddd',
    	height: (width/6),
    },
  	correctAns:{
  		color: '#5cb85c',
  	},
  	incorrectAns:{
  		color: '#d44a44',
  	},
  	textBlack:{color:'#333'},
    questionList2: {
    	borderColor: '#999',
    	borderTopWidth: 1,
    	height: width/6
    },
    fullHeight: {
    	height: height,
    },
    bullet:{
    	width: 33,
    	fontWeight: 'bold',
    },
    practiceTxt:{
    	 fontSize: Style.em(1.101),
    	 fontWeight: '500',
    	 width: 140,
    	 textAlign: 'center',
    	 marginTop: 4,
    	 backgroundColor: 'transparent',
    	 color: '#444',
    },
    practiceSlider:{
    	overflow: 'visible',
    	backgroundColor:'transparent',
		justifyContent  : 'center',
    },
    helpSwitch:{
    	marginTop:width/40,
    },
    practiceType:{
    	fontSize		: Style.em(2.5875),
    	color			:'#666',
    	fontWeight		: '400',
    },
    horizontal_line: {
    	height			: 1,
    	backgroundColor : '#ccc',
    	marginRight		: 12,
    	marginLeft		: 12,
    },
    QuestionLine: {
    	overflow:'hidden',
    	flex: 1,
    },
    fontSize1: {
    	fontSize: Style.em(0.959)
    },
    overflowHidden:{overflow:'hidden'},
    overflowVisible:{overflow:'visible'},
    fontSize2: {
    	fontSize: Style.em(1.725)
    },
    height20   : { height     : height / 20 },
    height18   : { height     : height / 18 },
    height8    : { height     : height / 8  },
    height7    : { height     : height / 7  },
    height6    : { height     : height / 6  },
    height5    : { height     : height / 5  },
    ptlg       : { paddingTop : 20        },
    settingbtn : {
    	width                 : 50,
    	borderWidth           : 1,
    	borderColor           :'#ddd',
    	borderRadius          : 10,
    	right                 : 12,
    	borderTopLeftRadius   : 0,
    	borderBottomLeftRadius: 0
    },
    removeInstructor:{lineHeight:9},
    width60 		: { width : width-60},
    width30 		: { width : (width/3)-5},
    cb20   			: { backgroundColor:'#F8F8F8'},
    sidePaneSnippet: {
    	width		: width*.65,
    	//height		: width/18,
    	overflow	: 'hidden',
    },
    leftWidth: {
    	width				: width/4,
    },
    leftWidthMargin			: {
    	width				: (width-(width/20))/4,
    },
    leftWidthMarginPane		: {
    	width				: (width-(width/20))/5,
    },
    prepEngineIndicators	:{
    	width				: width,
    	marginTop			: width/20,
    },
     prepEngineIndicatorsPane:{
    	width				: (width/1.25),
    	position			: 'absolute',
    	top					: width/6.3,
    	borderBottomWidth	: 1,
    	borderBottomColor	:'transparent',
    	paddingBottom		: width/29,
    	paddingTop			: width/32
    },
    prepEngineBody:{
    	width				: width,
    	height				: height,
    	paddingTop			: 10,
    },
    prepEngineDrawer:{
    	width				: (width/2)+124,
    	height				: height,
    	marginTop			:-20,
    },
    prepEngineResult:{
    	width				: width-(width/5),
    	height				: (height-(height/4.9)),
    	backgroundColor		: '#fff',
    	marginTop			: width/4.1,
    },
    sidepaneWidth:{
    	width				: (width/1.25),
    	borderTopWidth		: 20,
    	borderTopColor		: '#34485E',
    },
    progressTxt:{
    	fontSize			: Style.em(0.625),
    	paddingTop			: 3,
    },
    centerWidth: {
    	width				: width/2
    },
    thirdWidth: {
    	width				: width/3
    },
    testNavigationBody: {
    		marginBottom	: 39,
    		padding			: 12,
    		paddingBottom	: 40,
    },
    connectTIredo:{
    	position			: 'relative',
    	right				: -(width/10),
    },
    toolbarIcon:{
    	position			: 'absolute',
    	bottom				: 0,
    	left				: 0,
    	right				: 0,
    	height				: Style.em(3.1875),
    	borderTopWidth 		: 1,
    	borderTopColor 		: '#ccc',
    	backgroundColor		: '#fdfdfd',
    },
    toolbarReviewIndicator	:{
        backgroundColor		: 'transparent',
    },
    toolbarIndicator		: {
    	position			: 'absolute',
        width               : width * 0.3,
    	top					: 20,
        height              : width/7.6,
    	left				: width * 0.35,
    	right				: width * 0.35,
    },
    toolbarQuizReviewIndicator:{
    	right				: (width/2)-width/4,
    },
    timervalue:{
	    width				: 110,
	    position			: 'absolute',
	    right				: 18,
	    top					: 1,
	},
    testHistoryHeader: {
    	width				: width,
    	height				: width/5,
    	backgroundColor		: '#6FBACE',
    },
    testHistoryBody: {
    	width				: width-20,
    	height				: height/2 - height/6,
    	margin				: 10,
    	backgroundColor		: '#F6F6F6',
    	borderRadius		: width/37,
    	borderWidth			: 1,
    	padding				: 10
    },
    smallTab: {
    	width				: width/3,
    	height				: 52
    },
    twoTab: {
        width				: width/2,
        height				: 52
    },
    itemBox: {
    	backgroundColor		: '#fff',
    	borderRadius		: 5,
    	borderWidth			: 1,
    	borderColor			: '#ddd',
    	margin				: 10,
    	width				: width-14,
    },
    tabHeader: {
    	backgroundColor     : '#E9E9E9',
    	borderTopLeftRadius : 5,
    	borderTopRightRadius: 5,
    	width               : width-20,
    	padding: 8,
    },
    bottomRadius: {
    	backgroundColor     : '#E9E9E9',
    	height              : width/37,
    	width               : width-22,
    	position            : 'relative',
    	bottom              : width/37,
    },
    testHistoryBox: {
    	borderBottomWidth   : 1,
    	height			    : height/6
    },
    resultIndicator: {
    	justifyContent 	    : 'center',
    	backgroundColor	    : '#1ab394',
    	alignItems       	: 'center',
    	borderRadius	    : 150,
    	padding			    : 2,
    	height			    : width/13,
    	width				: width/13,
    	marginLeft			: 2,
    	alignSelf      		: 'center',
    	overflow		    : 'visible',
    },
    resultContent:{
    	marginLeft			: 12,
    	justifyContent  	: 'center',
    	width				: width-94,
    },
    radioButtonOuter: {
    	height           	: width/19.2,
    	width             	: width/19.2,
    	borderRadius      	: (width/19.2)/2,
    	borderWidth       	: 1.5,
    	//borderColor       : '#ccc',
    	alignItems        	: 'center',
    	justifyContent    	: 'center',
    	alignSelf		  	: 'center',
    	marginTop		  	: -2.2,
    },
    radioButtonInner: {
    	height            	: width/38.2,
    	width             	: width/38.2,
    	borderRadius      	: (width/38.2)/2,
    },
    testOption:{
    	//paddingLeft		  	: width/50,
    	borderWidth		 	: 1,
    	borderColor		  	: '#d3d3d3',
    	borderRadius	  	: 2,
    },
    optionCorrectMode:{
    	borderColor		  	:'#5bb720',
    },
    optionIncorrectMode:{
    	borderColor		  	:'#af2517',
    },
    testOptionTab:{
    	position		  	: 'absolute',
    	left			 	: -(width/50),
    	top				  	: 0,
    	bottom			  	: 0,
    	width			 	: width/6.4,
    	borderRightWidth  	: 1,
    	borderRightColor  	: '#d3d3d3',
    	backgroundColor	  	: 'rgba(101, 97, 97, 0.76)',
    },
    testOptionCorrect:{
    	borderRightColor  	: '#5bb720',
    	backgroundColor	  	: '#65a00d',
    },
    testOptionIncorrect:{
    	borderRightColor  	: '#af2517',
    	backgroundColor	 	: '#e14747',
    },
    checkboxButton: {
    	height           	: width/22,
    	width             	: width/22,
    	borderWidth      	: 1,
    	borderColor      	: '#fff',
    	alignItems          : 'center',
    	justifyContent      : 'center',
    	alignSelf		  	: 'center',
    	marginTop		 	: -2,
    },
    slider1: {
        width				: (width-67),
    },
	remInstructorBtn: {marginTop:2},
	timer: {
		backgroundColor		: '#1ab394',
		position			: 'absolute',
		top					: 53,
		height				: 45,
		shadowColor			: '#888',
        shadowOpacity		: 0.6,
        shadowRadius		: 1,
        shadowOffset		: {
	        height			: 2,
	        width			: 2,
	        }	
    },
    navbar2: {
		backgroundColor	: '#3f5873',
		position:'absolute',
		top: 0,
		right: 0,
		left: 0,
		borderTopWidth:20,
		borderTopColor: '#34485E',
        shadowColor         : '#888',
        width               : width,
        height              : ( width/7.6 ) + 20 ,
        justifyContent      : 'center',
    },
    resultContainer: {
	    flex			: 1,
	},
	msgModel:{
		height:width/2,
	},
	msgModelOnly:{
		height:width/3,
	},
	msgModelWelcome:{
		height:width/2.99
	},
    checkType: {
    	marginTop: -50,
    },
    timerText: {
    	fontWeight:'500',
    	fontSize: Style.em(1),
    	color:'#fff'
    },
    topBorder : {
    	borderColor		  : '#ddd',
    	borderTopWidth	  : 1,
    },
    bookmarkpos : {
    	position: 'relative',
    	right	: (width/3)+5,
    },
    modalBox : {
    	position		: 'absolute',
    	height          : height/5,
        bottom : -height/5,
        left   : 0,
    	backgroundColor	: '#fcfcfc',
    	width           : width-(width/4.92),
    },
    bottomIcon : {
        width           : ( width-(width/4.92))/3
    },
    filterHeight: {
        height          : height/10,
        width           : width-(width/4.92),
    },
    tocModalBox : {
    	position		: 'absolute',
    	bottom			: -100,
    	backgroundColor	: '#fcfcfc',
    	width:width,
    },
    bookmarkTabs:{
    	width: (width-(width/4))/3,
    },
    textRight: {
    	textAlign: 'right'
    },
    slider: {
    	flex				: 1,
	},
    textLeft: {
    	textAlign: 'left'
    },
    fcSidepaneHead: {
    	height: width/4.8,
    	width:width-(width/5),
    	borderTopColor: '#34485E',
    	borderTopWidth: 25,
        backgroundColor:'#3f5873',
    },
    answerBox: {
    	/*backgroundColor:'#F6F6F6',
    	borderRadius: width/57,
    	borderWidth	: 1,
    	borderColor: '#ddd',
    	marginLeft: 2,
    	width: width-20,
    	overflow: 'hidden',*/
    	width: width-20,
    	overflow: 'hidden',
    	marginBottom:	width/40,
    },
    sidepaneText : {
    	width	: width*.55, 
    	color	: '#b0281a'
    },
    paneText:{
        fontSize:Style.em(0.6875),
    },
    heading : {
    	fontSize : Style.em(1.67109375),
    	fontWeight: 'bold',
    },
    instruction : {
    	fontSize: Style.em(1.1869),
    	lineHeight: width/18,
    	color:'#333',
    	textAlign: 'justify',
    	marginLeft: width/30,
    	marginRight: width/30,
    	marginBottom: width/13,
    },
    circlebtn: {
    	borderColor : '#1ab394',
    	borderWidth : 3,
    	borderRadius: 16,
    	width		: 34,
    	height		: 34,
    },
    tocList:{
    		borderLeftWidth		: 3,
    		borderLeftColor		:'#f1f1f1',
    		marginLeft			: 30,
    		paddingLeft			: 25,
    		marginTop			:width/16,
    		marginBottom		: 60,
    },
    welcomeContainer:{
    	height: height - ((height/2.5)),
    	paddingTop: height/9,
    },
    tocBullet: {
		borderColor			: '#bdbdbd',
		borderWidth 		: 2,
		borderRadius		: (width/12)/2,
		width				: width/12,
		height				: width/12,
		backgroundColor		: '#EEDC9D',
		position			:'absolute',
		left				: -41,
		opacity				: 1,
	},
	tocBulletTxt:{
		color				: '#999',
		fontWeight			: 'bold',
		fontSize			: Style.em(0.9241),
		backgroundColor		:'transparent',
	},
    smallButton: {
    	paddingTop: 3, 
    	paddingBottom: 3,
    	paddingLeft: 7,
    	paddingRight:7,
    	borderRadius: 3,
    },
    modalSmallButton: {
    	paddingTop: 4, 
    	paddingBottom: 4,
    	paddingLeft: 8,
    	paddingRight:8,
    	borderRadius: 3,
    },
    btnText: {
    	color: '#fff',
    	fontSize: Style.em(0.9375),
    	fontWeight:'500',
    	padding: 2
    },
    btnTextModal:{fontSize: Style.em(0.8125)},
    performanceBody: {
     	width				: width-20,
    	margin				: 0,
    	backgroundColor		: '#fff',
    	borderRadius		: width/37,
    	borderWidth			: 1,
    	padding				: 0,
    },
    def_container:{
		borderWidth			: 1,
		borderColor			: '#ddd',
		borderRadius		: 5,
		marginLeft			: 5,
		marginRight			: 5,
		overflow			: 'hidden',
		backgroundColor		: '#fbfbfb',
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
    playicon:{
    	borderRadius		: (width/15)/2,
		height				: width/15,     
        width				: width/15,
        padding				: 2,
        borderWidth			: 1, 
        borderColor			: '#fcfcfc',	
        position			: 'absolute',
        top					: ((width/5.7)/2)-(width/10.5)/2,
        left				: ((width/3.7)/2)-(width/15)/2,	
        opacity				: 0.9,
        overflow			: 'hidden',
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
	ptLg: {paddingTop:Style.em(0.9375)},
	prLg: {paddingRight:Style.em(0.9375)},
	pbLg: {paddingBottom:Style.em(0.9375)},
	plLg: {paddingLeft:Style.em(0.9375)},
	ptXl: {paddingTop:20},
	prXl: {paddingRight:20},
	pbXl: {paddingBottom:20},
	plXl: {paddingLeft:20},
	 pSm: {padding:3},
	   p: {padding:5},
	 pMd: {padding:10},
	 pLg: {padding:15},
	 pXl: {padding:20},
	 
	 mtNlg: {marginTop: -15,},
     mlNlg: {marginLeft: -15,},
     
     mrNlg: {marginRight: -15,},
     
     mtNxl: {marginTop: -25,},
     
     mlNxl: {marginLeft: -30,},
     mlNxxl: {marginLeft: -35,},
     mtNxxl: {marginTop: -35,},
     
     mlN: {marginLeft: -10,},
     mtN: {marginTop: -10,},
     videoList: {marginLeft: 7.5,backgroundColor:'transparent'},
     
     quesionPic:{
    	 marginTop:	-(width/30),
    	 //paddingBottom	: width/70
     },
	 
	textCenter : {textAlign: 'center'},
	textJustify: {textAlign: 'justify'},
	  textRight: {textAlign: 'right'},
	   textLeft: {textAlign: 'left'},

	normal: {fontWeight: 'normal'},
	  bold: {fontWeight: 'bold'},
	
	    lhSm: {lineHeight:15},
	    lhMd: {lineHeight:17},
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
	
	 xsmallFont: {fontSize: Style.em(0.625)},
	  smallFont: {fontSize: Style.em(0.8087)},
	  smallFont2: {fontSize:Style.em(0.892)},
	 normalFont: {fontSize: Style.em(0.959)},
	headingFont: {fontSize: Style.em(1.035)},
	headingFont2: {fontSize: Style.em(1.101)},
	middleFont: {fontSize: Style.em(1.175)},
	headingFontXl: {fontSize: Style.em(1.36)},
	headingFontXl1: {fontSize: Style.em(1.4786)},
    headingFontXl2: {fontSize: Style.em(1.6172)},
	headingFontXl3: {fontSize: Style.em(1.972)},
	heading2:{fontSize: Style.em(2.157)},
	bgBlack:{backgroundColor: 'black'},
	bgWhite:{backgroundColor: 'white'},
	 testCheck: {fontSize: Style.em(0.8628)},
	 toolbarIco: {fontSize: Style.em(1.3125)},

	gradeBox: {
		borderColor		:	'#ddd',
		borderWidth		:	1,
		borderRadius	:	3,
		margin			:	9,
		marginTop		:	0,
		padding			:	8
	},
	
	toolbarIcoCard:{fontSize:Style.em(1.6875)},
	
	gridViewTab:{
		width: ((width-60)/3)+10,
		padding: width/20,
		alignItems: 'center',
		//height: (height/8),
	},
	toolText:{
		color: '#555',
		fontWeight:'500',
		marginTop:1,
		fontSize:Style.em(1),
	},
	gridViewIcon:{
		fontSize: Style.em(2.3522),
	},
	prepCircle:{
		height: width/12,
		width: width/12,
		borderRadius: (width/12)/2,
		alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
	},
	modalScroll:{height:height},
	rotate90deg:{
		transform: [{rotate: '90deg'}],
	},
    threeDotsList : {
        position: 'absolute',
        right: 5,
        top : 25,
        borderRadius : 5,
        backgroundColor : '#fff',
        borderWidth : 1, 
        borderColor : '#ccc',
        width : 200,
        padding : 15
    },
	prepIco:{marginTop:-2,marginLeft:2},
	mtnSm: {marginTop: 0},
	mrnSm: {marginRight: 0},
	mbnSm: {marginBottom: 0},
	mlnSm: {marginLeft: 0},
	
	
	pullRight: {
    	position: 'absolute',
    	right: 0,
    },
    pullLeft: {
    	position: 'absolute',
    	left: 0,
    },
    sidepaneUser:{
    	fontSize: Style.em(3.4375),
    	marginLeft:-1,
    	marginTop: 3,
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
    closeSearch: {
    	position: 'absolute',
    	right: 0,
    },
    userPic: {
    	height: 55,		    		    	
	    width: 55,				
    	borderRadius: 28,	
    	borderWidth: 1,
    	borderColor: '#fcfcfc'
    },
    yellowView:{
    	padding: 30,
    	backgroundColor: '#f8ac59',
    },
    welcomePane: {
    	justifyContent : 'center',
    },
    newDashboard: {		
    	paddingLeft         : width/36,		
    	paddingRight        : width/37,	
    	flexDirection		: 'row',
	    alignItems			: 'center',
	    flex				: 1,	
	    backgroundColor		: '#FFF',		   
    	borderTopColor		:'#dddddd',
    	borderRightColor	:'#dddddd',	
    	borderBottomColor   :'#dddddd',	
    	borderWidth			: 1,	
    	borderRadius		: width/80,
    	marginBottom    	: width/36,				    	
    	marginLeft      	: width/39,
    	marginRight     	: width/39,
    	borderLeftWidth 	: (width/99)/1.5,
    	shadowColor			: '#666',
        shadowOpacity		: .2,
        shadowRadius		: 2,
        shadowOffset		: 
	        {
	          height		: 2,
	          width			: 2,
	        },
    },
    dbContent:{
	    flex:1,
	    borderColor			: '#ddd',
	    marginLeft      	: width/42,
	    marginRight     	: width/40,
	    height				: width/5.65,
	    justifyContent		: 'center',
	    marginTop			: -(width/120),	
    },
    newDashboardIco:{		
    	position: 'absolute',		
    	left: 11,		
    	top: 3,		
    },
    newDashboardTxt: {
    	fontSize			: Style.em(1.1708),
    	fontWeight			: '500',
    	color				: '#222',
    },
    dbSmallText:{
    	fontSize			: Style.em(0.9175),
    	color				: '#333',
    	position			: 'relative',
    	left				: 0,
    	marginRight			: 10,
    	lineHeight			: width/25
    },
    footerModal:{
    	width			: width+5,
		backgroundColor	: '#fcfcfc',
		position		: 'relative',
		bottom			: 0,
		backgroundColor :'transparent',
    },
    dbSmallTextPost:{
    	fontSize			: Style.em(0.739285),
    	marginRight			: 3,
    },
    dbArrow: {
	  	position:'absolute',
    	right				: width/50,
    	top  				: width/15.8,
    	backgroundColor		: 'transparent',
    	
    },
    listIcon:{
    	fontSize			: Style.em(1.29375),
    },
    newDashboardArrow: {		    
    	position: 'absolute',		  
    	right: 10,
    },
    sectionTag:{
    	left:-12,
    	top:-8
    },
    dbContentPost:{
	    flex				: 1,
	    borderColor			: '#ddd',
	    marginLeft      	: width/50,
	    marginTop			: width/40,
	    marginBottom		: width/40,
	    justifyContent		:'center',
    },
    preClr  : { color : '#F9A041' },		
    lsnClr  : { color : '#69A142' },		
    pracClr : { color : '#029688' },		
    postClr : { color : '#F2745F' },		
    labClr  : { color : '#4DB889' },
    linkIns : { color : '#ce6262' },
    certi   : { color : '#337ab7' },
    libPicCircle: {		
    	height: width/6.7,		
	    width: width/3.7,		
	    borderWidth: 0,		
    	padding: 1,		
    	overflow: 'hidden',		
    },
    libCrn: {fontSize: Style.em(1)},
    libPic: {
    	flex:1,	
	    borderWidth: 1,		
    	borderColor: '#fff',
    },
    textGreen  : { color : '#00ff00'},
    winHeight: {height: (height),},		
    link : {color: '#b0281a',},		
    alertMini : {	
        borderWidth : 1,
        borderLeftWidth: 2,
        },
    alert : {		
        paddingTop: 7,
        paddingBottom:7,
        paddingLeft: 12,
        paddingRight: 10,
        margin: 10,		
        borderWidth : 1,
        borderLeftWidth: 3,
    },
    rr : {		
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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
    iosLineHeight: {
    	lineHeight : 16,
    	height     : 20,
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
    studyPlannerHeader: {
    	width: width,
    	height: (height/7) - 5,
    	marginTop: -5,
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
    	width: width-20,
    	 borderTopWidth: 1,
         borderBottomWidth: 1,
    	borderColor: '#ddd'
    },
    lessonBox: {
    	width: width-20,
    	borderWidth: 1,
    	borderColor: '#ddd'
    },
    lessonHeader: {
    	width: width-22,
    	backgroundColor: '#f9f9f9'
    },
    lessonsButton: {
    	width: 70,
    	height: 25,
    	borderRadius: 10,
    	borderWidth: 1,
    	borderColor: '#777',
    	backgroundColor:'#f6f6f6'
    },
    loginCenter: {
    	height: height,
    	width	: width
    	
    },
    loginCard : {		
	    backgroundColor	: '#fcfcfc',		
		width: 340,		
		borderRadius: 3		
    },		
    loginBtn:{		
		height		: 40,		
	    borderWidth	: 1,		
	    padding		: 10,		
	    borderRadius: 3,		
	    width: 310,		
	},		
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
	libMarginTop: {
		paddingTop:51,
	},
	prepSidePos:{
		marginTop: -20,
	},
	prepDots:{
		height: 8,
		width: 8, 
		borderRadius: 5,
	},
	bgTransparent:{
		backgroundColor: 'transparent',
	},
	firstTile: {marginTop: -((width/15)-2)},		
	libContent: {		
    	position		: 'relative',
    	flex			: 1,
    	//top			:  width/300,	
    	//width			: (width-(width/2.65)),
    },		
    forgot: {		
    	position:'relative',
    	right:0,
    },
    googleLog:{
    	color: '#fff',
    	width: 50,
        borderRadius: 25,
        height: 50,
        backgroundColor: '#D44326',
        borderWidth:1,
        margin		:6,
        marginTop	: 12,
        borderColor: '#B7291B',
    },
    androidSocialMedia:{
    	alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
    },  
    capsule: {		
    	height			: (width/8.15),
    	borderRadius	: (width/1),		
    	borderWidth		: 1,		
    	borderColor		: '#34485E',		
    	backgroundColor	: '#3f5873',		
    	marginLeft		: width/19,		
    	marginRight		: width/19,		
    	marginTop		: width/37,
    },
    capsuleIco:{		
    	position: 'absolute',		
    	left: width/21,
    	top: width/38.5
    },		
    capsuleTxt: {		
    	fontSize : Style.em(1.36184),
    	marginTop:0,		
    	marginLeft: width/8,		
    	color    : '#fff',		
    	fontWeight: '400',
    	top: width/38.5
    },		
    capsuleArrow: {		
    	position: 'absolute',		
    	right: width/33,	
    	top: width/32.5
    },		
    startTest:{		
	    marginTop: width/35,		
	    fontSize : Style.em(1.29375),	
	    marginRight: 5,		
	    marginLeft: 5,		
    },	
    dropdownBox: {		
    	width:140, 		
    	position: 'absolute', 		
    	right: 20, 		
    	top: 30, 		
    	padding: 7,		
    	backgroundColor: '#fff',		
    	borderColor: '#f6f6f6',		
    	shadowColor: "#000",		
        shadowOpacity: 0.2,		
        shadowRadius: 1,		
        shadowOffset: {height: 5, width: 4}		
    },
    testList: {
    	borderColor		:'#dddddd',		    
    	borderWidth		: 1,
    	borderTopWidth: 0,
    	padding			: 10,
    	alignItems      : 'center',
    	backgroundColor: '#fbfbfb',
    	marginLeft		: -5,
    	marginRight		:-5,
    },
    testListHead:{
    	borderColor		:'#dddddd',		    
    	borderWidth		: 1,		    
    	borderTopRightRadius    : 5,
    	borderTopLeftRadius    : 5,
    	padding			: 10,
    	backgroundColor: '#E9E9E9',
    	marginLeft		: -5,
    	marginRight		:-5,
    },
    marginWidth: {
    	width :(width-20),	
    },
    lightBold:{
    	fontWeight: '500',
    },
    lighter:{
    	fontWeight: '400',
    },
    testCogs:{
    	borderBottomWidth	:1,
    	borderColor			:'#ddd',
    	marginBottom		: -2,
    	paddingTop			: width/60,
    	paddingRight		: width/40,
    	paddingBottom		: width/53,
    	paddingLeft			: width/40,
    },
    themeText:{
    	color: '#5a6d7d',
    },
    ebookContent: {
    	flex: 1,
    	position        : 'relative',
    	top             : width/12.5, // do not change it
    }, 
    textLightGray:{
    	color: '#ddd',
    },
    backgroundProgress: {
        backgroundColor: '#f1f1f1',
        overflow: 'hidden'
	},
   	fillProgress: {
        backgroundColor: '#6ec150',
        opacity: 0.9,
	},
	videoDuration:{
	    backgroundColor: '#333',
    	opacity: 0.9,
    	paddingTop: 1,
    	paddingLeft: 2,
    	paddingRight: 3,
    	paddingBottom: 1,
    	position: 'absolute',
    	right: 0,
    	bottom:0,
	},
	labDuration:{
    	position: 'absolute',
    	bottom:3,
	},
	videoDurationText:{
		color		: '#fff',
    	fontSize		: Style.em(0.7610),
    	fontWeight		: '700',
    	marginTop		:0.5,
	},
	sessionBox: {
    	width: width-10,
    	marginLeft: 5,
    	marginRight: 5,
    	marginTop: 10,
    	marginBottom: 10,
    	borderWidth: 1,
    	borderColor: '#ccc',
    	borderRadius: 5,
    	padding: 5
    },
    gridView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modal: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
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
    popupBottom:{bottom:-20},
    quarterModalContentBottom:{
        width: width+5,
        backgroundColor:'#F8F8F8',
    },
    popupModal:{
		position:'absolute',
		top:0,
		right:0,
		bottom:0,
		left:0,
		backgroundColor:'transparent',
	},
    bottom: {
    	bottom: 0,
    },
    resultModal:{
    	position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        width: width+5,
        backgroundColor:'#F8F8F8',
    },
    quarterModalContent:{
        width			: width+5,
        alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor	: '#fcfcfc',
		position		: 'absolute',
		bottom			: 0,
    },
    grid:{
        width			: width+5,
        alignItems      : 'center',
		justifyContent  : 'center',
		backgroundColor	: '#fcfcfc',
		position		: 'absolute',
		bottom			: 0,
    },
    modalBtnBottom: {
    	fontSize: Style.em(1.0625),
    	padding: 5,
    	fontWeight: '400'
    },
    fullWidthPos:{
    	justifyContent   : 'center',
	    alignItems       : 'center',
    	right: 0,
    	left: 0,
    	position: 'relative',
    },
    fullWidthPos:{
    	position:'relative',
    	left:0,
    	right:0,
    },
    testHistoryModal:{
    		height 			: 	0
    	},
    modalBtn: {
    	fontSize: Style.em(1.125),
    	margin: width/40,
    	fontWeight: '400',
    	lineHeight:0,
    },
    modalBtnCloseBottom:{
    	justifyContent   : 'center',
	    alignItems       : 'center',
    	backgroundColor:  '#1ab394',
    	right: 0,
    	bottom: 0,
    	left: 0,
    	height: width/10,
    	position: 'relative',
    },
    modalBtnClose:{
    	justifyContent   : 'center',
	    alignItems       : 'center',
    	backgroundColor:  '#1ab394',
    	right: 0,
    	bottom: 0,
    	left: 0,
    	height: width/10,
    	position: 'absolute',
    },
    leftData: {
    	width: (width*2/3) + (width/38),
    	marginLeft: width/38,
    	marginRight: width/38,
    },
    leftDataBullet: {
    	width: (width*2/3) - 5,
    },
    plannerHeight:{height:height-40},
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
    cardPane:{
    	//marginTop: width/4.8,
    	height:height-(width/5.2),
    },
    switchBtn: {
    	borderWidth: 1,
    	borderColor: '#ccc',
    	backgroundColor: '#fff',
    	height: width/15,
    	padding: width/57,
    	justifyContent   : 'center',
	    alignItems       : 'center',
    },
    activeSwitch:{
    	marginRight: -1,
    	backgroundColor: '#1ab394',
    	borderRightWidth: 1,
    },
    switchBtn1: {borderTopLeftRadius: 3,borderBottomLeftRadius: 3,},
    switchBtn2: {borderTopRightRadius: 3,borderBottomRightRadius: 3,},
    tabLabel: {
        color: 'white',
    },
    bubles : { 
        //height: Style.em(1.29375), 
        width: Style.em(1.49375), 
        backgroundColor : '#1ab394', 
        marginLeft      : Style.em(0.43125)
    },
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
    grayBg: { backgroundColor: '#808080' },
    greenBg:{ backgroundColor :'green' },
    redBg: { backgroundColor :'red' },
   
    libLoading:{
    	position: 'absolute', 
    	top:height/2-60,
    	left:10,
    	backgroundColor:'#00000099',
    	borderWidth:1,
    	borderColor:'#888',
    	borderRadius:3,
    	padding:15,
    	paddingTop:8,
    },
    activatorLib:{
    	position    : 'absolute',
        top         : (height/2)-40,
        right       : (width/9)-13,
    },
    lhSmLoader:{marginTop:-18},
    dbLeftIconsSize:{fontSize:Style.em(2.875)},
    dbLeftIconsSizeMini:{fontSize:Style.em(2.157)},
    bkMarkNavigation:{
    	position:'absolute',
    	top:width/90,
    	left:width/50,
    },
    bookMrk:{marginLeft:width/13},
    bookMrkNot:{marginLeft:-width/13},
    prepEngineReviewLabel:{
    	position  	  			: 'absolute',
        top       	 			: (height/2)-40,
        left   					: 45,
        width					: width - 100,
        alignItems				: 'center',
        justifyContent			: 'center',
        alignSelf				:'center'
    },
    labDashboard:{
    	height					: width/5.5,		
    	paddingRight    	    : 8,
    	flexDirection 			: 'row',
	    flex					: 1,	
	    backgroundColor			: '#FFF',		   
    	borderColor			    : '#ddd',
    	borderWidth				: 1,	
    	borderRadius			: (width/5)/20,
    	marginBottom   			: width/40,
    	width					: width-18,
    	alignSelf   		    : 'center',
    },
    labContent:{
    	width					: width-(width/3.75),
    	margin					: width/48,
    },
	labIco:{
		width					: width/5.5,
		height					: width/5.5,
		backgroundColor			:'transparent',
		alignItems     : 'center',
		justifyContent : 'center',
		alignSelf      : 'center',
		borderRightWidth:1,
		borderRightColor:'#ddd',
		
	},
	labLeftIconsSizeMini:{fontSize:Style.em(2.157)},
	labLeftIconsSize:{fontSize:Style.em(2.5875)},
	labDuration:{
		opacity: 0.9,
    	paddingTop: 3,
    	paddingLeft: width/95,
    	paddingRight: width/95,
    	marginTop:1,
	},
	labTime:{
		fontSize: Style.em(0.8625),
		color: '#333',
		fontWeight: '500',
		marginTop:-1,

	},
	halfWidthPlaner:{
		width:width-(width/3),
	},
    dateData: {
    	width: (width*2/3) -10 ,
    },
    elasticNavbar: {
    	position	     : 'absolute',
    	top			     : 0,
    	width: width
    },
    /*--------------- SM MODULES STYLES---------------*/
    smLeftTab:{
    	marginLeft:0,
    },
    firstTabSmDefault:{
    	borderTopColor: '#D9D9D9',
    	backgroundColor:'#D9D9D9',
        // borderCollapse: 'collapse',
        borderLeftWidth: 0,
    },
     TabSmDefaultAlternate:{
    	backgroundColor:'#436C7F',
    },
    firstTabSm:{
    	borderTopColor:'#555',
    	backgroundColor:'#436C7F',
        // borderCollapse: 'collapse'
    },
    firstTabSmDrop:{
    	borderTopColor:'#555',
    	backgroundColor:'#D9D9D9',
    },
    firstTabSmDefaultDrop:{
    	borderBottomColor: '#D9D9D9',
    	backgroundColor:'#D9D9D9',
        // borderCollapse: 'collapse'
    	
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
        width:(width-31),
        borderWidth:1,
        borderColor:'#4e7e80',
    },
    singleMatchListRow:{
    	borderColor:'#555', 
    	borderWidth:1,
    	borderRadius:3, 
    	marginTop:12,
    	padding:10,
    	paddingLeft:20,
    	width :(width-28),
    	backgroundColor:'#D9D9D9'
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
    	top:-9,
    	position:'absolute',
    	right:-2,
    	borderColor : '#555',
        borderWidth : 1,
        borderRadius: 11,
        width       : 22,
        height      : 22,
    	backgroundColor:'#fff',
    },
    leftButton: {
        left: Style.em(1.0625),
        bottom : Style.em(0.5625),
        position:'absolute',
        backgroundColor:'#fff',
        overflow:'hidden',
        borderRadius: Style.em(0.9375),
        
    },
    rightButton: {
        right: Style.em(0.9375),
        bottom : Style.em(0.5625),
        position:'absolute',
        backgroundColor:'#fff',
        overflow:'hidden',
        borderRadius: Style.em(0.9375),
        
    },
    nextButtonSM:{
    	bottom : 50,
    },
    dndActivator: {
    	top : -height/4, 
    	left: -width/18,
    },
    
    dragCloneWidth:{
    	width:width-32
    },
    dragClonetop:{
    	top:( height > 1000 ) ? height/30 : ( height > 900 ) ? height/26 : ( height > 700 ) ? height/21.8 : (height > 650) ? height/20 : (height > 550) ? height/18.3 : (height > 480) ? height/20 : height/16.7,
    	left:( width > 700 ) ? -width/65:  -width/51
    },
    dragClonetopRemid:{
    	top:( height > 1000 ) ? height/11.4 : ( height > 900 ) ?  height/10.8 : ( height > 700 ) ? height/11.2 : (height > 650) ? height/10.55 : (height > 550) ? height/10 : (height > 480) ? height/10.3 : height/8.8,		
    	left:( width > 700 ) ? -width/65:  -width/50
    },
    width27:{
    	width:width-27,
    },
    width28:{
    	width:width-28,
    },
    infoHeightMultimatch:{
    	backgroundColor:'white',
	},
	droppabelConWidth:{
		width:(width-25),
	},
	multimatchActivator : {
		top:0,
		bottom:width/6,
		alignItems      : 'center',
		justifyContent  : 'center',
	},
	closeButtonDnd: {
    	top: 1,
    },
    /*--sm END--*/
    rotate180deg:{
		transform: [{rotate: '180deg'}],
	},
	infoWidth:{
		width:380,
	},
	doubleBackSwitch:{
		left          			 : width/30,
		top			   			 : 0,
		bottom					 : 0,
		position	   			 : 'absolute',
		alignSelf      			 : 'center',
		justifyContent 			 : 'center',
		height        			 : width/7.6,
		backgroundColor			 :'transparent',
		marginTop	   			 : 20,
		paddingRight   			 : 15,
	},
    webviewContainer: {
        position       			 : 'relative',
        paddingTop      		 : 10,
        marginTop       		 : 69 // do not change it
    },
    searchContainerGlossary: {  
        borderTopWidth 			 :20,
        backgroundColor			 :'#5a6d7d',
        borderTopColor			 :'#34485E',
        shadowColor				 : '#5a6d7d',
        shadowOpacity			 : 1,
        shadowRadius			 : 4,
        shadowOffset			 : {
        height					 : 3,
        width					 : 3,},
        width					 :width,
    },
    bookmarkButton : {
    	position				: 'absolute', 
    	left					: width/80,
    	top						: width/80,
    	padding					: width/60,
    	backgroundColor			: 'transparent'
    },
    point:{
    	backgroundColor			: 'transparent',
    	position				: 'absolute',
    	right:0,
    	bottom:width/54,
    	left:0.5,
    },
    point2:{
        backgroundColor         : 'transparent',
        position                : 'absolute',
        right:0,
        bottom:width/54,
        left:4.5,
    },
    icon_play:{
    	backgroundColor			: 'transparent',
    	position				: 'absolute',
    	right:0,
    	bottom:width/28.5,
    	left:width/34,
    },
    donutIcon:{
    	fontSize:Style.em(1.91667)
    },
    msgModelspace: {
    	position:'relative',
    	right:-3,
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
	}
});
