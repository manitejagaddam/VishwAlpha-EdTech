import { Target, ScanSearch, Compass, Bot, LayoutDashboard, FileBarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Skill Identification Engine',
    description: 'Advanced AI algorithms analyze student performance across subjects to identify strengths, weaknesses, and latent talents.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: ScanSearch,
    title: 'Exam Paper Analysis AI',
    description: 'OCR-powered system digitizes handwritten answers and provides deep insights into student understanding and common error patterns.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Compass,
    title: 'Career Suggestion Engine',
    description: 'Predict optimal career paths for students in grades 8-10 based on interests, aptitudes, and performance trends.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Bot,
    title: 'WhatsApp AI Chatbot',
    description: 'Real-time parent engagement through intelligent chatbot delivering personalized insights, updates, and recommendations.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: LayoutDashboard,
    title: 'Performance Dashboard',
    description: 'Comprehensive teacher portal with class-level analytics, individual student tracking, and actionable intervention suggestions.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: FileBarChart,
    title: 'Detailed Reports & Predictions',
    description: 'Automated weekly and monthly reports with predictive analytics highlighting future performance trends and risk indicators.',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Privacy & Data Protection',
    description: 'Enterprise-grade security with encrypted data storage, GDPR compliance, and role-based access controls for all stakeholders.',
    gradient: 'from-orange-500 to-amber-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What VishwAlpha Offers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of AI-powered tools designed to revolutionize student development and school administration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
