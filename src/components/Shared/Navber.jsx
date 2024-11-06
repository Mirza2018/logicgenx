"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const pathName = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Our Solutions", path: "/our-solutions" },
    { title: "Success Stories", path: "/success-stories" },
    { title: "Our Mission", path: "/our-mission" },
    { title: "Connect With Us", path: "/connect-with-us" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  }

  return (
    // <div className="bg-gradient-to-br from-slate-100 via-gray-200 to-slate-200 sticky top-0 z-50 text-black">
    <div className="bg-white sticky top-0 z-50 text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="relative" ref={menuRef}>
          <div
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out cursor-pointer"
            aria-label="Toggle menu"
          >
    <label className="flex flex-col gap-2 w-8 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      {/* Top Line */}
      <div
        className={`rounded-2xl h-[3px] bg-black duration-300 transform ${
          isOpen ? "rotate-45 translate-y-[10px]" : "w-full"
        }`}
      ></div>
       
      {/* Middle Line */}
      <div
        className={`rounded-2xl h-[3px] bg-black duration-300 transform ${
          isOpen ? "opacity-0" : "opacity-100 w-full"
        }`}
      ></div>
      
      {/* Bottom Line */}
      <div
        className={`rounded-2xl h-[3px] bg-black duration-300 transform ${
          isOpen ? "-rotate-45 -translate-y-[10px]" : "w-full"
        }`}
      ></div>
    </label>



            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-2 top-12 left-0 w-[200px] pt-2 pb-3 space-y-1 sm:px-3 absolute bg-white z-50 rounded-xl shadow-lg"
                >
                  {menuItems.map((item) => (
                    <motion.div key={item.title} variants={itemVariants}>
                      <Link
                        href={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          pathName === item.path ? "text-[#3363ff]" : "text-black"} hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="md:w-36 w-28">
          <Link href="/">
            <Image
              priority
              src="/logo.png"
              height={1000}
              width={1000}
              alt="logicGenX"
            />
          </Link>
        </div>

        <div className="hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((menu) => (
              <Link
                className={`${pathName === menu.path ? "text-sky-500" : ""}`}
                href={menu.path}
                key={menu.title}
              >
                <li className="p-2 mx-3 text-base  font-bold uppercase relative hover-double-underline">
                  {menu.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>

 
      </div>
    </div>
  )
}

export default Navbar