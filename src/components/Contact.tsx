import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            I'm actively seeking new opportunities in data engineering. Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Email</p>
                  <p className="text-white font-medium">vardhanaditya259@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
              
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Location</p>
                  <p className="text-white font-medium">Banglore</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-sm mb-4">Connect with me on</p>
              <div className="flex space-x-4">
                <a href="https://in.linkedin.com/in/aditya-vardhan-chenna-3a53071b4" className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="https://github.com/Vardhan-3" className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                  <Github className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Job Opportunity / Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell me about the opportunity or project you'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-blue-100">
            Currently available for full-time opportunities • Open to remote or on-site positions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;