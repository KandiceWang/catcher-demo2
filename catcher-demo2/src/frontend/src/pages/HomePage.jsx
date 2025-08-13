import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioCarousel from '../components/PortfolioCarousel';
import ProcessSection from '../components/ProcessSection';
import VTSchoolSection from '../components/VTSchoolSection';
import CommissionForm from '../components/CommissionForm';
import ContactSection from '../components/ContactSection';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formType, setFormType] = useState('commission'); // 'commission' 或 'creator'

  // 滚动到表单区域
  const formRef = useRef(null);

  const scrollToForm = (type = 'commission') => {
    setFormType(type);
    setIsFormVisible(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }, 100);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="homepage">
      {/* 多语言导航头部 */}
      <Header onCommissionClick={() => scrollToForm('commission')} />
      
      {/* 动态背景视频Hero区域 */}
      <HeroSection 
        onCommissionClick={() => scrollToForm('commission')}
        onCreatorClick={() => scrollToForm('creator')}
      />
      
      {/* 核心服务展示区块 */}
      <ServicesSection />
      
      {/* 团队实绩轮播组件 */}
      <PortfolioCarousel />
      
      {/* 委托流程说明区块 */}
      <ProcessSection />
      
      {/* VT学堂教学展示 */}
      <VTSchoolSection />
      
      {/* 统一委托表单区块 */}
      <div ref={formRef}>
        {isFormVisible && (
          <CommissionForm 
            type={formType}
            onClose={closeForm}
          />
        )}
      </div>
      
      {/* 关于我们联系区块 */}
      <ContactSection />
    </div>
  );
};

export default HomePage;