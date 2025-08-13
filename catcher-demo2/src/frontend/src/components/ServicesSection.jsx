import { useTranslation } from 'react-i18next';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'character-design',
      icon: '🎭',
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
    },
    {
      id: 'live2d-basic',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44E5E7 100%)',
    },
    {
      id: 'live2d-advanced',
      icon: '✨',
      gradient: 'linear-gradient(135deg, #A8E6CF 0%, #88D5A3 100%)',
    },
    {
      id: '3d-basic',
      icon: '🎬',
      gradient: 'linear-gradient(135deg, #FFD93D 0%, #F8D800 100%)',
    },
    {
      id: '3d-premium',
      icon: '💎',
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)',
    },
    {
      id: 'illustration',
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #FF9800 0%, #FF5722 100%)',
    },
    {
      id: 'video-production',
      icon: '📹',
      gradient: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
    },
    {
      id: 'obs-setup',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #607D8B 0%, #8BC34A 100%)',
    },
    {
      id: 'planning',
      icon: '💡',
      gradient: 'linear-gradient(135deg, #FFC107 0%, #FFEB3B 100%)',
    },
  ];

  const handleServiceClick = (serviceId) => {
    // 这里可以添加跳转到服务详情的逻辑
    console.log(`Click on service: ${serviceId}`);
    // 或者滚动到表单区域
  };

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="services-header fade-in">
          <h2 className="section-title">
            {t('home.services.title')}
          </h2>
          <p className="section-subtitle">
            {t('home.services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card card-shadow fade-in"
              onClick={() => handleServiceClick(service.id)}
              style={{ 
                animationDelay: `${0.1 * index}s`,
                '--service-gradient': service.gradient
              }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-icon-bg"></div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">
                  {t(`home.services.items.${service.id}.name`)}
                </h3>
                <p className="service-description">
                  {t(`home.services.items.${service.id}.description`)}
                </p>
                <div className="service-price">
                  {t(`home.services.items.${service.id}.price`)}
                </div>
              </div>

              <div className="service-hover-overlay">
                <button className="service-cta-btn">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta fade-in">
          <p className="services-cta-text">
            找不到您需要的服务？
          </p>
          <button className="btn-secondary">
            联系我们定制方案
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;