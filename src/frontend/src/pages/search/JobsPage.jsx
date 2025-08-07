import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import './JobsPage.css';

const JobsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [deliveryFilter, setDeliveryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [filteredServices, setFilteredServices] = useState([]);

  // 模擬服務資料
  const servicesData = [
    {
      id: 1,
      title: "專業Logo設計 - 品牌識別完整方案",
      creator: { name: "陳雅婷", avatar: "陳" },
      description: "提供完整的品牌Logo設計服務，包含多種風格選擇、原始檔案交付，以及後續修改服務。",
      tags: ["Logo設計", "品牌識別", "向量圖"],
      rating: 4.9,
      reviewCount: 127,
      priceFrom: 2500,
      category: "graphic-design",
      deliveryDays: 5,
      badge: "熱門",
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      title: "響應式網站開發 - 現代化企業官網",
      creator: { name: "林志明", avatar: "林" },
      description: "使用最新技術打造響應式企業網站，包含RWD設計、SEO優化、後台管理系統。",
      tags: ["網站開發", "RWD", "SEO"],
      rating: 4.8,
      reviewCount: 89,
      priceFrom: 15000,
      category: "development",
      deliveryDays: 14,
      badge: "推薦",
      createdAt: new Date('2024-01-20')
    },
    {
      id: 3,
      title: "社群媒體行銷策略規劃",
      creator: { name: "王美玲", avatar: "王" },
      description: "專業的社群媒體行銷策略，包含內容規劃、視覺設計、廣告投放策略。",
      tags: ["社群行銷", "內容策略", "廣告投放"],
      rating: 4.7,
      reviewCount: 156,
      priceFrom: 8000,
      category: "marketing",
      deliveryDays: 7,
      badge: "",
      createdAt: new Date('2024-01-18')
    },
    {
      id: 4,
      title: "產品攝影 - 電商商品拍攝",
      creator: { name: "張文華", avatar: "張" },
      description: "專業的產品攝影服務，適合電商平台使用，包含去背、修圖、多角度拍攝。",
      tags: ["產品攝影", "修圖", "電商"],
      rating: 4.9,
      reviewCount: 203,
      priceFrom: 1200,
      category: "photography",
      deliveryDays: 3,
      badge: "快速交付",
      createdAt: new Date('2024-01-22')
    },
    {
      id: 5,
      title: "廣告文案撰寫 - 銷售轉換優化",
      creator: { name: "李佳穎", avatar: "李" },
      description: "專業廣告文案撰寫，提升點擊率和轉換率，適用於各種廣告平台。",
      tags: ["廣告文案", "轉換優化", "創意寫作"],
      rating: 4.6,
      reviewCount: 94,
      priceFrom: 800,
      category: "copywriting",
      deliveryDays: 2,
      badge: "",
      createdAt: new Date('2024-01-25')
    },
    {
      id: 6,
      title: "企業形象影片製作",
      creator: { name: "黃志偉", avatar: "黃" },
      description: "專業的企業形象影片製作，從腳本撰寫到後製完成，展現企業專業形象。",
      tags: ["影片製作", "企業形象", "後製"],
      rating: 4.8,
      reviewCount: 78,
      priceFrom: 25000,
      category: "video",
      deliveryDays: 21,
      badge: "專業",
      createdAt: new Date('2024-01-12')
    },
    {
      id: 7,
      title: "UI/UX介面設計 - 使用者體驗優化",
      creator: { name: "蔡宜君", avatar: "蔡" },
      description: "專業的UI/UX設計服務，從使用者研究到原型設計，提升產品使用體驗。",
      tags: ["UI設計", "UX設計", "原型設計"],
      rating: 4.7,
      reviewCount: 134,
      priceFrom: 12000,
      category: "web-design",
      deliveryDays: 10,
      badge: "",
      createdAt: new Date('2024-01-28')
    },
    {
      id: 8,
      title: "中英翻譯服務 - 商業文件專業翻譯",
      creator: { name: "劉建宏", avatar: "劉" },
      description: "提供專業的中英翻譯服務，包含商業文件、網站內容、技術文件翻譯。",
      tags: ["中英翻譯", "商業文件", "技術翻譯"],
      rating: 4.8,
      reviewCount: 167,
      priceFrom: 1500,
      category: "translation",
      deliveryDays: 5,
      badge: "",
      createdAt: new Date('2024-01-30')
    },
    {
      id: 9,
      title: "短影片剪輯 - 社群媒體內容製作",
      creator: { name: "周思妤", avatar: "周" },
      description: "專業的短影片剪輯服務，適合Instagram、TikTok等社群平台，包含特效與音樂。",
      tags: ["影片剪輯", "短影片", "社群媒體"],
      rating: 4.6,
      reviewCount: 98,
      priceFrom: 2000,
      category: "video",
      deliveryDays: 4,
      badge: "熱門",
      createdAt: new Date('2024-02-01')
    },
    {
      id: 10,
      title: "包裝設計 - 產品包裝視覺設計",
      creator: { name: "吳雅雯", avatar: "吳" },
      description: "創意包裝設計服務，從概念發想到印刷檔案，打造吸引消費者的產品包裝。",
      tags: ["包裝設計", "產品設計", "印刷設計"],
      rating: 4.9,
      reviewCount: 85,
      priceFrom: 5000,
      category: "graphic-design",
      deliveryDays: 8,
      badge: "",
      createdAt: new Date('2024-02-03')
    },
    {
      id: 11,
      title: "SEO網站優化 - 搜尋引擎排名提升",
      creator: { name: "許志強", avatar: "許" },
      description: "專業SEO優化服務，提升網站在Google搜尋結果的排名，增加自然流量。",
      tags: ["SEO優化", "關鍵字分析", "流量提升"],
      rating: 4.5,
      reviewCount: 112,
      priceFrom: 6000,
      category: "marketing",
      deliveryDays: 30,
      badge: "",
      createdAt: new Date('2024-02-05')
    },
    {
      id: 12,
      title: "小程式開發 - 微信/LINE小程式",
      creator: { name: "謝建國", avatar: "謝" },
      description: "專業小程式開發服務，支援微信小程式和LINE小程式，提供完整開發解決方案。",
      tags: ["小程式開發", "微信", "LINE"],
      rating: 4.7,
      reviewCount: 67,
      priceFrom: 18000,
      category: "development",
      deliveryDays: 21,
      badge: "專業",
      createdAt: new Date('2024-02-08')
    }
  ];

  // 熱門分類資料
  const categories = [
    { id: 'graphic-design', name: '平面設計', icon: '🎨', count: 1234 },
    { id: 'web-design', name: '網頁設計', icon: '💻', count: 856 },
    { id: 'development', name: '程式開發', icon: '⚡', count: 692 },
    { id: 'marketing', name: '行銷企劃', icon: '📈', count: 543 },
    { id: 'copywriting', name: '文案撰寫', icon: '✍️', count: 789 },
    { id: 'video', name: '影音製作', icon: '🎬', count: 421 }
  ];

  // 執行搜尋和篩選
  const performSearch = () => {
    let filtered = servicesData.filter(service => {
      const matchesSearch = !searchTerm || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !categoryFilter || service.category === categoryFilter;
      const matchesDelivery = !deliveryFilter || service.deliveryDays <= parseInt(deliveryFilter);
      const matchesMinPrice = !minPrice || service.priceFrom >= parseInt(minPrice);
      const matchesMaxPrice = !maxPrice || service.priceFrom <= parseInt(maxPrice);
      const matchesRating = !ratingFilter || service.rating >= parseFloat(ratingFilter);

      return matchesSearch && matchesCategory && matchesDelivery && matchesMinPrice && matchesMaxPrice && matchesRating;
    });

    // 排序邏輯
    switch(sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case 'newest':
        filtered.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // 相關性排序 (保持原順序)
        break;
    }

    setFilteredServices(filtered);
  };

  // 分類篩選
  const filterByCategory = (category) => {
    setCategoryFilter(category);
  };

  // 查看服務詳情
  const viewServiceDetail = (serviceId) => {
    // 這裡之後會導航到服務詳情頁面
    console.log(`即將前往服務 ID: ${serviceId} 的詳情頁面`);
    // navigate(`/services/${serviceId}`);
  };

  // 生成星星評分
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  // 處理搜尋框Enter鍵
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  // 初始化和篩選器變更時執行搜尋
  useEffect(() => {
    performSearch();
  }, [searchTerm, categoryFilter, deliveryFilter, minPrice, maxPrice, ratingFilter, sortBy]);

  // 初始載入
  useEffect(() => {
    setFilteredServices(servicesData);
    
    // 處理 URL 參數
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    
    if (categoryParam) {
      setCategoryFilter(categoryParam);
    }
  }, [searchParams]);

  return (
    <div className="jobs-page">
      <Header />
      <div className="jobs-content">
        {/* 頁面標題 */}
        <div className="page-header">
          <h1 className="page-title">服務搜尋</h1>
          <p className="page-subtitle">探索各種專業創作服務，找到最適合您需求的解決方案</p>
        </div>

      {/* 熱門分類 */}
      <section className="popular-categories">
        <h2 className="section-title">熱門服務分類</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id}
              className="category-card" 
              onClick={() => filterByCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.count.toLocaleString()} 個服務</p>
            </div>
          ))}
        </div>
      </section>

      {/* 搜尋和篩選區域 */}
      <div className="search-filter-section">
        <div className="search-bar">
          <input 
            type="text" 
            className="search-input" 
            placeholder="搜尋服務或關鍵字..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleSearchKeyPress}
          />
          <button className="search-btn" onClick={performSearch}>搜尋</button>
        </div>
        
        <div className="filters-row">
          <div className="filter-group">
            <label className="filter-label">服務分類</label>
            <select 
              className="filter-select" 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">所有分類</option>
              <option value="graphic-design">平面設計</option>
              <option value="web-design">網頁設計</option>
              <option value="development">程式開發</option>
              <option value="marketing">行銷企劃</option>
              <option value="copywriting">文案撰寫</option>
              <option value="video">影音製作</option>
              <option value="translation">翻譯服務</option>
              <option value="photography">攝影服務</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">交付時間</label>
            <select 
              className="filter-select"
              value={deliveryFilter}
              onChange={(e) => setDeliveryFilter(e.target.value)}
            >
              <option value="">所有時間</option>
              <option value="1">1天內</option>
              <option value="3">3天內</option>
              <option value="7">1週內</option>
              <option value="14">2週內</option>
              <option value="30">1個月內</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">價格範圍</label>
            <div className="price-range">
              <input 
                type="number" 
                className="price-input" 
                placeholder="最低"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span>-</span>
              <input 
                type="number" 
                className="price-input" 
                placeholder="最高"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          
          <div className="filter-group">
            <label className="filter-label">評分</label>
            <select 
              className="filter-select"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">所有評分</option>
              <option value="5">5星</option>
              <option value="4">4星以上</option>
              <option value="3">3星以上</option>
            </select>
          </div>
        </div>
      </div>

      {/* 結果統計和排序 */}
      <div className="results-header">
        <div className="results-count">
          找到 <strong>{filteredServices.length.toLocaleString()}</strong> 個服務
        </div>
        <div className="sort-controls">
          <span className="sort-label">排序：</span>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="relevance">相關性</option>
            <option value="rating">評分高到低</option>
            <option value="price-low">價格低到高</option>
            <option value="price-high">價格高到低</option>
            <option value="newest">最新發布</option>
            <option value="popular">最受歡迎</option>
          </select>
        </div>
      </div>

      {/* 服務卡片網格 */}
      <div className="services-grid">
        {filteredServices.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>沒有找到符合條件的服務</h3>
            <p>請嘗試調整搜尋條件或篩選器</p>
          </div>
        ) : (
          filteredServices.map(service => (
            <div 
              key={service.id}
              className="service-card" 
              onClick={() => viewServiceDetail(service.id)}
            >
              <div className="service-image">
                {service.badge && <div className="service-badge">{service.badge}</div>}
                <div className="service-image-placeholder">
                  <span className="service-category-icon">
                    {service.category === 'graphic-design' && '🎨'}
                    {service.category === 'web-design' && '💻'}
                    {service.category === 'development' && '⚡'}
                    {service.category === 'marketing' && '📈'}
                    {service.category === 'copywriting' && '✍️'}
                    {service.category === 'video' && '🎬'}
                    {service.category === 'translation' && '🌐'}
                    {service.category === 'photography' && '📸'}
                  </span>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-creator">
                  <div className="creator-avatar">{service.creator.avatar}</div>
                  <span className="creator-name">by {service.creator.name}</span>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="service-tag">{tag}</span>
                  ))}
                </div>
                <div className="service-footer">
                  <div className="service-rating">
                    <span className="stars">{renderStars(service.rating)}</span>
                    <span className="rating-text">{service.rating} ({service.reviewCount})</span>
                  </div>
                  <div className="service-price">
                    <div className="price-from">起價</div>
                    <div className="price-amount">NT$ {service.priceFrom.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 分頁 */}
      {filteredServices.length > 0 && (
        <div className="pagination">
          <button className="page-btn">« 上一頁</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>
          <button className="page-btn">下一頁 »</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default JobsPage;
