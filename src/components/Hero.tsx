import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-gray-700">AI-Powered Student Insights Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            VishwAlpha
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mt-2">
              Redefining Student Growth With AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up animation-delay-200">
            Empowering every student with personalized insights, guidance, and a smarter learning journey.
          </p>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            VishwAlpha is an AI-powered student insight and career prediction platform designed for schools.
            We transform exam data, faculty feedback, and student performance into actionable intelligence that
            helps educators guide every student toward their full potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
