/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Second extends Component {

  constructor(){
    super();
    this.state = {
      userName:"",
      password:"",
    };
    this.state.customStyle = {
      color : 'red',
    };

    this.handleUserName = this.handleUserName.bind(this);

    this.handlePassowrd = this.handlePassowrd.bind(this);

    this.okButtonPress = this.okButtonPress.bind(this);

    // setInterval(()=>{
    //   if (this.state.customStyle.color == 'red') {
    //     this.setState({
    //       customStyle:{
    //         color:'green'
    //       }
    //     });
    //   }
    //   else{
    //     this.setState({
    //       customStyle:{
    //         color:'red'
    //       }
    //     });
    //   }

    // },1000);

  }

  okButtonPress(){
    // this.setState({
    //   userName : this._userName._lastNativeText,
    //   password : this._password._lastNativeText
    // });

    this.setState({
      userName:this.state.userNameText,
      password:this.state.passwordText
    });
  }

  handleUserName(newText){
    this.setState({
      userName: newText
    });
  }

  handlePassowrd(newText){
    this.setState({
      password: newText
    });
  }
  
  render(){
    return (
           
      // <View style={styles.conainer}>
      //   <View style={styles.upper}>
      //     <Text style={styles.textInputTitle}>User name</Text>
      //     <TextInput
      //       placeholder="email"
      //       defaultValue = {this.state.userName}
      //       onChangeText = {this.handleUserName}
      //       selectionColor = '#428af8'
      //       underlineColorAndroid = 'black'
      //       style ={styles.textInputWord}
      //     />

      //     <Text style={styles.textInputTitle}>Password</Text>
      //     <TextInput
      //       placeholder="Password"
      //       defaultValue = {this.state.password}
      //       onChangeText = {this.handlePassowrd}
      //       selectionColor = '#428af8'
      //       underlineColorAndroid = 'black'
      //       secureTextEntry = {true}
      //       style ={styles.textInputWord}
      //     />
      //     <Text>"userName: "{this.state.userName}"password: "{this.state.password}</Text>
      //     <Button title={"Hellow"}/>
      //   </View>
      // </View>
      
      //uncountrol
        //  <View style={styles.conainer}>
        //    <Text style={styles.textInputTitle}>User name</Text>
        //    <TextInput
        //       ref = {input=> this._userName = input}
        //       underlineColorAndroid = 'black'
        //       style ={styles.textInputWord}
        //     />
        //     <Text style={styles.textInputTitle}>Password</Text>
        //     <TextInput
        //       ref = {input=> this._password = input}
        //       underlineColorAndroid = 'black'
        //       style ={styles.textInputWord}
        //     />
        //     <Button title={"Ok"} onPress={this.okButtonPress}/>
        //     <Text>"userName: "{this.state.userName}"password: "{this.state.password}</Text>
        //  </View>
        
        //countrol
        <View style={styles.conainer}>
           <Text style={styles.textInputTitle}>User name</Text>
           <TextInput
              underlineColorAndroid = 'black'
              style ={styles.textInputWord}
              onChangeText={text => this.setState({userNameText:text}) }
            />
            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput
              underlineColorAndroid = 'black'
              style ={styles.textInputWord}
              onChangeText={text=> this.setState({passwordText:text})}
            />
            <Button title={"Ok"} onPress={this.okButtonPress}/>
            <Text>"userName: "{this.state.userName}"password: "{this.state.password}</Text>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputTitle:{
    fontWeight:"600",
    fontSize:25
  },

  textInputWord:{
    fontWeight:"500",
    fontSize:20
  },

  conainer:{
    flex:1,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:50
    // flexDirection:'row'
  },
  upper:{
    flex :1,
    // backgroundColor : 'white'
  },
  down:{
    flex :1,
    backgroundColor : 'green',
    flexDirection:'row',
  },

  downInnerOne:{
    flex:1,
    backgroundColor:'blue'
  },
  downInnerTwo:{
    flex:1,
    backgroundColor:'orange'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
