"use client"
import { AirVent, Bot, BotIcon, Brain, Code, Cog, Database, FileText, Server, Shield,DollarSign,Box,Cloud  ,Repeat,Folder , Home , Zap,RefreshCw , Monitor,BiChart , AiOutline ,BiLineChart , DatabaseIcon , IntegrationIcon,PredictiveAnalyticsIcon,UserAnalyticsIcon,GovernanceIcon, SquareCheckBig, ChartNoAxesCombined, Biohazard, BrainCircuit, Blocks, TrendingUpDown, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'
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
    title: 'Document Intelligence, Text Extraction, OCR',
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
    title: 'Azure Search',
    description: 'Implement powerful AI solutions using Azure services.',
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Scalable Solutions',
        description: 'Improve information access and decision-making accuracy.'
      },
      {
        title: 'Advanced Analytics',
        description: 'Access cutting-edge AI and ML capabilities.'
      }
    ]
  },
  {
    title: 'AI Builder in Power Automate',
    description: 'Reducing manual effort and improving process efficiency within organizations.',
    icon: <BotIcon className="h-8 w-8 text-indigo-600" />,
    benefits: [
      {
        title: 'Increased Efficiency',
        description: 'AI Builder automates routine tasks, allowing staff to focus on more complex and strategic work.'
      },
      {
        title: 'Error Reduction',
        description: 'By minimizing human intervention in data entry and processing, AI Builder reduces the likelihood of errors.'
      }
    ]
  }
];
const data= [
      {
        title: "Business Intelligence Solutions",
        description: "Empower decision-making with structured data insights using tools like Power BI, Tableau, and Looker.",
        icon: <Biohazard  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Real-time Business Insights",
            description: "Deliver real-time business insights."
          },
          {
            title: "Growth Opportunities",
            description: "Identify growth opportunities."
          }
        ]
      },
      {
        title: "Advanced Analytics with AI",
        description: "Harness AI-driven analytics to uncover deep insights from complex datasets, predicting trends and optimizing operations.",
        icon: <BrainCircuit className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Predict Future Outcomes",
            description: "Predict future outcomes."
          },
          {
            title: "Strategic Planning",
            description: "Enhance strategic planning with AI-powered analytics."
          }
        ]
      },
      {
        title: "Power BI for Data Visualization",
        description: "Create dynamic, visually compelling dashboards and reports in Power BI for actionable insights.",
        icon: <Target  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Data Interpretation",
            description: "Easily interpret data."
          },
          {
            title: "Data-Driven Culture",
            description: "Facilitate a data-driven culture across your organization with customizable visuals."
          }
        ]
      },
      {
        title: "Data Warehousing Solutions",
        description: "Build and manage data warehouses on platforms like Azure Synapse, AWS Redshift, and Google BigQuery to centralize data storage.",
        icon: <Database className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Data Integration",
            description: "Enable seamless data integration."
          },
          {
            title: "High Data Quality",
            description: "Ensure high data quality."
          }
        ]
      },
      {
        title: "Data Integration and ETL Services",
        description: "Streamline data integration from multiple sources using ETL (Extract, Transform, Load) solutions.",
        icon: <Blocks  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Efficient Data Consolidation",
            description: "Consolidate data efficiently."
          },
          {
            title: "Data Preparation",
            description: "Prepare data for analysis, enabling faster, more reliable insights."
          }
        ]
      },
      {
        title: "Predictive Analytics",
        description: "Use predictive models to forecast trends, customer behaviors, and business outcomes.",
        icon: <TrendingUpDown  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Competitive Edge",
            description: "Gain a competitive edge by anticipating needs."
          },
          {
            title: "Risk Reduction",
            description: "Reduce risk."
          }
        ]
      },
      {
        title: "Self-Service Analytics",
        description: "Empower teams with self-service analytics tools, allowing non-technical users to access, visualize, and analyze data independently.",
        icon: <ChartNoAxesCombined  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Data-Driven Culture Enhancement",
            description: "Foster a data-driven culture."
          },
          {
            title: "Operational Efficiency",
            description: "Increase operational efficiency."
          }
        ]
      },
      {
        title: "Data Governance and Compliance",
        description: "Implement robust data governance frameworks to ensure data accuracy, security, and regulatory compliance.",
        icon: <SquareCheckBig  className='h-8 w-8 text-indigo-600' />,
        benefits: [
          {
            title: "Sensitive Data Protection",
            description: "Protect sensitive data."
          },
          {
            title: "Trustworthy Data",
            description: "Ensure consistent, trustworthy data across the organization."
          }
        ]
      }
    ]



