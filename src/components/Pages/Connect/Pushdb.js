import React, { Component } from 'react'
import firebase from 'firebase'
import config from "./config.dev";

class Pushdb extends Component {
    constructor(props){
      super(props)
      this.fire = ""
      this.state={
        auth: props.isLogin,
        value:"",
        time:new Date().toLocaleTimeString()
      }
    }
    
    addMessage = e => {
      e.preventDefault()
      if (!this.state.value) return 
      this.fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
      /* insert message to firebase real-time database*/
      this.state.auth ?
      this.fire.database().ref('messeges/').push({
        ID: this.state.auth.profileObj.googleId,
        username: this.state.auth.profileObj.name,
        time: new Date().getFullYear() + "年" + (new Date().getMonth()+1) + "月" + new Date().getDate() + "日" + new Date().toLocaleTimeString(),
        message: this.state.value,
        email: this.state.auth.profileObj.email,
      }):
      this.fire.database().ref('messeges/').push({
        ID: "null",
        username: "null",
        time: new Date().getFullYear() + "年" + (new Date().getMonth()+1) + "月" + new Date().getDate() + "日" + new Date().toLocaleTimeString(),
        message: this.state.value,
        email: "null",
      })
      alert("成功發送: "+ this.state.value)
      console.log(e)
      this.setState({value:""})
    }
    handleNameChange = e => {
      this.setState({value:e.currentTarget.value})
    }
    render() {
      return (
        <form onSubmit={this.addMessage}>
          <input type="text" onChange={this.handleNameChange} value={this.state.value}/>
          <input type="submit" value="哭阿"/>
        </form>
      )
    }
  }
  
  export default Pushdb