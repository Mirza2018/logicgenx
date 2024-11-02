import { Bot, Brain, Code, Cog, Database, FileText, Server, Shield } from 'lucide-react';
import Link from 'next/link';
import SolutionSection from './Solutions/SolutionSection';


const aiSolutions = [
  {
    title: 'Big Data Solutions',
    description: 'Leverage advanced tools for large-scale data processing and analytics.',
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Pattern Recognition',
        description: 'Uncover hidden patterns and trends in your data.'
      },
      {
        title: 'Operational Optimization',
        description: 'Improve efficiency through data-driven insights.'
      }
    ]
  },
  {
    title: 'Office 365 Co-pilot',
    description: 'Enhance productivity with AI-powered Office 365 integration.',
    icon: <Bot className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Task Automation',
        description: 'Automate routine tasks and boost productivity.'
      },
      {
        title: 'Smart Insights',
        description: 'Get AI-powered suggestions and analytics.'
      }
    ]
  },
  {
    title: 'Document Intelligence',
    description: 'Transform unstructured data into actionable information.',
    icon: <FileText className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Fast Data Extraction',
        description: 'Quickly extract and process information from documents.'
      },
      {
        title: 'Enhanced Analytics',
        description: 'Generate insights from previously inaccessible data.'
      }
    ]
  },
  {
    title: 'Azure AI Integration',
    description: 'Implement powerful AI solutions using Azure services.',
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Scalable Solutions',
        description: 'Grow your AI capabilities as your needs evolve.'
      },
      {
        title: 'Advanced Analytics',
        description: 'Access cutting-edge AI and ML capabilities.'
      }
    ]
  }
];

const cloudSolutions = [
  {
    title: 'Cloud Cost Optimization',
    description: 'Optimize your cloud spending and improve resource allocation.',
    icon: <Cog className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Cost Reduction',
        description: 'Identify and eliminate unnecessary cloud expenses.'
      },
      {
        title: 'Resource Efficiency',
        description: 'Optimize resource utilization and scaling.'
      }
    ]
  },
  {
    title: 'Containerization',
    description: 'Modernize applications with Docker and Kubernetes.',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Consistent Deployment',
        description: 'Ensure reliable application deployment across environments.'
      },
      {
        title: 'Scalability',
        description: 'Easily scale applications based on demand.'
      }
    ]
  },
  {
    title: 'Cloud Security',
    description: 'Implement robust security measures for your cloud infrastructure.',
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Data Protection',
        description: 'Secure sensitive data with advanced encryption.'
      },
      {
        title: 'Compliance',
        description: 'Meet industry security standards and regulations.'
      }
    ]
  },
  {
    title: 'Database Migration',
    description: 'Seamlessly migrate databases to cloud platforms.',
    icon: <Server className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Minimal Downtime',
        description: 'Ensure business continuity during migration.'
      },
      {
        title: 'Performance Optimization',
        description: 'Improve database performance and reliability.'
      }
    ]
  }
];

export default function Solutions1() {
  return (
    <div className="w-full bg-gray-500">
      {/* Hero Section */}

      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white h-1/2">
      {/* <Image src={bg} alt="ai" className='absolute top-0 left-0 w-full h-full object-cover aspect-square opacity-50 z-10 '/> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Solutions
          </h1>
          <p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Explore our comprehensive range of AI, Cloud, and Data Analytics solutions tailored to empower your business with the latest technology.
          </p>
        </div>
      </section>
      <div className="relative bg-bottom bg-fixed bg-contain"  style={{ backgroundImage: "url('/AiSolutionImg.png')" }}>
            <SolutionSection
        id="ai"
        title="AI-Driven Innovations"
        description="Harness the power of artificial intelligence to transform your business operations and drive innovation."
        solutions={aiSolutions}
      />

      <SolutionSection
        id="cloud"
        title="Cloud Infrastructure Solutions"
        description="Build secure, scalable, and efficient cloud environments tailored to your business needs."
        solutions={cloudSolutions}
      />
      </div>

  

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Let&#39;s discuss how our solutions can help you achieve your business goals and drive innovation.
          </p>
      

          <Link href="/connect-with-us" >
          <div className="grid gap-8 items-start justify-center mt-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200">Schedule a Consultation&rarr;</span>
              </button>
            </div>
          </div>
        </Link>


        </div>
      </section>
    </div>
  );
}