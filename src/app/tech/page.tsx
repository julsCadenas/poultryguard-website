import React from 'react'
import { Code, Database, Cpu, Smartphone, Cloud, Zap, Monitor, Wifi } from 'lucide-react'
import Navbar from '@/components/navbar'

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      technologies: [
        { name: "Next.js", description: "React framework for production", color: "bg-gray-800" },
        { name: "React", description: "UI component library", color: "bg-blue-600" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", color: "bg-cyan-500" },
        { name: "TypeScript", description: "Type-safe JavaScript", color: "bg-blue-700" }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu className="w-8 h-8" />,
      technologies: [
        { name: "Arduino", description: "Microcontroller platform", color: "bg-teal-600" },
        { name: "ESP32", description: "Wi-Fi & Bluetooth microchip", color: "bg-red-600" },
        { name: "DHT22", description: "Temperature & humidity sensor", color: "bg-green-600" },
        { name: "MQ-135", description: "Air quality sensor", color: "bg-purple-600" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-8 h-8" />,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime environment", color: "bg-green-700" },
        { name: "MongoDB", description: "NoSQL database", color: "bg-green-800" },
        { name: "Express.js", description: "Web application framework", color: "bg-gray-700" },
        { name: "Mongoose", description: "MongoDB object modeling", color: "bg-red-700" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Zap className="w-8 h-8" />,
      technologies: [
        { name: "Python", description: "Programming language for ML", color: "bg-yellow-600" },
        { name: "TensorFlow", description: "Machine learning framework", color: "bg-orange-600" },
        { name: "Scikit-learn", description: "Machine learning library", color: "bg-orange-700" },
        { name: "Pandas", description: "Data analysis library", color: "bg-blue-800" }
      ]
    },
    {
      title: "Communication",
      icon: <Wifi className="w-8 h-8" />,
      technologies: [
        { name: "MQTT", description: "IoT messaging protocol", color: "bg-indigo-600" },
        { name: "WebSocket", description: "Real-time communication", color: "bg-pink-600" },
        { name: "REST API", description: "API architectural style", color: "bg-violet-600" },
        { name: "HTTP/HTTPS", description: "Web communication protocol", color: "bg-slate-600" }
      ]
    },
    {
      title: "Deployment & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      technologies: [
        { name: "Vercel", description: "Frontend deployment platform", color: "bg-black" },
        { name: "Arduino IOT Cloud", description: "Cloud IoT services", color: "bg-orange-500" },
        { name: "Docker", description: "Containerization platform", color: "bg-blue-500" },
        { name: "GitHub", description: "Version control & collaboration", color: "bg-gray-900" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#191919] text-[#d1cfc0] font-Inter">
      <Navbar />
      <header className="pt-20 md:pt-32 pb-16 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-8xl text-[#f76f53] italic">
            Tech Stack
          </h1>
          <p className="font-semibold text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto px-4">
            The powerful technologies behind PoultryGuard's heat stress monitoring system
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <section 
              key={categoryIndex}
              className="bg-[#191919] border border-[#d1cfc0]/20 rounded-2xl p-6 hover:border-[#f76f53]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-[#f76f53]">
                  {category.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold font-['Montserrat']">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group bg-[#d1cfc0]/5 rounded-xl p-4 hover:bg-[#d1cfc0]/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full ${tech.color} mt-2 group-hover:scale-125 transition-transform`}></div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#d1cfc0] font-['Poppins'] text-sm md:text-base">
                          {tech.name}
                        </h3>
                        <p className="text-[#d1cfc0]/70 text-xs md:text-sm mt-1">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-16 bg-gradient-to-r from-[#f76f53]/10 to-[#d1cfc0]/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-['Montserrat'] text-[#f76f53] mb-4">
              System Architecture
            </h2>
            <p className="text-[#d1cfc0]/80 max-w-3xl mx-auto">
              PoultryGuard integrates IoT sensors, machine learning algorithms, and modern web technologies 
              to provide real-time heat stress monitoring and predictive analytics for poultry farms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#d1cfc0]/5 rounded-xl">
              <Smartphone className="w-12 h-12 text-[#f76f53] mx-auto mb-4" />
              <h3 className="font-semibold text-lg font-['Poppins'] mb-2">Data Collection</h3>
              <p className="text-[#d1cfc0]/70 text-sm">
                IoT sensors continuously monitor temperature, humidity, and air quality in poultry houses
              </p>
            </div>
            <div className="text-center p-6 bg-[#d1cfc0]/5 rounded-xl">
              <Code className="w-12 h-12 text-[#f76f53] mx-auto mb-4" />
              <h3 className="font-semibold text-lg font-['Poppins'] mb-2">AI Processing</h3>
              <p className="text-[#d1cfc0]/70 text-sm">
                Machine learning models analyze patterns and predict heat stress events before they occur
              </p>
            </div>
            <div className="text-center p-6 bg-[#d1cfc0]/5 rounded-xl">
              <Monitor className="w-12 h-12 text-[#f76f53] mx-auto mb-4" />
              <h3 className="font-semibold text-lg font-['Poppins'] mb-2">User Interface</h3>
              <p className="text-[#d1cfc0]/70 text-sm">
                Real-time dashboard provides insights, alerts, and recommendations to farmers
              </p>
            </div>
          </div>
        </section>
        <section className="mt-16 text-center">
          <div className="flex gap-4 justify-center items-center font-['Poppins']">
            <a 
              href="https://github.com/julsCadenas/PoultryGuard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#d1cfc0] text-[#191919] px-6 py-3 rounded-2xl font-semibold hover:bg-[#f76f53] transition-all duration-300 hover:scale-105"
            >
              <Code className="w-5 h-5" />
              <span>Explore Source Code</span>
            </a>
            <button className="flex items-center gap-2 border border-[#f76f53] text-[#f76f53] px-6 py-3 rounded-2xl font-semibold hover:bg-[#f76f53] hover:text-[#191919] transition-all duration-300 hover:scale-105">
              <Database className="w-5 h-5" />
              <span>View Documentation</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TechStack;

// created by daryl
