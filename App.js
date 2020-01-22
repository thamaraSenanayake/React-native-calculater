/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';



class App extends Component {
  
  constructor(){
    super();
    this.state ={
      userInput:0,
      result:0
    };
    this.operationArray = ['DEL','/','X','-','+'];
  }

  keyPadPress(number){
    var value;
    if(number == "="){
      this.calculateResult();
      return;
    }
    else if(this.state.userInput == 0){
      value = number;
    }
    else{
      value = this.state.userInput+number;
    }
    this.setState({
      userInput: value
    });
  }

  operationPress(operation){
    //let operationArray = ['DEL','/','X','-','+'];
    if(this.state.userInput == 0){
      return;
    }
    else{
      let lastChar = this.state.userInput.split('').pop();
      if(this.operationArray.includes(lastChar) == true && operation != 'DEL'){
        let text = this.state.userInput.split('');
        text.pop();
        this.setState({
          userInput:text.join('')+operation,
        });
      }
      else{
        this.setState({
          userInput:this.state.userInput+operation
        });
      }
      
    }
    switch(operation){
      case 'DEL':
        let text = this.state.userInput.split('');
        text.pop();
        this.setState({
          userInput:text.join(''),
        });
        break;
      case '/':
        break;
      case 'X':
        break;
      case '-':
        break;
      case '+':
        break;

    }
  }

  calculateResult(){

    let lastChar = this.state.userInput.split('').pop();
    if(!this.operationArray.includes(lastChar)){
      var value  = this.state.userInput.replace("X", "*");
      this.setState({
        result: eval(value)
      });
    }
  }
  
  render(){

    let rows = [];
    let number =[["7","8","9"],["4","5","6"],["1","2","3"],[".","0","="]];


    for (let rowCount = 0; rowCount < 4; rowCount++) {
      let row = [];
      for (let colCount = 0; colCount < 3; colCount++) {
        row.push(
          <View style={styles.numberDisplay}>
            <TouchableOpacity style={styles.numberButton} onPress={()=> this.keyPadPress(number[rowCount][colCount])}>
                <Text style={styles.numberButtonText}>{number[rowCount][colCount]}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      rows.push(
        <View style={styles.numberCloumn}>
          {row}
        </View>
      );
      
    }

    
    let mathoperaterList =[];
    for (let operationCount = 0; operationCount < this.operationArray.length; operationCount++) {
      mathoperaterList.push(
        <View style={styles.mathOperaterDisplay}>
          <TouchableOpacity style={styles.operationButton} onPress={()=> this.operationPress(this.operationArray[operationCount])}>
              <Text style={styles.operationButtonText}>{this.operationArray[operationCount]}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
           
      <View style={styles.upper}>
        
        {/* top part */}
        <View style={styles.top}>
          
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.userInput}</Text>
          </View>
          
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.result}</Text>
          </View>

        </View>

        {/* bottom part */}
        <View style={styles.button}>
          <View style={styles.number}>
            {/*number pad*/}
            {rows}
          </View>
          <View style={styles.operaters}>
            
            <View style={styles.mathOperaters}>
              
              {mathoperaterList}

            </View>

            <View style={styles.navigationBar}>
              
            </View>
            
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  //top part
  upper:{
    flex :1,
    // backgroundColor : 'white'
  },

  top:{
    flex:1,
    backgroundColor:'white'
  },

  
  calculation:{
    flex:2,
    alignItems:'flex-end',
    justifyContent:'center'
  },

  calculationText:{
    fontSize:30,
    fontWeight:'600',
  },
  
  result:{
    flex:1,
    backgroundColor:'white',
    alignItems:'flex-end',
    justifyContent:'center'
  },

  resultText:{
    fontSize:24,
    fontWeight:'600',
  },
  
  //bottom part
  button:{
    flex:2,
    backgroundColor:'black',
    flexDirection:'row'
  },

  number:{
    flex:3,
    backgroundColor:'black'
  },

  operaters:{
    flex:1,
    backgroundColor:'gray',
    flexDirection:'row'
  },

  numberCloumn:{
    flex:1,
    backgroundColor:'black',
    flexDirection:'row'
  },

  numberDisplay:{
    flex:1,
  },

  numberButton:{
    backgroundColor:"#434343",
    alignSelf: 'stretch',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberButtonText:{
    fontSize:30,
    fontWeight:"600",
    color:"white",
    textAlign: 'center',
    justifyContent: 'center',
  },

  operationButton:{
    backgroundColor:"#636363",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  operationButtonText:{
    fontSize:30,
    fontWeight:"600",
    color:"white",
    // textAlign: 'center',
    // justifyContent: 'center',
  },

  numberDisplay1:{
    flex:1,
    backgroundColor:'black',
    flexDirection:'row',

  },

  mathOperaters:{
    flex:4,
    backgroundColor:'#636363'
  },

  navigationBar:{
    flex:1,
    backgroundColor:'lightgreen'
  },

  mathOperaterDisplay:{
    flex:1,
    backgroundColor:'black',
  }

  


  

});

export default App;
