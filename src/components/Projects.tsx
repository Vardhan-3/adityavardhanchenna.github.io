import React from 'react';
import { ExternalLink, Github, Database, Zap, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-time IoT Data Pipeline',
      description: 'Built a scalable real-time data pipeline for processing IoT sensor data from manufacturing equipment, enabling predictive maintenance and operational insights.',
      technologies: ['Azure Event Hubs', 'Power BI'],
      highlights: [
        'Processing 100K+ events per second',
        'Reduced equipment downtime by 25%',
        'Real-time anomaly detection'
      ],
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Enterprise Data Lake Solution',
      description: 'Designed and implemented a cloud-native data lake architecture handling multi-terabyte datasets from various enterprise systems.',
      technologies: ['Azure Data Lake', 'Apache Spark', 'Azure Data Factory', 'Delta Lake', 'Databricks'],
      highlights: [
        'Unified 15+ data sources',
        '70% improvement in query performance',
        'Automated data quality monitoring'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Supply Chain Control Tower',
      description: 'Created an end-to-end Supply Chain Monitoring Dashboard in Power BI',
      technologies: ['MS SQL', 'Azure Data Factory', 'Power BI'],
      highlights: [
        'Improved Data-driven decision making by 40%',
        'Real Time Monitoring',
        'Analytics'
      ],
      icon: Cloud,
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing impactful Data Engineering and Data Science across solutions various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                    <Github size={16} className="mr-2" />
                    Code
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    <ExternalLink size={16} className="mr-2" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;