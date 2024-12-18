import React from 'react';
import SolutionCard from './SolutionCard';




export default function SolutionSection({ id, title, description, solutions }) {
  return (
    <section id={id} className="py-20 bg-black bg-opacity-60" >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className={`grid gap-8 items-start ${
        solutions.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 lg:grid-cols-2'
      }`}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}