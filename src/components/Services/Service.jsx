import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Service = ({service}) => {
    const {name,image,price,_id,category}=service
    // console.log(service);

    
    return (
      <div>

<div
  className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg  w-80 hover:shadow-xl bg-white"
>

  <Image placeholder='blur' blurDataURL='/loadingImg.gif' loading="lazy" style={{ aspectRatio: 3/2 }}  className='object-contain' src={image} alt={name} width={400} height={400}   />

  <div className="px-5 pt-2 flex flex-col">
    <h2 className="font-semibold">{name} </h2>

    <Link href={`/services/${category}/${_id}`} className="btn bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:scale-110  my-4">Book now</Link>
  </div>
</div>



</div>

    );
};

export default Service;