import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './JobDetailPage.css';

const JobDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 模擬服務數據 - 實際應用中會從API獲取
  const serviceData = {
    id: id,
    title: "響應式網站開發 - 現代化企業官網",
    price: 45000,
    rating: 4.8,
    reviewCount: 45,
    completedOrders: 23,
    category: "網站開發",
    lastUpdated: "2024年1月",
    deliveryTime: "25-30個工作天",
    creator: {
      name: "李建宏",
      title: "資深全端工程師",
      avatar: "李",
      rating: 4.9,
      completedProjects: 156,
      location: "台北市",
      experience: "8年",
      satisfaction: "98%"
    },
    gallery: [
      {
        src: "/api/placeholder/800/400",
        title: "企業官網首頁",
        desc: "現代化設計，完整響應式佈局"
      },
      {
        src: "/api/placeholder/800/400",
        title: "關於我們頁面",
        desc: "公司介紹與團隊展示"
      },
      {
        src: "/api/placeholder/800/400",
        title: "服務項目頁面",
        desc: "完整服務展示與說明"
      },
      {
        src: "/api/placeholder/800/400",
        title: "聯絡我們頁面",
        desc: "聯絡表單與地圖整合"
      },
      {
        src: "/api/placeholder/400/600",
        title: "手機版響應式設計",
        desc: "完美適配行動裝置"
      }
    ],
    features: [
      {
        title: "📱 完全響應式設計",
        desc: "適配所有裝置，從桌機到手機都有完美的顯示效果"
      },
      {
        title: "⚡ 高效能優化",
        desc: "載入速度優化，提升使用者體驗與SEO排名"
      },
      {
        title: "🔒 安全性保障",
        desc: "SSL憑證、資料加密、定期安全更新"
      },
      {
        title: "🎨 客製化設計",
        desc: "根據品牌特色量身打造獨特的視覺風格"
      }
    ],
    techSpecs: [
      { label: "前端框架", value: "React.js / Vue.js" },
      { label: "樣式框架", value: "Tailwind CSS" },
      { label: "後端技術", value: "Node.js / Express" },
      { label: "資料庫", value: "MongoDB / MySQL" },
      { label: "部署平台", value: "AWS / Vercel" },
      { label: "版本控制", value: "Git / GitHub" }
    ],
    timeline: [
      {
        step: 1,
        title: "需求分析與規劃",
        desc: "深入了解客戶需求、目標客群分析、競品研究、功能規格制定",
        duration: "3-5個工作天"
      },
      {
        step: 2,
        title: "視覺設計與原型",
        desc: "網站架構設計、視覺風格確立、頁面原型製作、設計稿確認",
        duration: "5-7個工作天"
      },
      {
        step: 3,
        title: "前端開發",
        desc: "響應式頁面開發、互動功能實作、瀏覽器相容性測試",
        duration: "8-10個工作天"
      },
      {
        step: 4,
        title: "後端開發與整合",
        desc: "資料庫設計、API開發、後台管理系統、第三方服務整合",
        duration: "6-8個工作天"
      },
      {
        step: 5,
        title: "測試與優化",
        desc: "功能測試、效能優化、SEO設定、安全性檢查",
        duration: "3-4個工作天"
      },
      {
        step: 6,
        title: "上線與交付",
        desc: "網站部署、域名設定、SSL憑證安裝、操作教學、文件交付",
        duration: "2-3個工作天"
      }
    ],
    includes: [
      "完整響應式網站開發",
      "客製化視覺設計",
      "後台管理系統",
      "SEO基礎優化",
      "SSL安全憑證",
      "一年免費維護",
      "操作教學與文件",
      "網站效能優化"
    ],
    relatedServices: [
      {
        id: "ecommerce",
        title: "電商網站開發",
        desc: "完整購物車功能",
        price: 65000
      },
      {
        id: "webapp",
        title: "網頁應用程式",
        desc: "客製化系統開發",
        price: 80000
      }
    ]
  };

  const changeMainImage = (index) => {
    setSelectedImageIndex(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOrderNow = () => {
    alert('即將前往訂購頁面，開始您的網站開發專案！');
    // 實際應用中會跳轉到訂購流程
  };

  const handleContactCreator = () => {
    alert(`即將開啟與${serviceData.creator.name}的聊天視窗，討論專案細節`);
    // 實際應用中會開啟聊天功能
  };

  const handleViewCreatorProfile = () => {
    navigate(`/talents/${serviceData.creator.name}`);
  };

  const handleViewRelatedService = (serviceId) => {
    navigate(`/jobs/${serviceId}`);
  };

  useEffect(() => {
    // 滾動到頂部
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="job-detail-page">
      <Header />
      
      <main className="main-content">
        {/* 麵包屑導航 */}
        <div className="breadcrumb">
          <span onClick={() => navigate('/')} className="breadcrumb-link">首頁</span>
          <span className="breadcrumb-separator"> &gt; </span>
          <span onClick={() => navigate('/jobs')} className="breadcrumb-link">服務搜尋</span>
          <span className="breadcrumb-separator"> &gt; </span>
          <span onClick={() => navigate('/jobs?category=網站開發')} className="breadcrumb-link">網站開發</span>
          <span className="breadcrumb-separator"> &gt; </span>
          <span className="breadcrumb-current">響應式網站開發</span>
        </div>

        {/* 服務標題區域 */}
        <div className="service-header">
          <h1 className="service-title-main">{serviceData.title}</h1>
          <div className="service-meta">
            <div className="meta-item">
              <span className="meta-icon">⭐</span>
              <span>{serviceData.rating} ({serviceData.reviewCount}則評價)</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">📦</span>
              <span>{serviceData.completedOrders}個已完成訂單</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🏷️</span>
              <span>{serviceData.category}</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🕒</span>
              <span>最後更新：{serviceData.lastUpdated}</span>
            </div>
          </div>
          <div className="service-creator-info">
            <div className="creator-avatar-large">{serviceData.creator.avatar}</div>
            <div className="creator-details">
              <h3>{serviceData.creator.name}</h3>
              <div className="creator-stats">
                <span>⭐ {serviceData.creator.rating}</span>
                <span>📦 {serviceData.creator.completedProjects}個完成專案</span>
                <span>📍 {serviceData.creator.location}</span>
                <span>💼 {serviceData.creator.experience}經驗</span>
              </div>
            </div>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="service-detail-layout">
          {/* 主要內容欄 */}
          <div className="main-column">
            {/* 服務截圖展示 */}
            <div className="content-card">
              <h2 className="card-title">🖥️ 作品展示</h2>
              <div className="service-gallery">
                <div className="main-screenshot" onClick={openModal}>
                  <img 
                    src={serviceData.gallery[selectedImageIndex].src} 
                    alt={serviceData.gallery[selectedImageIndex].title}
                  />
                  <div className="screenshot-overlay">
                    <div className="screenshot-info">
                      <div className="screenshot-title">{serviceData.gallery[selectedImageIndex].title}</div>
                      <div className="screenshot-desc">{serviceData.gallery[selectedImageIndex].desc}</div>
                    </div>
                  </div>
                </div>
                
                <div className="thumbnail-gallery">
                  {serviceData.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                      onClick={() => changeMainImage(index)}
                    >
                      <img src={image.src} alt={image.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 服務詳細說明 */}
            <div className="content-card">
              <h2 className="card-title">📋 服務說明</h2>
              <div className="service-description">
                <p>專為現代企業打造的響應式官方網站，結合最新的網頁技術與使用者體驗設計，為您的品牌建立專業且具有競爭力的線上形象。</p>
                
                <h3>🎯 服務特色</h3>
                <div className="feature-grid">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <h3>🛠️ 技術規格</h3>
                <div className="tech-specs">
                  <h4>開發技術與工具</h4>
                  <div className="specs-grid">
                    {serviceData.techSpecs.map((spec, index) => (
                      <div key={index} className="spec-item">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3>📦 包含內容</h3>
                <ul>
                  <li><strong>首頁設計：</strong>品牌形象展示、核心服務介紹、客戶見證</li>
                  <li><strong>關於我們：</strong>公司介紹、團隊成員、企業文化</li>
                  <li><strong>服務項目：</strong>詳細服務說明、案例展示、價格資訊</li>
                  <li><strong>聯絡我們：</strong>聯絡表單、地圖整合、多元聯絡方式</li>
                  <li><strong>後台管理：</strong>內容管理系統、數據分析、SEO工具</li>
                  <li><strong>額外功能：</strong>多語言支援、社群媒體整合、電子報訂閱</li>
                </ul>

                <h3>🎨 設計理念</h3>
                <p>採用現代簡約的設計風格，注重使用者體驗與品牌一致性。透過精心規劃的資訊架構與直觀的導航設計，讓訪客能夠快速找到所需資訊，有效提升轉換率。</p>

                <h4>視覺設計重點：</h4>
                <ul>
                  <li>清晰的視覺層次與資訊架構</li>
                  <li>符合品牌調性的色彩搭配</li>
                  <li>高品質的圖片與圖標使用</li>
                  <li>一致的字體與排版風格</li>
                  <li>適當的留白與間距設計</li>
                </ul>
              </div>
            </div>

            {/* 開發時程 */}
            <div className="content-card">
              <h2 className="card-title">📅 開發時程</h2>
              <div className="timeline">
                {serviceData.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">{item.step}</div>
                    <div className="timeline-content">
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                      <div className="timeline-duration">預計時間：{item.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 側邊欄 */}
          <div className="sidebar-column">
            {/* 訂購卡片 */}
            <div className="content-card order-card">
              <div className="price-display">
                <div className="price-label">專案總價</div>
                <div className="price-amount">NT$ {serviceData.price.toLocaleString()}</div>
                <div className="price-note">包含所有開發與設計費用</div>
              </div>
              
              <div className="service-includes">
                <h4 style={{color: 'var(--color-primary)', marginBottom: '1rem'}}>📦 服務包含</h4>
                <ul className="includes-list">
                  {serviceData.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="delivery-info">
                <div className="delivery-time">{serviceData.deliveryTime}</div>
                <div className="delivery-note">完整開發週期</div>
              </div>
              
              <div className="order-buttons">
                <button className="btn-order" onClick={handleOrderNow}>立即訂購</button>
                <button className="btn-secondary" onClick={handleContactCreator}>聯繫討論</button>
              </div>
              
              <div className="guarantee-info">
                <strong>🛡️ 服務保障</strong><br/>
                30天不滿意退款<br/>
                一年免費技術支援
              </div>
            </div>

            {/* 創作者資訊 */}
            <div className="content-card creator-card">
              <div className="creator-avatar-sidebar">{serviceData.creator.avatar}</div>
              <div className="creator-name">{serviceData.creator.name}</div>
              <div className="creator-title">{serviceData.creator.title}</div>
              
              <div className="creator-stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{serviceData.creator.rating}</div>
                  <div className="stat-label">平均評分</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{serviceData.creator.completedProjects}</div>
                  <div className="stat-label">完成專案</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{serviceData.creator.experience}</div>
                  <div className="stat-label">開發經驗</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{serviceData.creator.satisfaction}</div>
                  <div className="stat-label">客戶滿意度</div>
                </div>
              </div>
              
              <button className="btn-secondary" onClick={handleViewCreatorProfile} style={{width: '100%'}}>
                查看完整檔案
              </button>
            </div>

            {/* 相關服務推薦 */}
            <div className="content-card">
              <h3 className="card-title">🔗 相關服務</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {serviceData.relatedServices.map((service, index) => (
                  <div 
                    key={index}
                    className="related-service-item"
                    onClick={() => handleViewRelatedService(service.id)}
                  >
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                    <div className="related-service-price">NT$ {service.price.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 圖片模態框 */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img 
              src={serviceData.gallery[selectedImageIndex].src} 
              alt={serviceData.gallery[selectedImageIndex].title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
