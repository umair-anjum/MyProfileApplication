import React, { Component } from 'react'
import {Text, View,Button,StyleSheet} from 'react-native'

class Myclass extends Component{

state = {
mytitle:"My First Button",
newTitle:"This is my Text"

}
myfuction(parametr){
  this.setState({newTitle:parametr})
}

  render(){
    return(

<View style={style.mainView}>
<Text style={style.headerText}>Hello World</Text>
<Text style={{...style.otherText,backgroundColor:"pink"}}>{this.state.newTitle}</Text>
<Text style={style.otherText}>{this.state.newTitle}</Text>

<Button
 title={this.state.mytitle}
 onPress={()=>this.myfuction("my string")}
 ></Button>
</View>
    );
  }
}
const style = StyleSheet.create({

mainView:{
  padding: 10,
  borderRadius : 20,
  borderWidth:2 ,
  margin:20
},

 headerText:{
   fontSize:20,
   color:"red",
   margin: 10,
   padding: 10
 },
 otherText:{
   fontSize : 14,
   color:"red",
   backgroundColor:"black",
   padding : 10,
   margin : 10
 }
});
export default Myclass