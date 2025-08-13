const TestimonialsSection = () => {
  const testimonials = [
    {
      category: 'Dev & IT',
      quote: 'Haris came in and helped us transfer knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.',
      rating: 5,
      freelancer: 'Haris S.',
      role: 'Full-Stack Developer',
      date: 'Apr 7, 2025',
      avatar: '👨‍💻'
    },
    {
      category: 'Design & Creative',
      quote: 'Ezzan did an amazing job editing my videos—fast turnaround, great attention to detail, and very easy to work with. He follows directions well and delivers high-quality work consistently.',
      rating: 5,
      freelancer: 'Ezzan S.',
      role: 'Video Editor',
      date: 'Mar 14, 2025',
      avatar: '🎬'
    },
    {
      category: 'AI Services',
      quote: 'Rick is a fantastic AI/ML engineer with specialization in LLMs, delivering end-to-end solutions. We had a few concepts when we started; ultimately, he delivered a working solution.',
      rating: 5,
      freelancer: 'Richard C.',
      role: 'AI/ML Engineer',
      date: 'Mar 28, 2025',
      avatar: '🤖'
    },
    {
      category: 'Sales & Marketing',
      quote: 'We loved working with Jibran and his team. They are very professional and know what they are doing. Very responsive and methodical about how to approach each project.',
      rating: 5,
      freelancer: 'Jibran Z.',
      role: 'Marketing Specialist',
      date: 'Mar 10, 2025',
      avatar: '📊'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real results from clients
          </h2>
          <p className="text-xl text-gray-600">
            See what clients are saying about working with freelancers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-600 text-sm font-medium 
                               px-3 py-1 rounded-full">
                  {testimonial.category}
                </span>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  Rating is {testimonial.rating}.0 out of 5.
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Work done by {testimonial.freelancer}
                  </div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold 
                           hover:bg-green-600 transition-colors">
            Browse more talent
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
