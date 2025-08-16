import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = ({ onCommissionClick, onCreatorClick }) => {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // YouTube视频ID (从 https://youtu.be/9-lJ9XCkRVw 提取)
  const videoId = '9-lJ9XCkRVw';

  useEffect(() => {
    // 预加载视频缩略图
    const img = new Image();
    img.onload = () => setIsVideoLoaded(true);
    img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }, [videoId]);

  return (
    <section id="hero" className="hero-section">
      {/* YouTube视频背景 */}
      <div className="video-background">
        {isVideoLoaded ? (
          <iframe
            className="hero-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
            title="VTuber Demo Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            loading="lazy"
          ></iframe>
        ) : (
          <div 
            className="video-placeholder"
            style={{
              backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`
            }}
          >
            <div className="loading-spinner"></div>
          </div>
        )}
        
        {/* 视频覆盖层 */}
        <div className="video-overlay"></div>
      </div>

      {/* Hero内容 */}
      <div className="hero-content">
        <div className="section-container">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              <span className="hero-title-main text-gradient">
                {t('home.hero.title')}
              </span>
              <span className="hero-title-sub">
                {t('home.hero.subtitle')}
              </span>
            </h1>
            
            <p className="hero-description">
              {t('home.hero.description')}
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-vtuber" 
                onClick={onCommissionClick}
              >
                <span>🎨</span>
                {t('home.hero.cta_commission')}
              </button>
              
              <button 
                className="btn-secondary hero-secondary-btn" 
                onClick={onCreatorClick}
              >
                <span>⭐</span>
                {t('home.hero.cta_creator')}
              </button>
            </div>
          </div>

          {/* 特色亮点 */}
          <div className="hero-highlights fade-in">
            <div className="highlight-item">
              <div className="highlight-icon">🎭</div>
              <div className="highlight-text">
                <div className="highlight-title">角色设计</div>
                <div className="highlight-desc">专业三视图</div>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🤖</div>
              <div className="highlight-text">
                <div className="highlight-title">Live2D建模</div>
                <div className="highlight-desc">生动表情动作</div>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📺</div>
              <div className="highlight-text">
                <div className="highlight-title">直播设定</div>
                <div className="highlight-desc">一站式服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="scroll-indicator fade-in">
        <div className="scroll-arrow">
          <span>👇</span>
        </div>
        <div className="scroll-text">探索更多服务</div>
      </div>
    </section>
  );
};

export default HeroSection;