import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Principal, Delhi Public School',
    image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'VishwAlpha has revolutionized how we understand and support our students. The AI-driven insights have helped us identify struggling students early and provide targeted interventions. Our pass rates have improved by 23% since implementation.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Mathematics Teacher, Modern High School',
    image: 'https://images.pexels.com/photos/6389127/pexels-photo-6389127.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'As a teacher, VishwAlpha saves me hours every week. The automated exam analysis and performance tracking let me focus on teaching rather than paperwork. The personalized recommendations for each student are incredibly accurate.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Anjali Mehta',
    role: 'Parent of Grade 9 Student',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'The WhatsApp chatbot keeps me updated on my daughter\'s progress in real-time. I love receiving weekly insights and career guidance suggestions. For the first time, I feel truly connected to her academic journey.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from educators, parents, and administrators who have experienced the VishwAlpha difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
              >
                <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center opacity-10`}>
                  <Quote className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-5 h-5 bg-gradient-to-br ${testimonial.gradient} rounded-full`}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
