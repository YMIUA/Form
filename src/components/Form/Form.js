import React, { Component } from 'react';
import "./style.css";
import StepButton from './../StepButton/StepButton'
import ArrowButton from './../ArrowButton/ArrowButton'
import FirstStep from './../FirstStep/FirstStep'
import SecondStep from './../SecondStep/SecondStep'
import ThirdStep from './../ThirdStep/ThirdStep'
import FourthStep from './../FourthStep/FourthStep'
import Summary from './../Summary/Summary'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepNow: 1,
            nextStepValid: false,
            name: '',
            email: '',
            country: '',
            countryId: '',
            city: '',
            socialNetwork: {
                facebook: false,
                vk: false,
                twitter: false,
                ok: false,
                links:[]
            },
            cat: '',
            finishForm: false
        };
    };

    reset = ()=> {
        this.setState({
            stepNow: 1,
            nextStepValid: false,
            name: '',
            email: '',
            country: '',
            countryId: '',
            city: '',
            socialNetwork: {
                facebook: false,
                vk: false,
                twitter: false,
                ok: false,
                links:[]
            },
            cat: '',
            finishForm: false
        });
    };

    setMail = value => this.setState({email:value});

    setName = value => this.setState({name:value});

    setCountry = value => this.setState({country:value});

    setCountryId = value => this.setState({countryId:value});

    setCity = value => this.setState({city: value});

    setSocialNetwork = value => this.setState({socialNetwork:value});

    setCatPicture = value => this.setState({cat:value});

    nextStep = () => this.setState({stepNow: this.state.stepNow + 1});

    previousStep = () => this.setState({stepNow: this.state.stepNow-1});

    changeStep = e => {
        return !isNaN(e.target.value) ? this.setState({stepNow: +e.target.value}) : null;
    };

    finishForm = () => this.setState({finishForm: true});

    isNextButton = () => {
        switch (this.state.stepNow){
            case 1: return (this.state.name.length !== 0) && (this.state.email.length !== 0);
            case 2: return (this.state.country.length !== 0) && (this.state.city.length !== 0);
            case 3: return true;
            case 4: return this.state.cat.length !== 0;
            default : return false
        }
    };

    getValidStep = () => {
        if(this.state.cat.length){
            return 5
        }else if((this.state.country.length !== 0) && (this.state.city.length !== 0)){
            return 3
        }else {
            return 2
        }
    };

    getComponent = (componentsNumber) => {
        switch (componentsNumber) {
            case 1: return (
                <FirstStep setName = {value => this.setName(value)}
                           setMail = {value => this.setMail(value)}
                           name={this.state.name}
                           email={this.state.email}
                />);
            case 2: return (
                <SecondStep setCountry = {value => this.setCountry(value)}
                            setCity = {value => this.setCity(value)}
                            setCountryId = {value => this.setCountryId(value)}
                            country = {this.state.country}
                            countryId = {this.state.countryId}
                            city = {this.state.city}
                />);
            case 3: return <ThirdStep setSocialNetwork = {value => this.setSocialNetwork(value)}/>;
            case 4: return <FourthStep setCatPicture = {value => this.setCatPicture(value)}/>;
            default: return <div/>
        }
    };

    render() {
        if(this.state.finishForm){
             return(
                 <Summary reset={() => this.reset}
                          state={this.state}
                 />
             )
        }
        else {
            return (
                < div className = 'form' >
                    < StepButton changeStep = {this.changeStep}
                                 validStep = {this.getValidStep()}
                                 activeStep = {this.state.stepNow}
                    />
                    {this.getComponent(this.state.stepNow)}
                    <ArrowButton step = {this.state.stepNow}
                               nextStep = {this.nextStep}
                               previousStep = {this.previousStep}
                               finishForm = {this.finishForm}
                               isValid = {this.isNextButton()}
                    />
                </div>
            );
        }
    }
}