import Link from 'next/link';
import { Award, Brain, ChevronRight, Cloud, Database, Target, Users, Workflow, Zap } from 'lucide-react';
import Image from 'next/image';
import bg from '/public/bg1.jpg'
import bg2 from '/public/contract.png'

const Homex2 = () => {
    
    return (
        <div className="w-full bg-gray-500 " >
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center  text-white ">
        <Image src={bg} alt="Mixer" className='absolute top-0 left-0 w-full h-full object-cover aspect-square opacity-50 z-10'/>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 opacity-80"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Unlock Business Potential with Intelligent Tech Solutions
            </h1>
            <p

              className="text-xl md:text-2xl mb-8 text-white"
            >
              Empowering your digital transformation with AI, Cloud, and Data
              Analytics
            </p>
            <div

            >
              <Link
                href="/solutions"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
              >
                Discover Our Solutions
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
  
  
        {/* Solutions Section */}
        <section className="py-20 relative bg-fixed bg-cover "  style={{ backgroundImage: "url('/contract.png')" }}>
        {/* <Image src={bg2} alt="Mixer" className='absolute top-0 left-0 w-full h-full  object-cover aspect-square opacity-50 z-10 bg-cover bg-fixed'/> */}
        <div className="absolute inset-0 bg-[#040411] opacity-[40%] rounded-3xl "></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Intelligent Solutions
              </h2>
              <p className="text-xl text-white">
                Comprehensive tech-driven solutions designed to optimize and
                elevate your business
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  relative z-10">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="text-indigo-600 mb-4">
                    {/* <solution.icon className="h-12 w-12" /> */}
                    {solution?.icon}

                  </div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Link
                    href={solution.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-20 " >
        {/* <Image src={bg} alt="Mixer" className='absolute top-0 left-0 w-full h-full object-cover aspect-square opacity-50 z-10'/> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose LogicGenX
              </h2>
              <p className="text-xl text-white">
                Partner with us for innovative solutions and exceptional results
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                    {/* <item.icon className="h-8 w-8" /> */}
                    {item?.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-white">
                See how we've helped businesses achieve their goals
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
                  <div className="text-gray-600 mb-6">"{testimonial.quote}"</div>
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
              <Link
                href="/success-stories"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Read More Success Stories
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Get in touch with our team to discuss how LogicGenX's solutions can
              empower your organization
            </p>
            <Link
              href="/connect-with-us"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-900 transition-colors"
            >
              Book a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    );
};

export default Homex2;

const solutions = [
    {
      title: 'AI-Driven Innovations',
      description:
        'Harness AI to transform data into actionable insights, automate tasks, and drive predictive analytics.',
      icon: <Brain className="h-12 w-12" />,
      link: '/solutions#ai',
    },
    {
      title: 'Cloud Infrastructure',
      description:
        "Build secure, scalable cloud infrastructure to support your business's digital transformation.",
      icon: <Cloud className="h-12 w-12" />,
      link: '/solutions#cloud',
    },
    {
      title: 'Data Analytics',
      description:
        'Empower data-driven decisions with business intelligence, advanced analytics, and data visualization.',
      icon: <Database className="h-12 w-12" />,
      link: '/solutions#data',
    },
    {
      title: 'Workflow Automation',
      description:
        'Streamline processes and reduce manual tasks with intelligent workflow automation solutions.',
      icon: <Workflow className="h-12 w-12" />,
      link: '/solutions#automation',
    },
  ];

  
const differentiators = [
    {
      title: 'Innovation',
      description:
        'Embracing cutting-edge technology to keep your business at the forefront.',
      icon: <Zap  className="h-8 w-8" />,
    },
    {
      title: 'Expertise',
      description:
        'Years of combined technical knowledge across AI, cloud, and analytics.',
      icon: <Award  className="h-8 w-8" />,
    },
    {
      title: 'Tailored Solutions',
      description:
        'Custom strategies aligned with your unique objectives and challenges.',
      icon: <Target  className="h-8 w-8" />,
    },
    {
      title: 'Client-Centric',
      description:
        'Building lasting partnerships with dedicated support and guidance.',
      icon: <Users  className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "LogicGenX transformed our operations with their AI solutions. We've seen a 40% increase in efficiency.",
      author: 'Sarah Chen',
      position: 'CTO, TechCorp Global',
      industry: 'Technology',
    },
    {
      quote:
        'Their cloud infrastructure expertise helped us scale seamlessly while reducing costs by 30%.',
      author: 'Michael Rodriguez',
      position: 'Director of Operations, HealthFirst',
      industry: 'Healthcare',
    },
    {
      quote:
        'The data analytics solutions provided invaluable insights that drove our strategic decisions.',
      author: 'Emma Thompson',
      position: 'CEO, FinanceHub',
      industry: 'Finance',
    },
  ];
  