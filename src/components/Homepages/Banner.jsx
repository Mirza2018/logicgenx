"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Banner = () => {
  const[slide,setSlide]=useState(slideData[0])
  const goNext=(id,add=1)=>{
if(id==6){
 return  setSlide(slideData[0])
}
  setSlide(slideData[id])

  }



  
  
    return (
<div className="carousel w-full ">



  <div  className="carousel-item relative w-full">
<Image
 placeholder='blur' blurDataURL='/loadingImg.gif'
    alt='slide'
    width={2500}
    height={1500}

      src={slide.imag}
      className="w-full" />

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a onClick={()=>goNext(slide.id)} className="btn btn-circle ms-20">❮</a>
      <a onClick={()=>goNext(slide.id,-1)}  className="btn btn-circle me-20">❯</a>
    </div>
  </div>



</div>


  

    );
};

export default Banner;

const slideData=[
  { id:1,
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-1.jpg",
    pre:"1",
    next:""
  },
  { id:2,
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-5.jpg",
    pre:"",
    next:""
  },
  { id:3,
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-2.jpg",
    pre:"",
    next:""
  },
  { id:4,
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-3.jpg",
    pre:"",
    next:""
  },
  { id:5,
    imag:"https://airtech.bolvosites.com/wp-content/uploads/2019/09/slider-6.jpg",
    pre:"",
    next:""
  },
  { id:6,
    imag:"https://plumbing-repair.themerex.net/wp-content/uploads/revslider/slider-1/178_1-1x-copyright-scaled.jpg",
    pre:"",
    next:""
  }
]