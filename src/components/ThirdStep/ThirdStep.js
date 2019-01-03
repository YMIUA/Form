import React, { Component } from 'react';
import './style.css'

const SOCIAL_NET = ['Facebook','VK','Twitter','Ok'];

class ThirdStep extends Component {
    constructor(props){
        super(props);
        this.state = this.props.socialNetwork
    }

    handleChange = e => {
        const item = e.target.name.slice(8);
        this.setState(prevState => ({
            [item]: !prevState[item]
        }));
    };

    setUrl = e => {
        let id = e.target.id.slice(5);
        let newLinks = [...this.state.links];
        Object.assign(newLinks[id], {url: e.target.value})
        this.setState({links: newLinks});
    }

    componentWillUnmount(){
        this.props.setSocialNetwork(this.state);
    }

    render() {
        console.log(typeof this.state.links[0].url);
        return (
            <div className="third">
                <p>3.Отметьте социальные сети</p>
                <div className="socialNetwork">
                    {SOCIAL_NET.map( (item, index) =>
                         <div key = {item}>
                            <div className="checkbox">
                                <input name={'checkbox' + item}
                                       type="checkbox"
                                       checked={this.state[item]}
                                       onChange={this.handleChange}
                                />
                                <span>{item}</span>
                            </div>
                             {this.state[item] ?
                                 <input className="link"
                                        type="text"
                                        name={item}
                                        id={`input${index}`}
                                        value={this.state.links[index].url}
                                        onChange={this.setUrl}
                                        placeholder={`Ваша страница в ${item}`}
                                 />:
                                 <div className="noneInput"/>}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ThirdStep;