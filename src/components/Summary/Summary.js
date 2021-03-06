import React, { Component } from 'react';
import "./style.css";

export default class Summary extends Component {
    constructor(props){
        super(props);
        this.catPicture=require(`./../../img/${this.props.state.cat}.jpg`)
    }
    render() {
        return <div className="summary">
            <div className="card">
                <div className="info">
                    <div className="mainInfo">
                        <h1>{this.props.state.name}</h1>
                        <p>{this.props.state.email}</p>
                    </div>
                    <p>{`${this.props.state.city}, ${this.props.state.country}`}</p>
                    <div className="socialNetwork">
                        {this.props.state.socialNetwork.links
                            .filter(i => i.url !== '')
                            .map( (item, index) => {
                                return (
                                    <div key={index}>
                                        <span className="socialName">{item.name + ': '}</span>
                                        <span className="socialLink">{item.url}</span>
                                    </div>
                                )
                        })}
                    </div>
                </div>
                <div className="picture">
                    <img src={this.catPicture} alt={this.props.state.cat}/>
                </div>
            </div>
            <button className="reset" onClick={this.props.reset()}>
                Пройти заново
            </button>
        </div>
    }
}