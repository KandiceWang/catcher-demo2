import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TalentDetailPage.css';

const TalentDetailPage = () => {
  const { id } = useParams();
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  // 模擬創作者資料（實際應用中會從API獲取）
  const talentData = {
    id: id || 1,
    name: '陳雅婷',
    title: '資深UI/UX設計師',
    avatar: '陳',
    rating: 4.9,
    reviewCount: 127,
    completedProjects: 89,
    responseTime: '2小時內',
    isOnline: true,
    location: '台北市',
    memberSince: '2020年3月',
    about: '擁有8年的UI/UX設計經驗，專精於網站設計、行動應用程式設計和用戶體驗優化。曾服務過多家知名企業，包含電商、金融、教育等領域。注重細節，善於將複雜的需求轉化為直觀易用的設計解決方案。',
    skills: [
      'UI/UX設計', 'Figma', 'Sketch', 'Adobe XD', '原型設計', 
      '用戶研究', '響應式設計', '設計系統', 'Photoshop', 'Illustrator',
      '互動設計', '資訊架構', '線框圖', '視覺設計'
    ],
    stats: {
      completedProjects: 89,
      onTimeDelivery: '98%',
      reviews: 127,
      repeatClients: '95%'
    },
    workingHours: {
      weekdays: '09:00 - 18:00',
      saturday: '10:00 - 16:00',
      sunday: '休息'
    },
    portfolio: [
      {
        title: '電商網站UI設計',
        description: '為時尚品牌設計的現代化電商平台，提升用戶購物體驗',
        image: '電商網站設計',
        color: '#B8E6E6'
      },
      {
        title: '健康管理APP',
        description: '直觀的健康追蹤應用程式，幫助用戶養成良好生活習慣',
        image: '行動應用程式',
        color: '#F5E6A3'
      },
      {
        title: '企業官網重設計',
        description: '為科技公司打造的專業形象網站，展現企業實力與創新',
        image: '企業官網',
        color: '#C8E6C9'
      }
    ],
    services: [
      {
        id: 'web-design',
        name: '網站UI/UX設計',
        description: '完整的網站設計服務，從用戶研究到最終設計交付，包含響應式設計和互動原型。',
        price: 1200,
        features: [
          '用戶研究與分析',
          '資訊架構設計',
          '線框圖與原型製作',
          '視覺設計與風格指南',
          '響應式設計',
          '設計系統建立'
        ]
      },
      {
        id: 'app-design',
        name: '行動應用程式設計',
        description: 'iOS和Android應用程式的完整設計解決方案，注重用戶體驗和介面美觀性。',
        price: 1500,
        features: [
          'APP用戶流程設計',
          '介面設計與圖標製作',
          '互動原型開發',
          '多平台適配',
          '設計規範文件'
        ]
      },
      {
        id: 'consultation',
        name: '設計諮詢與優化',
        description: '現有產品的設計評估與改善建議，提供專業的UX諮詢服務。',
        price: 800,
        features: [
          '設計審查與評估',
          '用戶體驗分析',
          '改善建議報告',
          '設計策略規劃'
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        reviewer: '王經理',
        avatar: '王',
        date: '2024年1月15日',
        rating: 5,
        comment: '雅婷的設計非常專業，完全符合我們的需求。她不僅設計能力出色，溝通也很順暢，能夠準確理解我們的想法並提出更好的建議。整個合作過程非常愉快，強烈推薦！'
      },
      {
        id: 2,
        reviewer: '李總監',
        avatar: '李',
        date: '2024年1月8日',
        rating: 5,
        comment: '合作了多個專案，每次都能準時交付高品質的設計作品。雅婷對細節的把控很到位，設計風格也很符合現代趨勢。是值得長期合作的優秀設計師。'
      },
      {
        id: 3,
        reviewer: '張創辦人',
        avatar: '張',
        date: '2023年12月28日',
        rating: 4,
        comment: '設計水準很高，特別是在用戶體驗方面有很深的理解。唯一小建議是希望能在初期多一些溝通，確保設計方向完全符合預期。整體來說非常滿意！'
      }
    ],
    ratingBreakdown: {
      5: 108,
      4: 15,
      3: 3,
      2: 1,
      1: 0
    }
  };

  // 作品集輪播
  const goToPortfolio = (index) => {
    setCurrentPortfolio(index);
  };

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolio(prev => (prev + 1) % talentData.portfolio.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [talentData.portfolio.length]);

  // 收藏功能
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // 聯繫功能
  const sendMessage = () => {
    alert('即將開啟訊息對話');
  };

  const scheduleCall = () => {
    alert('即將開啟通話預約');
  };

  const orderService = (serviceId) => {
    const service = talentData.services.find(s => s.id === serviceId);
    alert(`即將訂購「${service.name}」服務`);
  };

  // 渲染星級評分
  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 ? '☆' : '');
  };

  return (
    <div className="talent-detail-page">
      {/* 麵包屑導航 */}
      <div className="breadcrumb">
        <Link to="/">首頁</Link> &gt; <Link to="/talents">創作者列表</Link> &gt; {talentData.name}
      </div>

      {/* 創作者資訊區域 */}
      <div className="talent-profile">
        <div className="profile-header">
          <div className="profile-avatar">{talentData.avatar}</div>
          <div className="profile-info">
            <div className="online-status">
              {talentData.isOnline && (
                <>
                  <div className="status-dot"></div>
                  線上
                </>
              )}
            </div>
            <h1 className="profile-name">{talentData.name}</h1>
            <p className="profile-title">{talentData.title}</p>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-text">{talentData.rating} ({talentData.reviewCount}則評價)</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📍</span>
                <span className="stat-text">{talentData.location}</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📅</span>
                <span className="stat-text">加入於 {talentData.memberSince}</span>
              </div>
            </div>
            <div className="profile-actions">
              <button className="btn-primary" onClick={sendMessage}>
                💬 發送訊息
              </button>
              <button className="btn-secondary">
                🤝 立即雇用
              </button>
              <button 
                className="btn-outline" 
                onClick={toggleFavorite}
              >
                {isFavorited ? '❤️ 已收藏' : '🤍 收藏'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 內容區域 */}
      <div className="content-layout">
        {/* 主要內容欄 */}
        <div className="main-column">
          {/* 關於我 */}
          <div className="content-card">
            <h2 className="card-title">👋 關於我</h2>
            <p className="about-text">{talentData.about}</p>
            <div className="skills-grid">
              {talentData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* 作品集 */}
          <div className="content-card">
            <h2 className="card-title">🎨 作品集</h2>
            <div className="portfolio-slider">
              <div className="portfolio-container">
                <div 
                  className="portfolio-slides"
                  style={{ transform: `translateX(-${currentPortfolio * 100}%)` }}
                >
                  {talentData.portfolio.map((item, index) => (
                    <div 
                      key={index}
                      className="portfolio-slide"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="portfolio-info">
                        <h3 className="portfolio-title">{item.title}</h3>
                        <p className="portfolio-description">{item.description}</p>
                      </div>
                      <div className="portfolio-image-placeholder">
                        {item.image}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="portfolio-nav">
                {talentData.portfolio.map((_, index) => (
                  <div 
                    key={index}
                    className={`portfolio-dot ${index === currentPortfolio ? 'active' : ''}`}
                    onClick={() => goToPortfolio(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* 服務項目 */}
          <div className="content-card">
            <h2 className="card-title">💼 服務項目</h2>
            {talentData.services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-header">
                  <div>
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-price">
                    NT$ {service.price.toLocaleString()}
                    <span className="price-unit">/小時</span>
                  </div>
                </div>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="btn-primary"
                  onClick={() => orderService(service.id)}
                >
                  選擇此服務
                </button>
              </div>
            ))}
          </div>

          {/* 客戶評價 */}
          <div className="content-card">
            <h2 className="card-title">⭐ 客戶評價</h2>
            
            <div className="reviews-summary">
              <div className="rating-score">
                <div className="score-number">{talentData.rating}</div>
                <div className="score-stars">{renderStars(talentData.rating)}</div>
                <div className="score-text">{talentData.reviewCount}則評價</div>
              </div>
              <div className="rating-breakdown">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="rating-bar">
                    <span className="bar-label">{star}星</span>
                    <div className="bar-fill">
                      <div 
                        className="bar-progress" 
                        style={{ 
                          width: `${(talentData.ratingBreakdown[star] / talentData.reviewCount) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <span className="bar-count">{talentData.ratingBreakdown[star]}</span>
                  </div>
                ))}
              </div>
            </div>

            {talentData.reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">{review.avatar}</div>
                    <div>
                      <div className="reviewer-name">{review.reviewer}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="review-rating">{renderStars(review.rating)}</div>
                </div>
                <p className="review-text">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 側邊欄 */}
        <div className="sidebar-column">
          {/* 聯繫卡片 */}
          <div className="content-card contact-card">
            <h3 className="card-title">💬 聯繫方式</h3>
            <div className="contact-buttons">
              <button className="btn-primary" onClick={sendMessage}>發送訊息</button>
              <button className="btn-outline" onClick={scheduleCall}>預約通話</button>
            </div>
            <div className="response-time">
              <div className="response-label">平均回覆時間</div>
              <div className="response-value">{talentData.responseTime}</div>
            </div>
          </div>

          {/* 統計資料 */}
          <div className="content-card">
            <h3 className="card-title">📊 工作統計</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{talentData.stats.completedProjects}</div>
                <div className="stat-label">完成專案</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{talentData.stats.onTimeDelivery}</div>
                <div className="stat-label">準時交付</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{talentData.stats.reviews}</div>
                <div className="stat-label">客戶評價</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{talentData.stats.repeatClients}</div>
                <div className="stat-label">重複合作率</div>
              </div>
            </div>
          </div>

          {/* 工作時間 */}
          <div className="content-card">
            <h3 className="card-title">⏰ 工作時間</h3>
            <div className="working-hours">
              <p><strong>週一至週五：</strong> {talentData.workingHours.weekdays}</p>
              <p><strong>週六：</strong> {talentData.workingHours.saturday}</p>
              <p><strong>週日：</strong> {talentData.workingHours.sunday}</p>
              <p className="hours-note">* 緊急專案可彈性調整時間</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDetailPage;
