import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import JobExplore from "../components/sections/JobExplore";
import Layout from "../components/layout/Layout";

// Testimonials Section
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Manager, TCS",
      image: "RK",
      content: "TalentFlow has revolutionized our hiring process. We've reduced our time-to-hire by 40% and found better quality candidates.",
      rating: 5
    },
    {
      name: "Priya Malhotra",
      role: "Talent Acquisition Lead, Infosys",
      image: "PM",
      content: "The assessment builder is incredible! We can now create customized tests for each role. Highly recommended for any HR team.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Founder, StartupXYZ",
      image: "AP",
      content: "As a startup, we needed an affordable and efficient hiring solution. TalentFlow exceeded our expectations in every way.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by HR Teams Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what hiring managers and recruiters are saying about TalentFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="linkedin-card p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--linkedin-blue)] to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection: React.FC = () => {
  const stats = [
    { value: "50K+", label: "Active Users", icon: "👥" },
    { value: "10K+", label: "Jobs Posted", icon: "💼" },
    { value: "95%", label: "Satisfaction Rate", icon: "⭐" },
    { value: "2M+", label: "Applications", icon: "📊" }
  ];

  return (
    <section className="py-16 bg-[var(--linkedin-blue)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--linkedin-blue)] to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Hiring Process?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of companies using TalentFlow to build exceptional teams. Start your free trial today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[var(--linkedin-blue)] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[var(--linkedin-blue)] transition-all">
            Schedule Demo
          </button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

// Companies Section
const CompaniesSection: React.FC = () => {
  const companies = [
    "TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra", 
    "Cognizant", "Accenture", "Flipkart", "Swiggy", "Paytm"
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-medium mb-8">
          Trusted by leading companies across India
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div key={index} className="text-gray-400 font-bold text-lg hover:text-[var(--linkedin-blue)] transition-colors cursor-pointer">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Landing: React.FC = () => {
  return (
    <>
      <Layout>
        <Hero />
        <CompaniesSection />
        <Features />
        <StatsSection />
        <About />
        <JobExplore />
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
};

export default Landing;
