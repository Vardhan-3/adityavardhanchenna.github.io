import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Technology (M.Tech)',
      field: 'Data Science',
      institution: 'Gitam University',
      location: 'Visakhapatnam,India',
      duration: '2023 - 2025',
      description: 'Specialized in advanced data analytics, machine learning, and statistical modeling with focus on big data technologies.',
      achievements: [
        'Thesis on "Scalable Machine Learning for IoT Data Analytics"',
        'Published research paper on distributed computing frameworks',
        'Teaching Assistant for Database Management Systems course'
      ],
      coursework: [
        'Advanced Machine Learning',
        'Big Data Analytics',
        'Statistical Methods'
      ]
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Electronics & Communication Engineering',
      institution: 'SCSVMV University',
      location: 'Kanchipuram,India',
      duration: '2019 - 2023',
      description: 'Strong foundation in computer science fundamentals with emphasis on programming, algorithms, and software engineering.',
      achievements: [
        'Final year project on "Automated Data Processing System"',
        'Active member of Computer Science Society',
        'Participated in multiple hackathons and coding competitions'
      ],
      coursework: [
        'Electronic Devices',
        'Database Management Systems',
        'Cloud Computing'
      ]
    }
  ];

  const certifications = [
    'Google Advanced Data Analytics',
    'Frontend Development',
    'Generative AI'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in data science and computer engineering
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{edu.field}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award size={16} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span key={idx} className="text-sm text-gray-700 bg-white px-3 py-2 rounded-md border border-gray-200">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <Award className="text-teal-600 mx-auto mb-2" size={24} />
                <p className="text-sm font-medium text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;