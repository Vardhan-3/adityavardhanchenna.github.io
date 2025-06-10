import React from 'react';
import { Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate Data Engineer with expertise in building scalable data pipelines and analytics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a dedicated Data Engineer with an M.tech in Data Science and hands-on experience at BOSCH. 
              My expertise lies in designing and implementing robust data architectures, ETL processes, and 
              analytics solutions that drive business insights.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a strong foundation in both theoretical knowledge and practical application, I excel at 
              transforming complex data challenges into scalable, efficient solutions. I'm currently seeking 
              new opportunities to leverage my skills in a dynamic data engineering role.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                ETL Development
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full font-medium">
                Big Data Processing
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">
                Cloud Architecture
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-700">
                To leverage data science, AI, and cloud technologies in building intelligent systems that empower businesses and communities to make smarter decisions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Expertise</h3>
              </div>
              <p className="text-gray-700">
                Specialized in modern data stack technologies and cloud-native solutions for enterprise-scale data processing.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <TrendingUp className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Goal</h3>
              </div>
              <p className="text-gray-700">
                Seeking opportunities to contribute to innovative data engineering projects in a collaborative environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;