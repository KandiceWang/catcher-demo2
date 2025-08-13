import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './TalentsPage.css';

const TalentsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  // 模擬創作者資料
  const talentsData = [
    {
      id: 1,
      name: "陳雅婷",
      title: "資深UI/UX設計師",
      avatar: "陳",
      rating: 4.9,
      reviewCount: 127,
      description: "專精於網頁和行動應用程式設計，擁有5年以上設計經驗，曾服務多家知名企業。",
      skills: ["UI設計", "UX設計", "Figma", "Adobe XD"],
      price: 1200,
      category: "web-design",
      level: "expert",
      isFavorite: false
    },
    {
      id: 2,
      name: "林志明",
      title: "全端工程師",
      avatar: "林",
      rating: 4.8,
      reviewCount: 89,
      description: "熟悉React、Node.js等現代技術棧，能夠獨立完成完整的網站開發專案。",
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      price: 1500,
      category: "development",
      level: "expert",
      isFavorite: true
    },
    {
      id: 3,
      name: "王美玲",
      title: "品牌視覺設計師",
      avatar: "王",
      rating: 4.7,
      reviewCount: 156,
      description: "專業品牌識別設計，從Logo到完整視覺系統，幫助企業建立獨特品牌形象。",
      skills: ["品牌設計", "Logo設計", "Illustrator", "Photoshop"],
      price: 800,
      category: "graphic-design",
      level: "intermediate",
      isFavorite: false
    },
    {
      id: 4,
      name: "張文華",
      title: "數位行銷專家",
      avatar: "張",
      rating: 4.9,
      reviewCount: 203,
      description: "擅長社群媒體行銷、SEO優化和廣告投放，協助企業提升線上曝光度。",
      skills: ["SEO", "Google Ads", "Facebook廣告", "內容行銷"],
      price: 1000,
      category: "marketing",
      level: "expert",
      isFavorite: false
    },
    {
      id: 5,
      name: "李佳穎",
      title: "專業文案創作者",
      avatar: "李",
      rating: 4.6,
      reviewCount: 94,
      description: "具備豐富的廣告文案和內容創作經驗，能夠撰寫吸引人的行銷文案。",
      skills: ["廣告文案", "內容創作", "SEO文章", "社群文案"],
      price: 600,
      category: "copywriting",
      level: "intermediate",
      isFavorite: false
    },
    {
      id: 6,
      name: "黃志偉",
      title: "影片製作專家",
      avatar: "黃",
      rating: 4.8,
      reviewCount: 78,
      description: "專業影片拍攝和後製，從企業形象影片到產品宣傳片都能勝任。",
      skills: ["影片拍攝", "後製剪輯", "動畫製作", "配音"],
      price: 1800,
      category: "video",
      level: "expert",
      isFavorite: false
    },
    {
      id: 7,
      name: "吳雅慧",
      title: "多語言翻譯師",
      avatar: "吳",
      rating: 4.7,
      reviewCount: 145,
      description: "精通中英日三語翻譯，具備商業文件和技術文檔翻譯經驗。",
      skills: ["中英翻譯", "日文翻譯", "商業文件", "本地化"],
      price: 900,
      category: "translation",
      level: "expert",
      isFavorite: false
    },
    {
      id: 8,
      name: "劉建宏",
      title: "商業攝影師",
      avatar: "劉",
      rating: 4.5,
      reviewCount: 67,
      description: "專業商業攝影，包含產品攝影、人像攝影和活動紀錄。",
      skills: ["產品攝影", "人像攝影", "活動紀錄", "後製修圖"],
      price: 1300,
      category: "photography",
      level: "intermediate",
      isFavorite: false
    }
  ];

  const [currentTalents, setCurrentTalents] = useState([...talentsData]);
  const [favorites, setFavorites] = useState(new Set());

  // 導航欄滾動效果
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          navbar.style.boxShadow = '0 2px 20px rgba(44, 95, 95, 0.1)';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 搜尋和篩選功能
  const performSearch = () => {
    let filtered = talentsData.filter(talent => {
      const matchesSearch = !searchQuery || 
        talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !categoryFilter || talent.category === categoryFilter;
      const matchesLevel = !levelFilter || talent.level === levelFilter;
      const matchesPrice = (!minPrice || talent.price >= parseInt(minPrice)) && 
                          (!maxPrice || talent.price <= parseInt(maxPrice));
      const matchesRating = !ratingFilter || talent.rating >= parseFloat(ratingFilter);

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating;
    });

    // 排序
    switch(sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // 相關性排序 (保持原順序)
        break;
    }

    setCurrentTalents(filtered);
  };

  // 當篩選條件改變時執行搜尋
  useEffect(() => {
    performSearch();
  }, [searchQuery, categoryFilter, levelFilter, minPrice, maxPrice, ratingFilter, sortBy]);

  const handleSearch = () => {
    performSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const toggleFavorite = (talentId, event) => {
    event.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(talentId)) {
      newFavorites.delete(talentId);
    } else {
      newFavorites.add(talentId);
    }
    setFavorites(newFavorites);
  };

  const viewTalentDetail = (talentId) => {
    navigate(`/talents/${talentId}`);
  };

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // navigate('/');
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
  };

  return (
    <div className="talents-page">
      {/* 導航欄 */}
      <Header />

      {/* 主要內容 */}
      <main className="main-content">
        {/* 頁面標題 */}
        <div className="page-header">
          <h1 className="page-title">尋找創作者</h1>
          <p className="page-subtitle">發現才華洋溢的專業創作者，為您的專案找到完美夥伴</p>
        </div>

        {/* 搜尋和篩選區域 */}
        <div className="search-filter-section">
          <div className="search-bar">
            <input 
              type="text" 
              className="search-input" 
              placeholder="搜尋創作者或技能關鍵字..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={handleSearch}>搜尋</button>
          </div>
          
          <div className="filters-row">
            <div className="filter-group">
              <label className="filter-label">專業領域</label>
              <select 
                className="filter-select" 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">所有類別</option>
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
              <label className="filter-label">經驗等級</label>
              <select 
                className="filter-select"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
              >
                <option value="">所有等級</option>
                <option value="beginner">新手 (0-2年)</option>
                <option value="intermediate">中級 (2-5年)</option>
                <option value="expert">專家 (5年以上)</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label">價格範圍 (每小時)</label>
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
            找到 <strong>{currentTalents.length}</strong> 位創作者
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
              <option value="newest">最新加入</option>
            </select>
          </div>
        </div>

        {/* 創作者卡片網格 */}
        <div className="talents-grid">
          {currentTalents.length === 0 ? (
            <div className="loading">沒有找到符合條件的創作者</div>
          ) : (
            currentTalents.map(talent => (
              <div key={talent.id} className="talent-card" onClick={() => viewTalentDetail(talent.id)}>
                <div className="talent-header">
                  <div className="talent-avatar">{talent.avatar}</div>
                  <div className="talent-info">
                    <h3 className="talent-name">{talent.name}</h3>
                    <p className="talent-title">{talent.title}</p>
                    <div className="talent-rating">
                      <span className="stars">{renderStars(talent.rating)}</span>
                      <span className="rating-text">{talent.rating} ({talent.reviewCount}則評價)</span>
                    </div>
                  </div>
                </div>
                <p className="talent-description">{talent.description}</p>
                <div className="talent-skills">
                  {talent.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <div className="talent-footer">
                  <div className="talent-price">
                    NT$ {talent.price.toLocaleString()}
                    <span className="price-unit">/小時</span>
                  </div>
                  <button 
                    className={`favorite-btn ${favorites.has(talent.id) ? 'active' : ''}`}
                    onClick={(e) => toggleFavorite(talent.id, e)}
                  >
                    {favorites.has(talent.id) ? '❤️' : '🤍'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 分頁 */}
        <div className="pagination">
          <button className="page-btn" onClick={() => changePage(1)}>« 上一頁</button>
          <button className={`page-btn ${currentPage === 1 ? 'active' : ''}`} onClick={() => changePage(1)}>1</button>
          <button className={`page-btn ${currentPage === 2 ? 'active' : ''}`} onClick={() => changePage(2)}>2</button>
          <button className={`page-btn ${currentPage === 3 ? 'active' : ''}`} onClick={() => changePage(3)}>3</button>
          <button className={`page-btn ${currentPage === 4 ? 'active' : ''}`} onClick={() => changePage(4)}>4</button>
          <button className={`page-btn ${currentPage === 5 ? 'active' : ''}`} onClick={() => changePage(5)}>5</button>
          <button className="page-btn" onClick={() => changePage(2)}>下一頁 »</button>
        </div>
      </main>
    </div>
  );
};

export default TalentsPage;
