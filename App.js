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
import Tabbar from './Tabbar';
import Pizzavi from './Pizzavi';
export default class App extends Component {
 constructor() {
    super()
    this.state = {
      text: '',
      currTab: 'Cheese',
      pizza: ''
    }
  }
  renderImage() {
    return (
    <View style={styles.images}>
      <Text  style = {[{paddingLeft:20, fontWeight: 'bold'} ]}>LARGE CREATE YOUR OWN</Text>
      <Image 
        source = { require('./images/55e3a81c-e283-41d7-ba21-266b76899c44.jpg') }
        style = {{ height : 150, width: width, marginTop: 10}}
      />
    </View>
    )
  }
  renderItem() {
    if( typeof this.state.list['data'] == 'object') {
      if (this.state.list['data'].length > 0) {
        return (
          <FlatList
            contentContainerStyle = { styles.list }
            extraData = { this.state }
            data = { this.state.list['data'] }
            renderItem = { this.renderItem }
            keyExtractor = { (item, index) => item.id }
            onEndReachedThreshold = { 0.05 }
            onEndReached = {() => this.loadMore()}
          />
        )
      } else {
        return(<Text style={styles.list}>No Image found</Text>)
      }
      
    }
  }
  changeTab(value) {
    this.setState({ currTab: value })
  }
  onPressLearnMore(value) {
    alert(value)
  }
  renderButton() {
    return(
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 10}}>
          <Button
            onPress = { () => this.onPressLearnMore('H') }
            title="H"
            color="#841584"
            style={{margin: 5}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Button
            onPress = { () => this.onPressLearnMore('Fu') }
            title="Fu"
            color="#841584"
            style={{margin: 5}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Button
            onPress = { () => this.onPressLearnMore('H2') }
            title="H2"
            color="#841584"
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Button
            onPress = { () => this.onPressLearnMore('Reg') }
            title="Reg"
            color="#841584"
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Button
            onPress = { () => this.onPressLearnMore('Etxr') }
            title="Etxr"
            color="#841584"
          />
        </View>
      </View>
    )
  }
  renderTab() {
    return(
      <View>
        <View style={{ height: 50 , justifyContent: 'center',width: width}}>
          <Text style = {[{paddingLeft:20,fontSize:16,fontWeight: 'bold'}]}>TOPPINGS</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text onPress={() => this.changeTab('Cheese')} style={[styles.tab, (this.state.currTab == 'Cheese' ? {backgroundColor: 'red', color:'#fff' ,padding:8,fontSize:18}: null)]}>Cheese</Text>
          <Text onPress={() => this.changeTab('Meets')} style={[styles.tab, (this.state.currTab == 'Meets'? {backgroundColor: 'red', color:'#fff' ,padding:8,fontSize:18}: null)]}>Meets</Text>
          <Text onPress={() => this.changeTab('Veggies')} style={[styles.tab, (this.state.currTab == 'Veggies'? {backgroundColor: 'red', color:'#fff' ,padding:8,fontSize:18}: null)]}>Veggies</Text>
        </View>
      </View>
    )
  }
   renderbutton() {
    return(
      <View>
        <View style={ [ styles.columnStyle,{ height: 50 ,paddingBottom:120,paddingTop:40,  justifyContent: 'center',width: width}]}>
           <TouchableOpacity 
          style={[
            styles.btnFullScreen,
            styles.btnPrimary,
            styles.logButton,
            styles.rSm, 
            styles.mtMd,
            {width: width * 0.4,backgroundColor:'red',margin:5,alignSelf : 'flex-end',},
            styles.center 
          ]} 
           
      >
        <Text style={[styles.center,styles.textWhite,styles.middleFon]}>Continue</Text>
      </TouchableOpacity>

        </View>
       
      </View>
    )
  }
  imageAction(value) {
    this.setState({ pizza: value })
  }
    renderImg() {
      var arr = []
      if (this.state.currTab == 'Cheese' ) {
        arr = [
          {
            name: 'Extra Mozzarella',
            img: require('./images/images.jpg')
          },
          {
            name: 'Ricotta Cheese',
            img: require('./images/cheese.jpg')
          },
          {
            name: 'Feta Cheese',
            img: require('./images/how-to-buy-veg-friendly-cheesejpg.jpg')
          },
          {
            name: 'Another Cheese',
            img: require('./images/1382541000580.jpeg')
          },
          {
            name: 'Extra Mozzarella',
            img: require('./images/download.jpg')
          }
        ]
      } else if (this.state.currTab == 'Meets') {
        arr = [
          {
            name: 'Meets1',
            img: require('./images/orig_890114ac22e6307bae52d3536bc6124975534a7d.jpg')
          },
          {
            name: 'Meets2',
            img: require('./images/1.jpg')
          },
          {
            name: 'Meets3',
            img: require('./images/meat-delicatessen-plate.jpg')
          },
          {
            name: 'Meets4',
            img: require('./images/1382541000580.jpeg')
          },
          {
            name: 'Meets4',
            img: require('./images/download.jpg')
          }
        ]
      } else if (this.state.currTab == 'Veggies') {
        arr = [
          {
            name: 'Veggies1',
            img: require('./images/2.jpg')
          },
          {
            name: 'Veggies2',
            img: require('./images/cheese.jpg')
          },
          {
            name: 'Veggies3',
            img: require('./images/how-to-buy-veg-friendly-cheesejpg.jpg')
          },
          {
            name: 'Veggies4',
            img: require('./images/1382541000580.jpeg')
          },
          {
            name: 'Veggies5',
            img: require('./images/download.jpg')
          }
        ]
      }
      let s = []
      for (let i in arr) {
        s.push(
          <View>
            <TouchableOpacity onPress={() => this.imageAction(arr[i].name)} style = {[styles.rowStyle,{ alignSelf : 'flex-start',padding:10,  width:width,backgroundColor:'#f4efef'}]}>       
              <Text style = {[styles.navbarText,styles.textRight,{ color:'#000'} ]}>
                <Image source = {arr[i].img} style = {[styles.iMg, {width:400,height:200}]} > 
                </Image>
              </Text>
               <Text  style = {[ styles.navbarText,styles.textRight, {padding: 20, color:'#000',lignSelf : 'center',} ]} >
                  {arr[i].name}
                  </Text>
            </TouchableOpacity>
            {this.state.pizza  == arr[i].name ? this.renderButton() : null}
          </View>
        )
      }
    return(
      <View>
        <ScrollView>
          {s}
        </ScrollView>
      </View>
    )
  }

