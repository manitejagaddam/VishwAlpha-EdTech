import { Brain, ScanLine, MessageSquare, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About VishwAlpha
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to predict and guide student development using cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                VishwAlpha transforms how schools understand and nurture student potential. By combining advanced AI
                with proven educational insights, we provide a comprehensive platform that tracks, analyzes, and
                predicts student growth trajectories.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform seamlessly integrates multiple data sources to create a complete picture of each student's
                academic journey, enabling educators to make data-driven decisions that truly matter.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <Brain className="w-10 h-10 text-cyan-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
                <p className="text-sm text-gray-600">Advanced algorithms predict student outcomes</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <ScanLine className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">OCR Analytics</h3>
                <p className="text-sm text-gray-600">Automated exam paper digitization</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <MessageSquare className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Faculty Insights</h3>
                <p className="text-sm text-gray-600">Comprehensive feedback analysis</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <Target className="w-10 h-10 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Learning</h3>
                <p className="text-sm text-gray-600">Tailored recommendations for growth</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-white/30 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">OCR-Based Exam Analytics</h4>
                  <p className="text-white/90">Automatically digitize and analyze handwritten exam papers to identify patterns and learning gaps</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-white/30 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Skill Identification</h4>
                  <p className="text-white/90">Discover each student's unique strengths and areas for improvement across subjects</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-white/30 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Faculty Feedback Insights</h4>
                  <p className="text-white/90">Aggregate and analyze teacher observations to create comprehensive student profiles</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-white/30 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Personalized Recommendations</h4>
                  <p className="text-white/90">AI-driven learning paths tailored to each student's needs and career aspirations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
