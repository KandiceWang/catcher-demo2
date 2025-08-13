const StatsSection = () => {
  const stats = [
    { number: '18M+', label: 'Registered freelancers' },
    { number: '5M+', label: 'Registered clients' },
    { number: '$3.8B+', label: 'Paid to freelancers annually' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The world's work marketplace
          </h2>
          <p className="text-xl text-gray-600">
            Millions of people use Upwork to turn their ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How it works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-500 text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Post a job</h4>
                <p className="text-gray-600 text-sm">
                  Tell us what you need done and receive competitive proposals from freelancers.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-500 text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Hire professionals</h4>
                <p className="text-gray-600 text-sm">
                  Review profiles, interviews, and proposals then hire the most qualified candidate.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-500 text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Get work done</h4>
                <p className="text-gray-600 text-sm">
                  Use Upwork to chat or video call, share files, and track project progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
