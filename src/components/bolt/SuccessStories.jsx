import React from 'react';
import { motion } from 'framer-motion';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import StoryCard from './SuccessStories/StoryCard';

const successStorie = [
  {
    title: 'AI-Powered Analytics Transformation',
    company: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'TechCorp struggled with processing vast amounts of customer data efficiently, leading to delayed insights and missed opportunities.',
    solution: 'Implemented our AI-driven analytics solution with real-time processing capabilities and predictive modeling.',
    results: [
      '40% increase in operational efficiency',
      'Real-time customer insights',
      'Reduced data processing time by 60%',
      'Improved customer satisfaction by 35%'
    ],
    testimonial: {
      quote: "LogicGenX's AI solution transformed how we handle data. The real-time insights have been game-changing for our decision-making process.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Global"
    }
  },
  {
    title: 'Healthcare Cloud Migration Success',
    company: 'HealthFirst',
    industry: 'Healthcare',
    challenge: 'Managing sensitive patient data across multiple legacy systems while ensuring compliance and accessibility.',
    solution: 'Executed a comprehensive cloud migration strategy with enhanced security measures and automated workflows.',
    results: [
      '30% reduction in operational costs',
      '99.99% system uptime',
      'Improved data accessibility',
      'Enhanced security compliance'
    ],
    testimonial: {
      quote: "The cloud migration was seamless, and the new system has significantly improved our operational efficiency while maintaining the highest security standards.",
      author: "Michael Rodriguez",
      position: "Director of Operations, HealthFirst"
    }
  },
  {
    title: 'Financial Analytics Revolution',
    company: 'FinanceHub',
    industry: 'Finance',
    challenge: 'Needed advanced analytics capabilities to process market data and generate actionable trading insights quickly.',
    solution: 'Deployed our custom financial analytics platform with AI-powered predictive modeling and real-time market analysis.',
    results: [
      'Reduced analysis time by 75%',
      'Increased trading accuracy by 45%',
      'Real-time market insights',
      'Automated reporting workflows'
    ],
    testimonial: {
      quote: "The analytics platform has revolutionized our trading strategies. We're now able to make data-driven decisions faster than ever.",
      author: "Emma Thompson",
      position: "CEO, FinanceHub"
    }
  }
];

export default function SuccessStories() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Success Stories
          </h1>
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover how we've helped businesses across industries achieve their digital transformation goals
          </p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {successStorie.map((story, index) => (
              <StoryCard key={index} {...story} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join our growing list of satisfied clients and transform your business with our innovative solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-900 transition-colors"
          >
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}