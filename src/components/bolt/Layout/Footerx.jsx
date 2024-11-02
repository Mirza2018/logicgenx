import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

export default function Footerx() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">LogicGenX</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses with intelligent tech solutions for a smarter future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-white">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-400 hover:text-white">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions#ai" className="text-gray-400 hover:text-white">
                  AI-Driven Innovations
                </Link>
              </li>
              <li>
                <Link to="/solutions#cloud" className="text-gray-400 hover:text-white">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/solutions#data" className="text-gray-400 hover:text-white">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/solutions#automation" className="text-gray-400 hover:text-white">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@logicgenx.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Tech Plaza, Innovation City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LogicGenX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}