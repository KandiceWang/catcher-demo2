import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = ({ onCommissionClick }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container section-container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">VTuber</span>
          <span className="logo-accent">製作平台</span>
        </div>

        {/* 桌面版导航链接 */}
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              {t('nav.home')}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              {t('nav.services')}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">
              {t('nav.portfolio')}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              {t('nav.about')}
            </button>
          </li>
        </ul>

        {/* 语言切换和CTA按钮 */}
        <div className="nav-buttons">
          {/* 语言切换器 */}
          <div className="language-switcher">
            <button
              className={`lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          {/* 委托按钮 */}
          <button className="btn-primary" onClick={onCommissionClick}>
            {t('nav.commission')}
          </button>
        </div>

        {/* 移动端菜单按钮 */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">
            {t('nav.portfolio')}
          </button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            {t('nav.about')}
          </button>
          
          {/* 移动端语言切换 */}
          <div className="mobile-language-switcher">
            <button
              className={`mobile-lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
              onClick={() => changeLanguage('zh')}
            >
              中文
            </button>
            <button
              className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          <button className="btn-primary mobile-cta" onClick={onCommissionClick}>
            {t('nav.commission')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;