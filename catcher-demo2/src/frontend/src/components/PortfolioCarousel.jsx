import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PortfolioCarousel.css';

const PortfolioCarousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 模拟作品数据 (基于 image_1755094502895.png 的设计)
  const portfolioItems = [
    {
      id: 1,
      title: 'Sakura VTuber 角色设计',
      category: 'Live2D建模',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format',
      description: '精美的樱花主题VTuber角色，包含完整Live2D建模',
      tags: ['Live2D', '角色设计', '樱花主题'],
      creator: '创作者A',
      completed: '2024年1月'
    },
    {
      id: 2,
      title: 'Cyberpunk 未来风格',
      category: '3D建模',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format',
      description: '赛博朋克风格的3D虚拟形象设计',
      tags: ['3D建模', '赛博朋克', '未来科技'],
      creator: '创作者B',
      completed: '2024年2月'
    },
    {
      id: 3,
      title: '可爱猫咪 VTuber',
      category: '角色设计',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop&auto=format',
      description: '萌系猫咪主题的VTuber角色设计',
      tags: ['角色设计', '萌系', '猫咪主题'],
      creator: '创作者C',
      completed: '2024年3月'
    },
    {
      id: 4,
      title: '魔法少女系列',
      category: 'Live2D进阶',
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop&auto=format',
      description: '魔法少女主题的进阶Live2D建模与特效',
      tags: ['Live2D', '魔法少女', '特效制作'],
      creator: '创作者D',
      completed: '2024年4月'
    },
    {
      id: 5,
      title: '机甲战士设计',
      category: '3D高端',
      image: 'https://images.unsplash.com/photo-1589254065909-c7d2b64e2c9c?w=600&h=400&fit=crop&auto=format',
      description: '高端3D机甲战士VTuber设计与渲染',
      tags: ['3D高端', '机甲', '战士主题'],
      creator: '创作者E',
      completed: '2024年5月'
    },
    {
      id: 6,
      title: '森林精灵系列',
      category: '插画设计',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format',
      description: '精美的森林精灵主题插画与封面设计',
      tags: ['插画', '森林精灵', '自然主题'],
      creator: '创作者F',
      completed: '2024年6月'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // 自动播放功能
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container">
        <div className="portfolio-header fade-in">
          <h2 className="section-title">团队实绩展示</h2>
          <p className="section-subtitle">精选作品案例，见证专业品质</p>
        </div>

        <div className="carousel-container">
          {/* 左箭头 */}
          <button 
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <span>❮</span>
          </button>

          {/* 轮播内容 */}
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="carousel-slide">
                  <div className="portfolio-card card-shadow">
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-category">{item.category}</div>
                      </div>
                    </div>
                    
                    <div className="portfolio-content">
                      <h3 className="portfolio-title">{item.title}</h3>
                      <p className="portfolio-description">{item.description}</p>
                      
                      <div className="portfolio-tags">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="portfolio-tag">{tag}</span>
                        ))}
                      </div>
                      
                      <div className="portfolio-meta">
                        <div className="portfolio-creator">
                          <span className="creator-label">创作者:</span>
                          <span className="creator-name">{item.creator}</span>
                        </div>
                        <div className="portfolio-completed">
                          {item.completed}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右箭头 */}
          <button 
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <span>❯</span>
          </button>
        </div>

        {/* 指示器 */}
        <div className="carousel-indicators">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="portfolio-cta fade-in">
          <button className="btn-secondary">
            查看完整作品集
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;