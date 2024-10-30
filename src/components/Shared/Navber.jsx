"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillCloseCircle, AiTwotoneShopping } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import MyCart from '../MyCart/MyCart';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navber = () => {
  const pathName = usePathname();
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const buy = JSON.parse(localStorage.getItem("nextorderDetails"));
    setItems(buy);
  }, []);

  console.log(cart);

  const menuItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Our Solutions",
      path: "/our-solutions"
    },
    {
      title: "Success Stories",
      path: "/success-stories"
    },
    {
      title: "Our Mission",
      path: "/our-mission"
    },
    {
      title: "Connect With Us",
      path: "/connect-with-us"
    },
  ];

  return (
    <div className='bg-white sticky top-0 z-50 text-black'>
      <div className="container mx-auto flex flex-row justify-between items-center navbar">



        {/* Mobile menus */}
        <div className="dropdown lg:hidden cursor-pointer">
          <div tabIndex={0}>
            {
              open ?
                <RxCross1 onClick={() => setOpen(!open)} className='text-2xl me-8 font-bold text-black' />
                :
                <GiHamburgerMenu onClick={() => setOpen(!open)} className='text-2xl me-8' />
            }
          </div>

          {open ? (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  p-2 shadow me-56">
              {menuItems.map(menu =>
                <Link className={`${pathName === menu?.path && "text-sky-500"}`} href={menu.path} key={menu.title}>
                  <li className='p-2 mx-3 text-base font-bold uppercase text-black hover-double-underline'>
                    {menu.title}
                  </li>
                </Link>
              )}
            </ul>
          ) : null}
        </div>


        {/* Logo Section */}
        <div className='w-32'>
          <Link href='/'>
            <Image placeholder='blur' blurDataURL='/logo.png'
             priority src='/logo.png' height={300} width={300} alt='next-level-services' />
          </Link>
        </div>


        {/* Big Screen Menu */}
        <div className="hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map(menu =>
              <Link className={`${pathName === menu?.path && "text-sky-500"}`} href={menu.path} key={menu.title}>
                <li className='p-2 mx-3 text-base text-black font-bold uppercase relative hover-double-underline'>
  {menu.title}
</li>

              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
