import { Zap, CheckCircle, Users, MessageSquareText, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Easy to Integrate',
    description: 'Seamless onboarding with minimal IT infrastructure changes. Our platform works with your existing systems and workflows.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    icon: CheckCircle,
    title: 'Accurate & Explainable AI',
    description: 'Transparent algorithms with clear reasoning behind every prediction. No black boxes - just actionable insights you can trust.',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Reduces Teacher Workload',
    description: 'Automate repetitive tasks like report generation and performance tracking, freeing up time for what matters: teaching.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    icon: MessageSquareText,
    title: 'Enhances Parent Communication',
    description: 'Keep parents informed and engaged with real-time updates, personalized insights, and 24/7 AI-powered support.',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    title: 'Track Long-term Progress',
    description: 'Monitor student development over years, identify trends early, and make data-driven interventions at the right time.',
    color: 'text-pink-600',
    bg: 'bg-pink-50'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Schools Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading educational institutions that trust VishwAlpha to transform their approach to student development
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 items-start group"
                >
                  <div className={`${reason.bg} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${reason.color}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <div className={`w-1 h-full ${reason.bg} rounded-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your School?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the growing community of forward-thinking schools leveraging AI to unlock every student's potential
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
