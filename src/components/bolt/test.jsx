<Swiper
slidesPerView={1}
spaceBetween={10}
autoplay={{
  delay: 3000,
  disableOnInteraction: false,
}}
pagination={{
  clickable: true,
}}
breakpoints={{
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
>
{
  categories.map((category) => (
    <SwiperSlide key={category.name}>
      {/* <Link to={`${category.name}`}> */}
        <div  onClick={()=>handleNavigation(category.name)} className="bg-teal-600 shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 ">
           <div className="p-4">
            <h4 className="text-xl font-bold text-white text-center">
              {category?.name}
            </h4>
          </div>
          
          <img  loading="lazy" 
            src={category?.img}
            alt={category?.name}
            className="w-full  h-60 object-cover"
          />

         
        </div>
      {/* </Link> */}
    </SwiperSlide>
  ))
}
</Swiper>