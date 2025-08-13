import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const slides = [
    {
      title: '專業網頁設計',
      description: '打造獨特的品牌形象，提升您的線上影響力',
      action: '#web-design',
      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(135deg, #B8E6E6 0%, #85D0D0 100%)'
    },
    {
      title: '創意平面設計',
      description: '從Logo到海報，為您的品牌注入創意靈魂',
      action: '#graphic-design',
      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(135deg, #F5E6A3 0%, #F0D875 100%)'
    },
    {
      title: '專業影音製作',
      description: '用動態影像說故事，傳達您的品牌價值',
      action: '#video-production',
      background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)'
    }
  ];

  const services = [
    { icon: '🎨', title: '平面設計', description: 'Logo設計、海報製作、品牌識別', id: 'graphic-design' },
    { icon: '💻', title: '網頁設計', description: '響應式網站、UI/UX設計', id: 'web-design' },
    { icon: '⚡', title: '程式開發', description: '網站開發、APP製作、系統建置', id: 'development' },
    { icon: '📈', title: '行銷企劃', description: '數位行銷、社群經營、廣告投放', id: 'marketing' },
    { icon: '✍️', title: '文案撰寫', description: '廣告文案、內容創作、SEO文章', id: 'copywriting' },
    { icon: '🎬', title: '影音製作', description: '企業形象影片、動畫製作', id: 'video-production' },
    { icon: '🌐', title: '翻譯服務', description: '多國語言翻譯、本地化服務', id: 'translation' },
    { icon: '🎞️', title: '影音剪輯', description: '影片後製、特效製作、音效處理', id: 'video-editing' },
    { icon: '📸', title: '攝影服務', description: '商業攝影、人像攝影、產品拍攝', id: 'photography' }
  ];

  const trustStats = [
    { number: '50,000+', label: '專業創作者' },
    { number: '100,000+', label: '成功專案' },
    { number: '98%', label: '客戶滿意度' },
    { number: '24/7', label: '專業客服' }
  ];

  // 自動輪播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // 跳轉至服務列表頁面並帶入搜尋參數
      navigate(`/jobs?search=${encodeURIComponent(searchQuery)}`);
    } else {
      alert('請輸入搜尋關鍵字');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const goToService = (serviceType) => {
    // 跳轉到服務列表頁面並篩選特定類型
    navigate(`/jobs?category=${serviceType}`);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      {/* 導航欄 */}
      <Header />

      {/* 主要內容 */}
      <main className="main-content">
        {/* 推薦服務輪播 */}
        <section className="banner-section">
          <div className="banner-slider">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ background: slide.background }}
              >
                <div className="banner-content">
                  <h2 className="banner-title">{slide.title}</h2>
                  <p className="banner-description">{slide.description}</p>
                  <a href={slide.action} className="btn-primary">立即查看</a>
                </div>
              </div>
            ))}
          </div>
          <div className="banner-indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* 搜尋區塊 */}
        <section className="search-section">
          <h1 className="search-title">尋找最適合的創作者和專業服務</h1>
          <p className="search-subtitle">連接優秀的專業人才，實現您的專案夢想</p>
          
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="搜尋服務（例如：網頁設計、文案撰寫、翻譯…）"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={handleSearch}>搜尋</button>
          </div>
        </section>

        {/* 服務類型 */}
        <section className="services-section">
          <h2 className="section-title">服務類型</h2>
          <p className="section-subtitle">探索各種專業服務類別</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                onClick={() => goToService(service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 平台信賴指標 */}
        <section className="trust-section">
          <div className="trust-container">
            <h2 className="trust-title">值得信賴的專業平台</h2>
            <div className="trust-stats">
              {trustStats.map((stat, index) => (
                <div key={index} className="trust-item">
                  <div className="trust-number">{stat.number}</div>
                  <div className="trust-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
