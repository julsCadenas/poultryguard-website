"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Target, Zap, Award, ChevronDown, PlayCircle, Star, Globe, Heart, Code, Lightbulb } from 'lucide-react';
import Navbar from '@/components/navbar';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Research Excellence",
      description: "Committed to thorough research and evidence-based solutions in computer engineering."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Exploring emerging technologies and novel approaches to solve real-world problems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "Working together as a team to leverage our diverse skills and perspectives."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Academic Impact",
      description: "Contributing meaningful research that advances the field of computer engineering."
    }
  ];

  const stats = [
    { number: "4", label: "Team Members" },
    { number: "8+", label: "Months Research" },
    { number: "100+", label: "Hours Invested" },
    { number: "1", label: "Thesis Project" }
  ];

  const team = [
    {
      name: "Julian Cadenas",
      role: "Software and Machine Learning Engineer",
      image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/306270613_7852144771522896_216817253659547583_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&_nc_cb=64d46a15-dccda127&ccb=1-7&_nc_sid=e99d92&_nc_ohc=c7O2AhauJ4wQ7kNvwHNai6q&_nc_oc=Adk0-1Gopwh_e8xC_bspddJS-VXt7LKSMaqOc-gr46ftlOLjXtTRWH90omVY-Ul8Yh0&_nc_zt=24&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=4A2aDxmIjkQr_WKbpWsvmw&oh=00_AfKpVcHbQQj6qCbPSA98ehbcMq4d8d0A3NopV0XSB5CjvQ&oe=68424618",
      bio: "Led the development of software solutions, implementing machine learning models for data analysis and intelligent decision-making, thereby enhancing system performance and enabling predictive features within the application."    },
    {
      name: "Daryl Guerzon",
      role: "Embedded and IOT Systems Engineer",
      image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/476225133_1187469913035893_1800981563186018844_n.jpg?_nc_cat=102&_nc_cb=64d46a15-dccda127&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=16VoagN-HNIQ7kNvwF348mq&_nc_oc=AdkrVmMxe3c_VuR9s6SSCXQn-A6e258AxtBzCQu9Eq0wLZcQZPn4h4zhZIJ30pByWDQ&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=-O49Tl9TQVA7QMfzWGLBIA&oh=00_AfJGzAUqQRwR-6FDg8SQSJkbEiRkkEuNAZyjkBF3iKJlpg&oe=68422A51",
      bio: "Designed and developed core embedded systems, configuring seamless hardware-software integration, and utilized IoT cloud platforms to enable real-time data transmission, monitoring, and control of connected devices."
    },
    {
      name: "Christian Javier",
      role: "Data Engineer and Project Manager",
      image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/487354419_24008908775362472_1535216585236230529_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&_nc_cb=64d46a15-dccda127&ccb=1-7&_nc_sid=e99d92&_nc_ohc=ZxO58HDph9EQ7kNvwFWIAZO&_nc_oc=AdkB_xo-uoOWkRXdx2YhSMSwg4mLKpQ8086nFaOi95HzI5zhniqRtrVD6qe8dnRGtjk&_nc_zt=24&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=SdwGMe4IbGU6ZZoUm-RVOw&oh=00_AfJCpSM-ivNn-ugPHRKv87tTFXXGQXlSGwL2aQAocfmMRA&oe=68423A88",
      bio: "Managed the overall project timeline and coordinated team efforts while focusing on developing, training, and monitoring machine learning models to ensure accurate and efficient system performance."
    },
    {
      name: "Joshua Cormier",
      role: "Embedded and Software Engineer",
      image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-1/134373439_4055805894443991_9107601220376700005_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&_nc_cb=64d46a15-dccda127&ccb=1-7&_nc_sid=e99d92&_nc_ohc=fjuB2VhOWTsQ7kNvwGYlBhZ&_nc_oc=AdkOQbe4EoiHPhFULE6Pnh3MzqciLDfgeY4jgmnkw5UlSJo-incr7zkDNW9_YSM_ykk&_nc_zt=24&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=ji6evd2YzcshMzcahqjqtg&oh=00_AfI-5IdNV2F7FvQ5Rlzq9M7A6O0w5vXKxEa5QhVlT9IikQ&oe=6863E340",
      bio: "Focused on building reliable embedded systems & comprehensive technical documentation. Ensured software and hardware designs were well-researched, accurately tested, and communicated across the development cycle."
    }
  ];

  return (
    <div className="min-h-screen bg-customBlack text-customWhite overflow-hidden">
      {/* Hero Section */}
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-customOrange/10 via-transparent to-customOrange/5"></div>
        <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-customOrange/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-customOrange/30">
            <Star className="w-5 h-5 text-customOrange" />
            <span className="text-sm font-medium font-inter tracking-wide">About Our Journey</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6 bg-gradient-to-r from-customWhite via-customOrange to-customWhite bg-clip-text text-transparent leading-tight">
            Engineering Tomorrow
          </h1>
          
          <p className="text-xl md:text-2xl font-poppins text-customWhite/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are 4th year Computer Engineering students from FEU Institute of Technology, passionate about developing innovative solutions through cutting-edge research and practical application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-customOrange hover:bg-customOrange/90 text-customBlack font-semibold font-inter px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-customOrange/25">
              <span className="relative z-10 flex items-center gap-2">
                Our Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-customOrange to-customOrange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative overflow-hidden border-2 border-customWhite/30 hover:border-customOrange text-customWhite hover:text-customOrange font-semibold font-inter px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Project Demo
              </span>
              <div className="absolute inset-0 bg-customOrange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-customOrange" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-customOrange/20 backdrop-blur-sm rounded-full px-4 py-2 border border-customOrange/30">
                <Target className="w-4 h-4 text-customOrange" />
                <span className="text-sm font-medium font-inter">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold font-montserrat bg-gradient-to-r from-customWhite to-customOrange bg-clip-text text-transparent">
                Academic Excellence
              </h2>
              
              <p className="text-lg font-poppins text-customWhite/80 leading-relaxed">
                As 4th year Computer Engineering students at FEU Institute of Technology, we are dedicated to bridging the gap between theoretical knowledge and practical innovation. Our thesis project represents the culmination of years of learning and preparation.
              </p>
              
              <p className="text-lg font-poppins text-customWhite/80 leading-relaxed">
                Through rigorous research, collaborative teamwork, and guidance from our advisors, we aim to contribute meaningful solutions that demonstrate our technical expertise and readiness for the professional world.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-customOrange/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-customWhite/5 to-customOrange/10 backdrop-blur-sm rounded-3xl p-8 border border-customWhite/10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold font-montserrat text-customOrange mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-inter text-customWhite/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-customWhite/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-customOrange/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-customOrange/30">
              <Zap className="w-4 h-4 text-customOrange" />
              <span className="text-sm font-medium font-inter">Our Values</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-customWhite to-customOrange bg-clip-text text-transparent">
              Our Approach
            </h2>
            
            <p className="text-xl font-poppins text-customWhite/80 max-w-3xl mx-auto">
              The principles that guide our research and development process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-customWhite/5 to-customOrange/10 backdrop-blur-sm rounded-2xl p-8 border border-customWhite/10 hover:border-customOrange/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-customOrange/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-customOrange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-customOrange mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-montserrat mb-4 text-customWhite group-hover:text-customOrange transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-customWhite/70 font-poppins leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-customOrange/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-customOrange/30">
              <Users className="w-4 h-4 text-customOrange" />
              <span className="text-sm font-medium font-inter">Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-customWhite to-customOrange bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            
            <p className="text-xl font-poppins text-customWhite/80 max-w-3xl mx-auto">
              The dedicated students behind this thesis project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-customOrange/30 to-customOrange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-customWhite/20 group-hover:border-customOrange/50 transition-all duration-500"
                  />
                </div>
                
                <h3 className="text-lg font-bold font-montserrat mb-2 text-customWhite group-hover:text-customOrange transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-customOrange font-semibold font-inter mb-3 text-sm">
                  {member.role}
                </p>
                
                <p className="text-customWhite/70 font-poppins text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-customOrange/10 via-transparent to-customOrange/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-customOrange/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-customOrange/30">
            <Award className="w-4 h-4 text-customOrange" />
            <span className="text-sm font-medium font-inter">Join Our Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 bg-gradient-to-r from-customWhite to-customOrange bg-clip-text text-transparent">
            Explore Our Research
          </h2>
          
          <p className="text-xl font-poppins text-customWhite/80 mb-12 max-w-2xl mx-auto">
            Discover the methodology, findings, and implications of our thesis project. Join us in advancing computer engineering knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-customOrange hover:bg-customOrange/90 text-customBlack font-semibold font-inter px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-customOrange/25">
              <span className="relative z-10 flex items-center gap-2">
                View Thesis Paper
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group relative overflow-hidden border-2 border-customWhite/30 hover:border-customOrange text-customWhite hover:text-customOrange font-semibold font-inter px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Source Code
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;