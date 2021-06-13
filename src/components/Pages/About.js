import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class UserGithub extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        username: '',
        githubtUrl: '',
        avatarUrl: '',
        subscriptions_url: '',
        id:'',
        organizations_url:'',
    }
    }
    componentDidMount(){
        $.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                username: data.name,
                githubtUrl: data.html_url,
                avatarUrl: data.avatar_url,
                subscriptions_url: data.subscriptions_url,
                id: data.id,
                organizations_url: data.organizations_url});
            }
        });
    }

    render() {
        return (
            <div>
            <h3>{this.state.username}</h3>
            <p>id={this.state.id}</p>
            <img src={this.state.avatarUrl}/><p/>
            <a href={this.state.githubtUrl}>Github Link</a><p/>
            <a href={this.state.organizations_url}>organizations_url Link</a><p/>
            <a href={this.state.subscriptions_url}>subscriptions_url Link</a>
            </div>
        );
    } 
}

export default UserGithub;