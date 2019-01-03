import React, { Component } from 'react';
import './style.css'
import cat1 from './../../img/cat1.jpg'
import cat2 from './../../img/cat2.jpg'
import cat3 from './../../img/cat3.jpg'
import dog4 from './../../img/dog4.jpg'

class ThirdStep extends Component {
    state={
        isItCat:true,
        isChecked:false
    };

    change = e => {
        if(e.target.value.slice(0,3) === 'cat'){
            this.setState({isItCat: true});
            this.props.setCatPicture(e.target.value);
        }
        else{
            this.setState({isItCat: false});
        }
    };

    render() {
        return (
            <div className="fourth" onChange={this.change}>
                <p>4.Выберите любимого котика</p>
                <input type="radio" id="cat1"  name="animal" value="cat1"/>
                <input type="radio" id="cat2"  name="animal" value="cat2"/>
                <input type="radio" id="cat3"  name="animal" value="cat3"/>
                <input type="radio" id="dog4"  name="animal" value="dog4"/>
                <div className="pictures" >
                    <div>
                        <label htmlFor="cat1"><img src={cat1} alt="cat1"/></label>
                        <label htmlFor="cat2"><img src={cat2} alt="cat2"/></label>
                    </div>
                    <div>
                        <label htmlFor="cat3"><img src={cat3} alt="cat3"/></label>
                        <label htmlFor="dog4"><img src={dog4} alt="dog4"/></label>
                    </div>
                </div>
                <div className="valid">{this.state.isItCat || 'Ви выбрали собачку. А надо котика.'}</div>
            </div>
        );
    }
}

export default ThirdStep;