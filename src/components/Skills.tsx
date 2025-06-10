import React from 'react';
import { Database, Cloud, Code, BarChart3, Cpu, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data Technologies',
      skills: ['Apache Spark', 'Hadoop', 'MongoDB', 'PostgreSQL', 'SQL Server', 'Redis']
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['Azure', 'Azure Data Factory', 'Databricks']
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'SQL', 'PySpark', 'Pandas', 'NumPy']
    },
    {
      icon: BarChart3,
      title: 'Analytics & ML',
      skills: ['Power BI', 'Jupyter']
    },
  
    {
      icon: GitBranch,
      title: 'Tools & Methods',
      skills: ['Agile', 'Scrum', 'CI/CD', 'Data Modeling', 'ETL/ELT', 'Real-time Processing', 'Data Governance']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="text-sm text-gray-700 bg-white px-3 py-2 rounded-md border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Committed to staying current with emerging technologies in data engineering, cloud computing, and machine learning. 
            Currently exploring real-time analytics and modern data lakehouse architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;