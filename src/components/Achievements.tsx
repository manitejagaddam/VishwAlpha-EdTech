import { Users, School, Cpu, MessageCircle, TrendingUp, FileText } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: '200+',
    title: 'Students Impacted',
    description: 'Lives transformed through AI-powered insights',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: School,
    number: '10+',
    title: 'Trusted by Schools',
    description: 'Educational institutions partnering with us',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Cpu,
    number: '5+',
    title: 'AI Modules',
    description: 'Advanced algorithms working together',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: MessageCircle,
    number: '24/7',
    title: 'WhatsApp Insights',
    description: 'Real-time parent communication',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    number: '3 Years',
    title: 'Career Guidance',
    description: 'For grades 8-10 students',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: FileText,
    number: 'Weekly',
    title: 'Automated Reports',
    description: 'Detailed performance analytics',
    color: 'from-rose-500 to-orange-500'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a real impact in the education technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                  </div>

                  <p className="text-gray-600">
                    {achievement.description}
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
