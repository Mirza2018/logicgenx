
import { ChevronRight, Shield, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';


const values = [
  {
    title: 'Innovation',
    description: 'Constantly pushing the boundaries to develop groundbreaking solutions.',
    icon: Zap,
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency and ethical practices.',
    icon: Shield,
  },
  {
    title: 'Client-Centric Approach',
    description: 'Focusing on the specific needs and success of each client.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: 'Working closely with our clients and partners to create solutions that drive meaningful impact.',
    icon: Users,
  },
];

const industries = [
  'Healthcare',
  'Finance',
  'Legal',
  'Real Estate',
  'Technology',
  'Manufacturing',
];

export default function Mission() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-center bg-cover text-white bg-[#0F1C45]" >
     
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Mission in AI and Technology
          </h1>
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Learn more about our goals, our approach to AI technologies, and our commitment to driving innovation
          </p>
        </div>
      </section>
<div className='relative bg-contain bg-fixed '    style={{ backgroundImage: "url('/missionBanner3.png')" }}>
<div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Mission Statement Section */}
      <section className="py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">What is LogicGenX&#39;s Mission?</h2>
            <p className="text-xl text-white/85 leading-relaxed">
              At LogicGenX, our mission is to empower businesses with cutting-edge technology solutions that drive growth, 
              improve efficiency, and enable transformative change. We are committed to pioneering advancements in artificial 
              intelligence, cloud infrastructure, and data analytics, providing our clients with tools to excel in a 
              fast-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* AI Approach Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>

            
            <div className='bg-white p-8 rounded-lg shadow-lg' >
              <h2 className="text-3xl font-bold text-black mb-6">How Do We Approach AI and Innovation?</h2>
              <p className="text-lg text-black/85 mb-6">
                We believe in leveraging AI responsibly to enhance human potential and improve business outcomes. 
                Our approach to AI focuses on creating intelligent, data-driven solutions that help businesses 
                automate repetitive tasks, extract meaningful insights, and deliver personalized experiences to 
                their customers.
              </p>
                
              </div >
              <div className='bg-white p-8 rounded-lg shadow-lg mt-6' >
              <h3 className="text-2xl font-bold text-black mb-4">Why is Responsible AI Important to Us?</h3>
              <p className="text-lg text-black">
                At LogicGenX, we recognize the importance of ethical AI practices. We prioritize transparency, 
                fairness, and accountability in every AI solution we create. Our commitment to responsible AI 
                development means we strive to minimize bias, safeguard data privacy, and use AI for positive, 
                constructive purposes that benefit our clients and society.
              </p>
            </div>
          </div>

            <div

              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-6">Digital Transformation Approach</h3>
              <p className="text-lg text-black mb-6">
                We are passionate about helping businesses adapt to the demands of the digital age. By integrating 
                AI, cloud computing, and data analytics into our solutions, we enable our clients to become more 
                agile, efficient, and resilient.
              </p>
              <ul className="space-y-4">
                {['Automation', 'Workflow Optimization', 'Data Visualization', 'Predictive Analytics'].map((item, index) => (
                  <li key={index} className="flex items-center text-black">
                    <ChevronRight className="h-5 w-5 text-indigo-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



</div>
      {/* Core Values Section */}
      <section className="py-20 bg-[#0F1C45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-white">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#0F1C45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Impact</h2>
            <p className="text-xl text-white">
              Our solutions have successfully transformed businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-900 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Partner with us to bring innovative, ethical AI solutions to your organization
          </p>
          {/* <Link
            href="/contact-with-us"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-900 transition-colors"
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link> */}

          <Link href="/connect-with-us" >
          <div className="grid gap-8 items-start justify-center mt-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200">Get Started&rarr;</span>
              </button>
            </div>
          </div>
        </Link>


        </div>
      </section>
    </div>
  );
}