import React, { Component } from 'react';
import './style.css'

class FirstStep extends Component {
    state={
            name: this.props.name,
            email: this.props.email,
            error: ''
          }

    isValidMail = e => {
        if(this.state.email.indexOf( '@' ) !== -1) {            
            this.props.setMail(this.state.email);
            this.setState({error: ''});
        }
        else{
            this.setState({error: '- в адрессе должен быть символ "@"'});
        }
    };

    setEmail = e => this.setState({email: e.target.value});

    setName = e => this.setState({name: e.target.value});

    onBlurName = () => this.props.setName(this.state.name);

    render() {
        return (
            <div className="first">
                <p>1.Введите имя и e-mail</p>
                <input type="text"
                       name="name"
                       placeholder="Имя"
                       value={this.state.name}
                       onChange={this.setName}
                       onBlur={this.onBlurName}
                />
                <input type="mail"
                       name="email"
                       placeholder="E-mail"
                       value={this.state.email}
                       onChange={this.setEmail}
                       onBlur={this.isValidMail}
                />
                <div className="error">
                    {this.state.error}
                </div>
            </div>
        );
    }
}

export default FirstStep;