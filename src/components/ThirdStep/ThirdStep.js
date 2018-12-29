import React, { Component } from 'react';
import './style.css'

const socialNet = ['Facebook','VK','Twitter','Ok'];

class ThirdStep extends Component {
    constructor(props){
        super(props);
        this.state = {
            facebook: false,
            vk: false,
            twitter: false,
            ok: false,
            links:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.setLinks = this.setLinks.bind(this);
    }

    handleChange = e => {
        const item = e.target.name.slice(8);
        this.setState(prevState => ({
            [item]: !prevState[item]
        }));
    };

    setLinks = e => {
        const name = e.target.name;
        const url = e.target.value;
        this.setState(prevState => {
            links: prevState.links.push({name:name, url:url})
        });
    };

    componentWillUnmount(){
        this.props.setSocialNetwork(this.state);
    }

    render() {
        return (
            <div className='third'>
                <p>3.Отметьте социальные сети</p>
                <div className='socialNetwork'>
                    {socialNet.map((i)=>
                         <div key = {i}>
                            <div className="checkbox">
                                <input name={'checkbox'+i}
                                       type="checkbox"
                                       checked={this.state[i]}
                                       onChange={this.handleChange}
                                />
                                <span>{i}</span>
                            </div>
                             {this.state[i] ?
                                 <input className='link'
                                        type="text"
                                        name={i}
                                        placeholder={`Ваша страница в ${i}`}
                                        onBlur={this.setLinks}/>
                                 :<div className='noneInput'/>}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ThirdStep;