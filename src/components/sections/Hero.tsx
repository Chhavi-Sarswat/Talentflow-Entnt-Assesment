import React from "react";
import { COMPANY_INFO, PLATFORM_STATS } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="flex flex-col gap-5 items-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-20 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwYTY2YzIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMTEgOS0yMCAyMC0yMHMyMCA5IDIwIDIwLTkgMjAtMjAgMjBjLTExIDAtMjAtOS0yMC0yMHptLTM2IDM2YzAtMTEgOS0yMCAyMC0yMHMyMCA5IDIwIDIwLTkgMjAtMjAgMjBjLTExIDAtMjAtOS0yMC0yMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="flex items-center gap-5 relative z-10">
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-600/40 rounded-full"></span>
        <div className="bg-white/90 backdrop-blur-sm border border-blue-200 md:text-base sm:text-sm text-xs md:px-6 sm:px-4 px-3 py-2 rounded-full shadow-sm font-semibold text-[var(--linkedin-blue)]">
          🚀 Welcome to TalentFlow
        </div>
        <span className="md:w-40 sm:w-25 w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-600/40 rounded-full"></span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}

          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              <span className="text-gray-900">Transform Your</span>{" "}
              <span className="text-gray-900">Hiring Process With</span>{" "}
              <span className="bg-gradient-to-r from-[var(--linkedin-blue)] to-blue-600 bg-clip-text text-transparent">Smarter</span>,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Faster</span>,{" "}
              <span className="text-gray-900">Recruitment</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl font-normal">
              {COMPANY_INFO.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => navigate("/hr-login")}
                className="linkedin-btn-primary btn-shine flex items-center justify-center gap-2 text-base px-8 py-3"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="linkedin-btn-secondary pulse-hover flex items-center justify-center gap-2 text-base px-8 py-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {PLATFORM_STATS.map((stat, index) => (
                <div
                  key={index}
                  className="linkedin-card md:p-8 p-4 text-center group"
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-[var(--linkedin-blue)] to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm font-semibold mb-3">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {index === 0
                      ? "Trusted by recruiters worldwide"
                      : "Companies building better teams"}
                  </div>
                  <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-[var(--linkedin-blue)] to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
