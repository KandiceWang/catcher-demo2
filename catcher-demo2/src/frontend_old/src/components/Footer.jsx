import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'For Clients',
      links: [
        { name: 'How to hire', href: '/how-to-hire' },
        { name: 'Talent Marketplace', href: '/talent-marketplace' },
        { name: 'Project Catalog', href: '/services' },
        { name: 'Hire an agency', href: '/agencies' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Business Plus', href: '/business-plus' },
        { name: 'Any Hire', href: '/anyhire' },
        { name: 'Contract-to-hire', href: '/contract-to-hire' },
        { name: 'Direct Contracts', href: '/direct-contracts' },
        { name: 'Hire worldwide', href: '/hire' },
        { name: 'Hire in the USA', href: '/hire/us' },
      ]
    },
    {
      title: 'For Talent',
      links: [
        { name: 'How to find work', href: '/how-to-find-work' },
        { name: 'Direct Contracts', href: '/direct-contracts' },
        { name: 'Find freelance jobs worldwide', href: '/freelance-jobs' },
        { name: 'Find freelance jobs in the USA', href: '/freelance-jobs/us' },
        { name: 'Win work with ads', href: '/work/ads' },
        { name: 'Exclusive resources with Freelancer Plus', href: '/freelancerplus' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help & support', href: '/help' },
        { name: 'Success stories', href: '/success-stories' },
        { name: 'Upwork reviews', href: '/reviews' },
        { name: 'Resources', href: '/resources' },
        { name: 'Blog', href: '/blog' },
        { name: 'Affiliate programme', href: '/affiliates' },
        { name: 'Free Business Tools', href: '/tools' },
        { name: 'Release notes', href: '/release-notes' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/about' },
        { name: 'Leadership', href: '/about/team' },
        { name: 'Investor relations', href: '/investors' },
        { name: 'Careers', href: '/careers' },
        { name: 'Our impact', href: '/about/our-impact' },
        { name: 'Press', href: '/press' },
        { name: 'Contact us', href: '/contact' },
        { name: 'Partners', href: '/partners' },
        { name: 'Trust, safety & security', href: '/trust-and-safety' },
        { name: 'Modern slavery statement', href: '/modern-slavery-statement' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/upwork', icon: '📘' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/upwork', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/upwork', icon: '🐦' },
    { name: 'YouTube', href: 'https://youtube.com/upwork', icon: '📺' },
    { name: 'Instagram', href: 'https://instagram.com/upwork', icon: '📷' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Mobile App */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    title={social.name}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Mobile app</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-sm">📱 App Store</span>
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-sm">🤖 Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2015 - 2025 Upwork® Global Inc.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/legal" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/ca-notice" className="text-gray-400 hover:text-white">
                CA Notice at Collection
              </Link>
              <button className="text-gray-400 hover:text-white">
                Cookie Settings
              </button>
              <Link to="/accessibility" className="text-gray-400 hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
