import React from 'react';
import './style.css'

const StepButton = props =>(
        <div className='stepButton' onClick={props.changeStep}>
            {[1, 2, 3, 4].map((i) =>
                <button value={i}
                        className={i === props.activeStep ? "activ" : null}
                        disabled={props.activeStep <= i}>{i}</button>)
            }
         </div>
);
export default StepButton;