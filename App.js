import React, { Component } from 'react'
import {Text, View,Button} from 'react-native'

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

<View>
<Text>Hello World</Text>
<Text>{this.state.newTitle}</Text>
<Button
 title={this.state.mytitle}
 onPress={()=>this.myfuction("my string")}
 ></Button>
</View>
    );
  }
}

export default Myclass