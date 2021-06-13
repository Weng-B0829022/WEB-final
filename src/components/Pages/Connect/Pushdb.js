import React, { Component } from 'react'
import firebase from 'firebase'
import config from "./config.dev";

class Pushdb extends Component {

    addMessage = e => {
        this.fire = firebase.initializeApp(config)
        e.preventDefault()
        /* insert message to firebase real-time database*/
        this.fire.database().ref('messages').push( this.inputMsg.value )
  
        this.inputMsg.value = ''
    }
    render() {
      return (
        <form onSubmit={this.addMessage}>
          <input type="text" ref={ msg => this.inputMsg = msg }/>
          <input type="submit"/>
        </form>
      )
    }
  }
  
  export default Pushdb