const PricingSection = () => {
  const plans = [
    {
      name: 'MARKETPLACE',
      fee: '5%',
      period: 'fee after hiring',
      description: 'For starting out on our global freelancer marketplace',
      features: [
        'Free to post jobs on our global freelance marketplace',
        'AI-powered features',
        'Collaboration and project tracking tools'
      ],
      buttonText: 'Get started for free',
      isPopular: false
    },
    {
      name: 'BUSINESS PLUS',
      fee: '10%',
      period: 'fee after hiring',
      description: 'For growing businesses with premium features and support',
      features: [
        'Access to pre-screened top 1% of talent',
        'Premium customer support 24/7',
        '60 invites per job post'
      ],
      buttonText: 'Get started for free',
      isPopular: true
    },
    {
      name: 'ENTERPRISE',
      fee: 'Contact sales',
      period: '',
      description: 'For scaling comprehensive solutions to the entire organization',
      features: [
        'Dedicated account and program management',
        'SSO and integrations',
        'Unlimited invites per job'
      ],
      buttonText: 'Contact sales',
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose your plan
          </h2>
          <p className="text-xl text-gray-600">
            Start with a free plan and upgrade as your business grows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 relative ${
                plan.isPopular 
                  ? 'border-2 border-green-500 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.fee}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.isPopular
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'border-2 border-green-500 text-green-500 hover:bg-green-50'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-green-500 hover:text-green-600 font-medium"
          >
            Compare all pricing plans →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
