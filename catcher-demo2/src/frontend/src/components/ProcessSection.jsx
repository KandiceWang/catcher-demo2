import { useTranslation } from 'react-i18next';
import './ProcessSection.css';

const ProcessSection = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: 1,
      icon: '📝',
      color: '#FF6B6B'
    },
    {
      step: 2,
      icon: '🤝',
      color: '#4ECDC4'
    },
    {
      step: 3,
      icon: '⚡',
      color: '#45B7D1'
    },
    {
      step: 4,
      icon: '🎉',
      color: '#96CEB4'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="process-header fade-in">
          <h2 className="section-title">
            {t('home.process.title')}
          </h2>
          <p className="section-subtitle">
            {t('home.process.subtitle')}
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((item, index) => (
            <div 
              key={item.step}
              className="process-step fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-connector" />
              
              <div 
                className="step-icon"
                style={{ '--step-color': item.color }}
              >
                <span className="step-emoji">{item.icon}</span>
                <div className="step-number">{item.step}</div>
              </div>
              
              <div className="step-content">
                <h3 className="step-title">
                  {t(`home.process.steps.${item.step}.title`)}
                </h3>
                <p className="step-description">
                  {t(`home.process.steps.${item.step}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;