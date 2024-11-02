import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';



export default function StoryCard({
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  testimonial,
  index,
}) {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-indigo-600">{company}</p>
            <span className="text-sm text-gray-500">{industry}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
            <p className="text-gray-600">{challenge}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
            <p className="text-gray-600">{solution}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <div className="relative">
            <Quote className="absolute top-0 left-0 h-8 w-8 text-indigo-100 transform -translate-x-4 -translate-y-4" />
            <blockquote className="text-gray-600 italic relative z-10">
            &#34;{testimonial.quote}&#34;
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}