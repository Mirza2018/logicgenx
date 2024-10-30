
import Image from 'next/image';
import { Getservices } from '@/Api/Api';
import Service from './Service';
const Services =async () => {
    const services=await Getservices()
    // console.log(services);
    
    return (
        <div className=''>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-20 gap-9 place-items-center mb-10'>
              {
                services?.map(service=><Service key={service._id} service={service}></Service>)
               }

            </div>
            
            
        </div>
    );
};

export default Services;