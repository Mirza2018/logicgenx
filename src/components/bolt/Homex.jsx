import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Database,
  Workflow,
  ChevronRight,
  Award,
  Users,
  Target,
  Zap,
} from 'lucide-react';

import Link from 'next/link';


const solutions = [
  {
    title: 'AI-Driven Innovations',
    description:
      'Harness AI to transform data into actionable insights, automate tasks, and drive predictive analytics.',
    icon: Brain,
    link: '/solutions#ai',
  },
  {
    title: 'Cloud Infrastructure',
    description:
      "Build secure, scalable cloud infrastructure to support your business's digital transformation.",
    icon: Cloud,
    link: '/solutions#cloud',
  },
  {
    title: 'Data Analytics',
    description:
      'Empower data-driven decisions with business intelligence, advanced analytics, and data visualization.',
    icon: Database,
    link: '/solutions#data',
  },
  {
    title: 'Workflow Automation',
    description:
      'Streamline processes and reduce manual tasks with intelligent workflow automation solutions.',
    icon: Workflow,
    link: '/solutions#automation',
  },
];

const differentiators = [
  {
    title: 'Innovation',
    description:
      'Embracing cutting-edge technology to keep your business at the forefront.',
    icon: Zap,
  },
  {
    title: 'Expertise',
    description:
      'Years of combined technical knowledge across AI, cloud, and analytics.',
    icon: Award,
  },
  {
    title: 'Tailored Solutions',
    description:
      'Custom strategies aligned with your unique objectives and challenges.',
    icon: Target,
  },
  {
    title: 'Client-Centric',
    description:
      'Building lasting partnerships with dedicated support and guidance.',
    icon: Users,
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

export default function Homex() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Unlock Business Potential with Intelligent Tech Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Empowering your digital transformation with AI, Cloud, and Data
            Analytics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
            >
              Discover Our Solutions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Intelligent Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tech-driven solutions designed to optimize and
              elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <solution.icon className="h-12 w-12" />
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LogicGenX
            </h2>
            <p className="text-xl text-gray-600">
              Partner with us for innovative solutions and exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
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
              </motion.div>
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
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-900 transition-colors"
          >
            Book a Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
