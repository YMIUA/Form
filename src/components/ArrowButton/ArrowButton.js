import React from 'react';
import './style.css'
import leftArrow from './../../img/angle-left.svg'
import rightArrow from './../../img/angle-right.svg'

const ArrowButton = props => (
        <div className="stepArrow">
            {props.step===1 || <button value="previous" onClick={props.previousStep}>
                    <img src={leftArrow} alt="leftArrow"/>
                    <span>Предыдущий</span>
                </button>}
            {props.step===4 ? <button value="finish"
                                      onClick={props.finishForm}
                                      disabled={!props.isValid}
                                >Завершить</button> :
                <button value={'next'}
                        onClick={props.nextStep}
                        disabled={!props.isValid}>
                    <span>Cледующий</span>
                    <img src={rightArrow} alt="rightArrow"/>
                </button>}
        </div>
);

export default ArrowButton;