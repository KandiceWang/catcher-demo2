import { useTranslation } from 'react-i18next';
import './ContactSection.css';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="contact-section">
      <div className="section-container">
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h2 className="section-title">
              {t('home.contact.title')}
            </h2>
            <p className="section-subtitle">
              {t('home.contact.subtitle')}
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <div className="contact-label">{t('home.contact.email')}</div>
                  <div className="contact-value">info@vtuber-platform.com</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-text">
                  <div className="contact-label">在线客服</div>
                  <div className="contact-value">周一至周五 9:00-18:00</div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <div className="social-title">{t('home.contact.social')}</div>
              <div className="social-buttons">
                <a href="#" className="social-btn" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-btn" aria-label="Discord">
                  <span>💬</span>
                </a>
                <a href="#" className="social-btn" aria-label="YouTube">
                  <span>📺</span>
                </a>
                <a href="#" className="social-btn" aria-label="Bilibili">
                  <span>📱</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-mascot fade-in">
            <div className="mascot-container">
              <div className="mascot-character">🦊</div>
              <div className="mascot-message">
                <div className="message-bubble">
                  欢迎来到VTuber制作平台！<br/>
                  让我们一起创造属于您的虚拟形象吧！
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-info fade-in">
          <div className="footer-text">
            <p>&copy; 2024 VTuber製作平台. All rights reserved.</p>
            <p>專業團隊 | 品質保證 | 一站式服務</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;