const cloudSolutions = [
      {
        title: "Cloud Cost Optimization",
        description: "Maximize ROI and manage expenditures effectively.",
        icon: <DollarSign  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Cost Savings",
            description: "Reduce unnecessary expenses with efficient resource allocation."
          },
          {
            title: "Improved Budget Management",
            description: "Gain transparency and control over your cloud spending."
          }
        ]
      },
      {
        title: "Containerization with Docker and Kubernetes",
        description: "Ensure portable and reliable deployments.",
        icon: <Box  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Portability",
            description: "Easily move applications across different environments."
          },
          {
            title: "Efficient Scaling",
            description: "Scale applications quickly to meet demand with minimal effort."
          }
        ]
      },
      {
        title: "Serverless Computing Solutions",
        description: "Reduce overhead and enjoy cost savings.",
        icon: <Cloud  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Lower Infrastructure Costs",
            description: "Pay only for what you use, eliminating unnecessary spending."
          },
          {
            title: "Faster Time to Market",
            description: "Deploy applications quickly without worrying about server management."
          }
        ]
      },
      {
        title: "Database Migration Services",
        description: "Enhance performance and manage databases easily.",
        icon: <Server  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Minimal Downtime",
            description: "Ensure business continuity during migration."
          },
          {
            title: "Performance Optimization",
            description: "Improve database performance and reliability."
          }
        ]
      },
      {
        title: "CI/CD Pipeline Setup",
        description: "Automate deployments and maintain consistent quality.",
        icon: <Repeat  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Faster Releases",
            description: "Automate the software release process for quick and reliable updates."
          },
          {
            title: "Consistent Quality",
            description: "Ensure consistent code quality with automated testing and integration."
          }
        ]
      },
      {
        title: "Cloud Security Solutions",
        description: "Protect data and comply with industry standards.",
        icon: <Shield  className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Data Protection",
            description: "Secure sensitive data with encryption and strict access controls."
          },
          {
            title: "Regulatory Compliance",
            description: "Meet industry standards and compliance requirements effortlessly."
          }
        ]
      }
];
const excellence=[
  {
      title: "File Server Migration to SharePoint Online",
      description: "Centralize file management and improve accessibility by migrating to SharePoint Online.",
      icon: <Folder className="h-8 w-8 text-indigo-600" />,
      "benefits": [
        {
          title: "Centralized Management",
          description: "Simplify and centralize file management across the organization."
        },
        {
          title: "Improved Collaboration",
          description: "Enhance team collaboration with easier access to shared resources."
        }
      ]
    },
    {
      title: "Company Intranets (SharePoint Online & On-Premises)",
      description: "Custom-tailored intranet solutions for both SharePoint Online and on-premises environments.",
      icon: <Home className="h-8 w-8 text-indigo-600" />,
      "benefits": [
        {
          title: "Tailored Intranet",
          description: "Provide a customized intranet experience tailored to specific departmental needs."
        },
        {
          title: "Enhanced Communication",
          description: "Facilitate effective communication with hub sites and personalized departmental pages."
        }
      ]
    },
   {
      title: "Custom SPFx Development",
      description: "Enhance functionality and user experience with custom-built SharePoint web parts.",
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      "benefits": [
        {
          title: "Custom Solutions",
          description: "Develop tailored web parts to meet unique business requirements."
        },
        {
          title: "Improved User Experience",
          description: "Boost user productivity with specialized tools integrated directly into SharePoint."
        }
      ]
    }
  ]
  const power=[
    {
      title: "Power Platform Solutions",
      description: "Optimize processes and enhance productivity using PowerApps, Power Automate, Power BI, Power Pages, and Dataverse.",
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      benefits: [
        {
          title: "Process Automation",
          description: "Automate repetitive tasks to increase efficiency and reduce manual effort."
        },
        {
          title: "Custom Business Apps",
          description: "Create tailored applications to solve specific business challenges without extensive coding."
        }
      ]
    }
  ]
  const work=[
 {
        title: "K2 and Nintex Workflow Automation",
        description: "Automate workflows and reduce manual processes using K2 and Nintex to improve efficiency.",
        icon: <RefreshCw className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Task Simplification",
            description: "Reduce complexity by automating repetitive and time-consuming tasks."
          },
          {
            title: "Increased Productivity",
            description: "Free up team members to focus on strategic, high-impact activities."
          }
        ]
      }
  ]

  const rpa=[
{
        title: "RPA Desktop Flows",
        description: "Automate repetitive desktop tasks using Robotic Process Automation (RPA) to enhance productivity.",
        icon: <Monitor className="h-8 w-8 text-indigo-600" />,
        benefits: [
          {
            title: "Free Up Capacity",
            description: "Automate routine tasks, allowing your team to focus on high-value activities."
          },
          {
            title: "Error Reduction",
            description: "Minimize manual errors to improve overall process reliability and efficiency."
          }
        ]
      }
    
  ]

