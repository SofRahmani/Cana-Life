"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import Link from 'next/link';
import Image from 'next/image';
import ImageTest from '../public/test.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import { title } from './primitives'

export default function Carousel(): JSX.Element {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className=" max-w-full  mx-auto h-[500px] md:h-80 rounded-lg"
        spaceBetween={40}
        navigation
        // autoplay={{ delay: 5000 }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className=" flex justify-center items-center border-2 border-solid border-indigo-900 rounded-lg bg-indigo-200 dark:bg-transparent ">
          <Link href="/canada" className=' h-full w-full flex flex-col md:flex-row '>
            <div className='h-[50%] md:h-full flex justify-center items-center md:w-[50%] '>
              <Image src={ImageTest} alt="Picture of the author" className=' h-full w-full object-cover rounded-t-md md:rounded-l-md md:rounded-t-none ' />
            </div>
            <div className='h-[50%] md:h-full p-16 flex gap-2 flex-col justify-center items-center md:w-[50%]'>
              <h3 className={`${title({ size: "sm", color: "violet" })} drop-shadow-lg `}>World of Warcraft</h3>
              <p className=' text-ellipsis line-clamp-3 md:line-clamp-6 text-justify '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et earum eligendi eos, accusantium amet enim aliquid aspernatur labore, impedit, dolores harum! Perferendis quas iure sequi, in consectetur mollitia aperiam tenetur omnis vitae libero doloremque non possimus id eum dolore saepe eaque debitis quo impedit enim unde optio. Obcaecati officiis fugiat quisquam, error ipsam recusandae inventore blanditiis dolores, impedit rem doloribus nobis porro dolorum, veniam quae velit deleniti id qui laudantium ea nam quibusdam! Saepe, molestias incidunt delectus impedit minus quia quos consectetur corporis at maiores, ducimus nihil libero tempore, praesentium fugit ullam tempora eveniet veritatis. Esse veniam temporibus nobis accusantium?fugiat quisquam, error ipsam recusandae inventore blanditiis dolores, impedit rem doloribus nobis porro dolorum, veniam quae velit deleniti id qui laudantium ea nam quibusdam! Saepe, molestias incidunt delectus impedit minus quia quos consectetur corporis at maiores, ducimus nihil libero tempore, praesentium fugit ullam tempora eveniet veritatis. Esse veniam temporibus nobis accusantium?</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className=" bg-blue-400 flex justify-center items-center ">Slide 2</SwiperSlide>
        <SwiperSlide className=" bg-cyan-400 flex justify-center items-center ">Slide 3</SwiperSlide>
        <SwiperSlide className=" bg-green-400 flex justify-center items-center ">Slide 4</SwiperSlide>
        <SwiperSlide className=" bg-violet-400 flex justify-center items-center ">Slide 5</SwiperSlide>
        <SwiperSlide className=" bg-yellow-400 flex justify-center items-center ">Slide 6</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};
