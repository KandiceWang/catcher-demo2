import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Find your next hire for a short task or long-term growth
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Whether you need a quick project completed or want to build a long-term 
          partnership, our platform connects you with the right talent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/browse-freelancers" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold 
                     hover:bg-gray-50 transition-colors text-lg"
          >
            Explore Freelancers
          </Link>
          <Link 
            to="/post-job" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg 
                     font-semibold hover:bg-white hover:text-green-600 
                     transition-colors text-lg"
          >
            Post a Job
          </Link>
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
            <div className="text-blue-200 text-sm">Client satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">Award winner</div>
            <div className="text-blue-200 text-sm">Best freelance platform</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-blue-200 text-sm">Customer support</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">180+ countries</div>
            <div className="text-blue-200 text-sm">Global reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
