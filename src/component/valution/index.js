import React from 'react';
import {CareEvaluation} from './slider/Valuation/CareEvaluation';
import { AboutWeBuyCar } from './slider/AboutWeBuyCars/AboutWeBuyCar';
import { ThreeSteps } from './slider/threeSteps/ThreeSteps';
import Slider from './slider/index';
import Webuy from './we buy car/index';
import './style.css';

function index() {
    return (
        <div>
            <CareEvaluation/>
            <AboutWeBuyCar/>
            <ThreeSteps/>
            <Webuy/>
        </div>
    )
}

export default index;