  render() {
    return(
     <View 
      style = {[
        {
          // marginTop: 70, 
          flex: 1,
        
          backgroundColor:'#fff'
          
        }
      ]}
    >

      <View style={[ styles.tabBar,{marginTop: 70,color:'red',paddingBottom:5,}]}>
        <View 
              style = {[
                styles.rowStyle,

                { alignSelf : 'flex-start',backgroundColor:'green',width: width,}
              ]}
            >
            
            <Text 
              style = {[
                styles.navbarText,
                styles.textRight,{padding:20}
              ]}
              onPress={()=>this.onPress()}
            >
              {<Icon name="arrow-left" size={25} color="#fff" />}
               
              
            </Text>
            <Text    style = {[
                styles.navbarText,
                styles.textRight,
                {padding:20,alignSelf : 'center',fontSize:16}
              ]}
                >PIZZA</Text>
          </View>
       
      </View>
      <View style={styles.container}>
        <ScrollView >
        {this.renderImage()}
        {this.renderTab()}
         {this.renderImg()}
         {this.renderbutton()}
         </ScrollView>
      </View>
      <View>
      <View>
         <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "",
              icon: "home",
              iconText: "Menu"
            },
              {
              page: "",
              icon: "local-offer",
              iconType: 2,
              iconText: "Deals"
            },
              {
              page: "",
              icon: "star",
              
              iconText: "Favorites"
            },
              {
              page: "",
              icon: "bed",
              
              iconText: "More"
            }, 

          ]}
        />
      </View>
      </View>
       
            <View style={[styles.navbar,{backgroundColor:'#fff'}]}>
         
          <View style={[{flex: 1}, styles.columnStyle]}>
                <Image 
                source = {require('./images/AUAHIKORE_RGB.jpg')}
                style = {[styles.iMg, {width:200,height:70}]} 
              >
                
              </Image>
               
          </View>
          <View style={[{flex: 1}, styles.columnStyle]}>
              
                <Text
                  style={[styles.navbarText,{paddingTop:5,marginLeft:250,alignSelf : 'center',}]}
                  
                >
                {<Icon name="shopping-cart" size={35} color="#000" />}
                </Text>
          </View>

           <View 
              style = {[
                styles.columnStyle, 
                { alignSelf : 'flex-end'}
              ]}
            >
             <Text
                  style={[styles.navbarText,styles.textRight,{marginRight:10, paddingBottom:10}]}
                  
                >
                {<Icon name="bars" size={35} color="#000" />}
                </Text>
            
           
            
          </View>

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