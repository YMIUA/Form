import React, { Component } from 'react';
import './style.css'

const COUNTRIES = require('./../../countries.json');
const CITY = require('./../../cities.json');

class SecondStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryId:this.props.countryId
        };
        this.onSelectedCountry = this.onSelectedCountry.bind(this);
        this.onSelectedCity = this.onSelectedCity.bind(this);
    }

    onSelectedCountry = e => {
        this.setState({countryId: e.target.value} );
        this.props.setCountryId( e.target.value );
        this.props.setCountry( COUNTRIES[e.target.value] );
    };

    onSelectedCity = e => this.props.setCity( e.target.value );

    render() {
        let countriesOptions=[];
        let citiesOptions=[];
        for (let key in COUNTRIES){
            countriesOptions.push(<option key={key} value={key}> {COUNTRIES[key]}</option>);
        }

        for (let key in CITY){
            if(CITY[key].country === parseInt(this.state.countryId)){
                citiesOptions.push(<option key={key} value={CITY[key].name}> {CITY[key].name}</option>);
            }
        }

        return (
            <div className="second">
                <p>2.Выберите страну и город</p>
                <select size="1"
                        name="country"
                        defaultValue={this.props.country==='' && 'countryes'}
                        onChange={this.onSelectedCountry}
                        >
                    <option selected disabled value="countryes" >Страна</option>
                    {countriesOptions}
                </select>
                {this.props.country === '' ? <div className={"nullSelect"}/> :
                <select size="1"
                        name="sity"
                        defaultValue={this.props.city==='' && 'cities'}
                        onChange={this.onSelectedCity}
                        >
                    <option selected disabled value="cities" >Город</option>
                    {citiesOptions}
                </select>
                }
            </div>
        );
    }
}

export default SecondStep;