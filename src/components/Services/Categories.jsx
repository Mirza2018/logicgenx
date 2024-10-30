import { Getservices } from '@/Api/Api';
import React from 'react';
import Service from './Service';

const Categories =async (params) => {
   
    const services=await Getservices()
    const catigories=services.filter(s=>s.category===params.category)
    //   console.log(catigories);
    
    return (
        <div className=''>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20 gap-9 place-items-center mb-10'>
          {
            catigories?.map(service=><Service key={service._id} service={service}></Service>)
           }

        </div>
        
        
    </div>
    );
};

export default Categories;