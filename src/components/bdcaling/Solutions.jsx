import React from 'react';

const Solutions = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Main Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide">AI Solutions</h2>
        <div className="border-b-2 border-sky-500 w-24 mt-4 mx-auto"></div>
      </div>

      {/* Section Content */}
      <div className="container mx-auto">
        <div className="flex flex-col space-y-16">
          {/* AI Solution Section */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Card 1 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Improved Customer Experience
                </h3>
                <div className="border-b-2 border-sky-500 w-16 mt-2 mx-auto lg:mx-0"></div>
                <ul className="list-disc text-gray-400 space-y-4 px-4 mt-4">
                  <li>AI-powered chatbots provide 24/7 customer support with instant response times, improving customer satisfaction and engagement.</li>
                  <li>Personalized recommendations are provided using machine learning algorithms, enhancing the user experience and increasing sales.</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Enhanced Data Insights
                </h3>
                <div className="border-b-2 border-sky-500 w-16 mt-2 mx-auto lg:mx-0"></div>
                <ul className="list-disc text-gray-400 space-y-4 px-4 mt-4">
                  <li>AI analyzes vast amounts of data to uncover meaningful patterns, supporting data-driven decision-making for business growth.</li>
                  <li>Predictive analytics enables forecasting future trends, identifying risks, and finding opportunities to optimize operations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Migration Section */}
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold tracking-wide">Data Migration</h2>
            <div className="border-b-2 border-sky-500 w-24 mt-4 mx-auto"></div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Card 3 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Scalable Data Solutions
                </h3>
                <div className="border-b-2 border-sky-500 w-16 mt-2 mx-auto lg:mx-0"></div>
                <ul className="list-disc text-gray-400 space-y-4 px-4 mt-4">
                  <li>Seamlessly migrate data from on-premises storage to cloud platforms, ensuring scalability and reliability for growing businesses.</li>
                  <li>AI-backed data validation ensures data integrity and consistency, reducing errors and maintaining data quality throughout migration.</li>
                </ul>
              </div>
              {/* Card 4 */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  Enhanced Security and Compliance
                </h3>
                <div className="border-b-2 border-sky-500 w-16 mt-2 mx-auto lg:mx-0"></div>
                <ul className="list-disc text-gray-400 space-y-4 px-4 mt-4">
                  <li>AI monitors data migration activities to identify anomalies, protecting sensitive information during transitions.</li>
                  <li>Adhere to compliance standards with built-in security controls, ensuring regulatory requirements are met throughout the migration process.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