export default function Solutions1() {
  return (
    <div className="w-full bg-gray-500">
      {/* Hero Section */}

      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white h-1/2">
      {/* <Image src={bg} alt="ai" className='absolute top-0 left-0 w-full h-full object-cover aspect-square opacity-50 z-10 '/> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold "
          >
            Our Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-200 max-w-5xl mx-auto h-14 my-5 text-pretty"
          >
            Intelligent, Scalable, and Future-Ready Solutions for Your Business Needs
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-200 max-w-3xl mx-auto text-justify"
          >
            Explore our comprehensive range of AI, Cloud, and Data Analytics solutions tailored to empower your business with the latest technology.
          </motion.p>
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
        id="data"
        title="Data and Analytics"
        description="Unlock the potential of your data with intelligent analytics. Our solutions empower data-driven decision-making, advanced business intelligence, and clear visualizations that drive strategic growth."
        solutions={data}
      />

      <SolutionSection
        id="cloud"
        title="Cloud Infrastructure Solutions"
        description="Build secure, scalable, and efficient cloud environments tailored to your business needs."
        solutions={cloudSolutions}
      />


      <SolutionSection
        id="excellence"
        title="Intranet Excellence"
        description="Enhance collaboration with a customized intranet that provides secure, centralized access to resources."
        solutions={excellence}
      />

      <SolutionSection
        id="power"
        title="Power Platform Mastery"
        description="Empower your team with low-code tools for automation and insights."
        solutions={power}
      />


      <SolutionSection
        id="work"
        title="Workflow Automation"
        description="Streamline operations with automated workflows that enhance efficiency and accuracy."
        solutions={work}
      />
      <SolutionSection
        id="rpa"
        title="RPA Desktop Flows"
        description=" Automate repetitive desktop tasks for improved accuracy and efficiency."
        solutions={rpa}
      />



      </div>

  

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1C45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
          Get in touch with our team to discuss how LogicGenX&#39;s solutions can empower your organization.
          </p>
      

          <Link href="/connect-with-us" >
          <div className="grid gap-8 items-start justify-center mt-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className=" text-indigo-400 group-hover:text-gray-100 transition duration-200">Book a Consultation&rarr;</span>
              </button>
            </div>
          </div>
        </Link>


        </div>
      </section>
    </div>
  );
}