"use client";
import Link from "next/link";
import {
  Award,
  BetweenHorizontalStart,
  Brain,
  Cable,
  ChevronRight,
  Cloud,
  Database,
  MonitorCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion'   
import bg from "/public/homebanner.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { RxDesktop } from "react-icons/rx";

const Homex2 = () => {
  return (
    <div className="w-full bg-gray-500 ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center  text-white ">
        <Image
          src={bg}
          alt="Mixer"
          className="absolute top-0 left-0 w-full h-screen 
        object-bottom  aspect-square opacity-40 z-10"
        />
        <div className="absolute inset-0 bg-black opacity-[100%]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
            Unlock Business Potential with Intelligent Tech Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white">
            Empowering your digital transformation with AI, Cloud, and Data
            Analytics
          </motion.p>
          <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
          
          
          >
            <Link
              href="/our-solutions"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
            >
              Discover Our Solutions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        className="py-20 relative bg-fixed bg-cover "
        style={{ backgroundImage: "url('/contract.png')" }}
      >
        {/* <Image src={bg2} alt="Mixer" className='absolute top-0 left-0 w-full h-full  object-cover aspect-square opacity-50 z-10 bg-cover bg-fixed'/> */}
        <div className="absolute inset-0 bg-[#040411] opacity-[40%] rounded-3xl "></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Intelligent Solutions
            </h2>
            <p className="text-lg md:text-xl text-white">
              Explore our comprehensive range of tech-driven solutions, from AI
              innovations to cloud infrastructure and advanced data analytics,
              designed to optimize and elevate your business operations.
            </p>
          </div>

          <div className=" w-full relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
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
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              {solutions.map((solution, index) => (

                <SwiperSlide
                  key={index}
                  className="py-16"
                >
                  <Link href={solution?.link}>

                  
                  <div className="bg-white rounded-lg shadow-lg h-72 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-indigo-600 mb-4 ">
                    {/* <solution.icon className="h-12 w-12" /> */}
                    {solution?.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  {/* <Link
                    href={"/our-solutions"}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link> */}
                  </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            
          <div className="select-none custom-prev absolute top-1/2 left-1 md:-left-4  z-10
           cursor-pointer text-white text-2xl bg-blue-400 rounded  py-1 px-2 -ml-3 md:ml-0">
            <GoArrowLeft />
          </div>
          <div className="select-none custom-next absolute top-1/2 right-0 md:-right-3 z-10
           cursor-pointer text-white text-2xl bg-blue-400 rounded py-1 px-2 -mr-3 md:mr-0">
            <GoArrowRight />
          </div>          
          </div>
    
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#0F1C45]">
        {/* <Image src={bg} alt="Mixer" className='absolute top-0 left-0 w-full h-full object-cover aspect-square opacity-50 z-10'/> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose LogicGenX
            </h2>
            <p className="text-xl text-white">
              Embracing the Future of Technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center h-72"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  {/* <item.icon className="h-8 w-8" /> */}
                  {item?.icon}
                </div>
                <h3 className="text-xl text-white/85 font-semibold ">
                  {item.title}
                </h3>
                <p className="text-white h-14">{item.description}</p>
                <p className="text-white text-[14px] text-justify mt-2 ">{item?.details}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20  bg-[#0F1C45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-white">
              See how we&#39;ve helped businesses achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-gray-600 mb-6">
                  &#34;{testimonial.quote}&#34;
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">{testimonial.position}</div>
                  <div className="text-indigo-600">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/success-stories">
              <div className="grid gap-8 items-start justify-center mt-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200">
                      Read More Success Stories&rarr;
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-[#0F1C45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            Get in touch with our team to discuss how LogicGenX&#39;s solutions
            can empower your organization
          </p>

          <Link href="/connect-with-us">
            <div className="grid gap-8 items-start justify-center mt-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200">
                    Book a Consultation&rarr;
                  </span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Homex2;

const solutions = [
  {
    title: "AI-Driven Innovations",
    description:
      "Harness AI to transform data into actionable insights, automate tasks, and drive predictive analytics.",
    icon: <Brain className="h-12 w-12" />,
    link: "/our-solutions#ai",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Build secure, scalable cloud infrastructure to support your business's digital transformation.",
    icon: <Cloud className="h-12 w-12" />,
    link: "/our-solutions#cloud",
  },
  {
    title: "Data Analytics",
    description:
      "Empower data-driven decisions with business intelligence, advanced analytics, and data visualization.",
    icon: <Database className="h-12 w-12" />,
    link: "/our-solutions#data",
  },
  {
    title: "Intranet Excellence",
    description:
      "Optimize internal collaboration with custom-built intranets tailored to your organizations needs.",
    icon: <BetweenHorizontalStart className="h-12 w-12" />,
    link: "/our-solutions#excellence",
  },
  {
    title: "Power Platform Mastery",
    description:
      "Create custom apps, automate workflows, and gain insights using low-code tools.",
    icon: <Cable className="h-12 w-12" />,
    link: "/our-solutions#power",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline processes and reduce manual tasks with intelligent workflow automation solutions.",
    icon: <Workflow className="h-12 w-12" />,
    link: "/our-solutions#work",
  },
  {
    title: "RPA Desktop Flows",
    description:
      "Automate repetitive tasks for improved efficiency and accuracy, freeing up valuable resources.",
      icon: <RxDesktop className="h-12 w-12" />,
      link: "/our-solutions#rpa",
  },
];

const differentiators = [
  {
    title: "Innovation",
    description:
      "Embracing the Future of Technology.",
    icon: <Zap className="h-8 w-8" />,
    details:"Our commitment to cutting-edge technology enables us to deliver AI-driven solutions and cloud innovations that keep your business at the forefront of industry trends. We harness the latest advancements to drive efficiency, agility, and growth in every project"
  },
  {
    title: "Expertise",
    description:
      "Years of Combined Technical Knowledge.",
    icon: <Award className="h-8 w-8" />,
     details:"Our team of certified professionals brings a wealth of experience across AI, cloud computing, and data analytics. We ensure each solution is implemented with precision, giving you confidence in robust, reliable results that add value to your operations."
  },
  {
    title: "Tailored Solutions",
    description:
      "Customized for Your Unique Needs.",
    icon: <Target className="h-8 w-8" />,
     details:"No two businesses are alike, and neither are our solutions. We work closely with you to understand your specific challenges and goals, crafting bespoke strategies that align with your objectives, scale seamlessly, and enhance your competitive edge"
  },
  {
    title: "Client-Centric",
    description:
      "Partnering for Your Success.",
    icon: <Users className="h-8 w-8" />,
     details:"At LogicGenX, we believe in building long-term partnerships. Your success is our priority, and we provide dedicated support, transparent communication, and ongoing guidance to help you achieve and exceed your goals with confidence."
  },
];

const testimonials = [
  {
    quote:
      "LogicGenX transformed our operations with their AI solutions. We've seen a 40% increase in efficiency.",
    author: "Sarah Chen",
    position: "CTO, TechCorp Global",
    industry: "Technology",
  },
  {
    quote:
      "Their cloud infrastructure expertise helped us scale seamlessly while reducing costs by 30%.",
    author: "Michael Rodriguez",
    position: "Director of Operations, HealthFirst",
    industry: "Healthcare",
  },
  {
    quote:
      "The data analytics solutions provided invaluable insights that drove our strategic decisions.",
    author: "Emma Thompson",
    position: "CEO, FinanceHub",
    industry: "Finance",
  },
];
