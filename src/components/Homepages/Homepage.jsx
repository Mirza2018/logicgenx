import React from 'react';
import Banner from './Banner';
import CustomerSuport from './CustomerSuport';
import ServiceCard1 from './ServiceCard1';
import ServiceCard2 from './ServiceCard2';
import Priceing from './Priceing';
import HappyCustommer from './HappyCustommer';
import CustommerReview from './CustommerReview';
import Banner2 from '../bdcaling/Banner2';
import Feature from '../bdcaling/Feature';
import AiSolution from '../bdcaling/AiSolution';
import Solutions from '../bdcaling/Solutions';


const Homepage = () => {
    return (
        <div>
            
            <Banner2/>
            <Feature/>
            <AiSolution/>
            <Solutions/>
           {/* <ServiceCard1/>
           <ServiceCard2/>
           <Priceing/>
           <CustommerReview/>
           <CustomerSuport/>
           <HappyCustommer/> */}
      
           
        </div>
    );
};

export default Homepage;