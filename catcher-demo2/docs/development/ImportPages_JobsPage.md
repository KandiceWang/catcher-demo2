<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>服務搜尋 - Catcher</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* 配色系統 */
        :root {
            --color-primary: #2C5F5F;
            --color-accent: #F06F5A;
            --color-warm-bg: #FDF6E3;
            --color-card-blue: #B8E6E6;
            --color-card-yellow: #F5E6A3;
            --color-card-mint: #C8E6C9;
            --color-white: #FFFFFF;
            --color-text-primary: #2C5F5F;
            --color-text-secondary: #5A7F7F;
            --color-text-muted: #8FA8A8;
            --color-border: #E0EDE3;
            --color-shadow: rgba(44, 95, 95, 0.1);
            --gradient-warm: linear-gradient(135deg, var(--color-accent) 0%, #FF8A65 100%);
            --gradient-cool: linear-gradient(135deg, var(--color-primary) 0%, #4DB6AC 100%);
            --gradient-bg: linear-gradient(180deg, var(--color-warm-bg) 0%, #F0F7FF 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', 'Noto Sans TC', sans-serif;
            background: var(--gradient-bg);
            color: var(--color-text-primary);
            line-height: 1.6;
        }

        /* 導航欄 */
        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--color-border);
            padding: 1rem 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--color-primary);
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .logo:hover {
            color: var(--color-accent);
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--color-text-secondary);
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--color-primary);
        }

        .nav-buttons {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        /* 按鈕系統 */
        .btn-primary {
            background: var(--gradient-warm);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(240, 111, 90, 0.3);
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(240, 111, 90, 0.4);
        }

        .btn-secondary {
            background: white;
            color: var(--color-primary);
            border: 2px solid var(--color-primary);
            padding: 10px 22px;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }

        .btn-secondary:hover {
            background: var(--color-primary);
            color: white;
        }

        /* 主要內容區域 */
        .main-content {
            margin-top: 80px;
            padding: 2rem;
            max-width: 1400px;
            margin-left: auto;
            margin-right: auto;
        }

        /* 頁面標題 */
        .page-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .page-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 1rem;
        }

        .page-subtitle {
            font-size: 1.2rem;
            color: var(--color-text-secondary);
        }

        /* 熱門分類區域 */
        .popular-categories {
            margin-bottom: 3rem;
        }

        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .category-card {
            background: white;
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            border: 1px solid var(--color-border);
            box-shadow: 0 4px 20px var(--color-shadow);
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }

        .category-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(44, 95, 95, 0.15);
        }

        .category-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
        }

        .category-name {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .category-count {
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        /* 搜尋和篩選區域 */
        .search-filter-section {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 20px var(--color-shadow);
            border: 1px solid var(--color-border);
        }

        .search-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .search-input {
            flex: 1;
            padding: 12px 16px;
            border: 2px solid var(--color-border);
            border-radius: 12px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .search-input:focus {
            border-color: var(--color-primary);
        }

        .search-btn {
            background: var(--gradient-warm);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(240, 111, 90, 0.4);
        }

        .filters-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .filter-label {
            font-weight: 600;
            color: var(--color-text-primary);
            font-size: 0.9rem;
        }

        .filter-select {
            padding: 10px 12px;
            border: 2px solid var(--color-border);
            border-radius: 8px;
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .filter-select:focus {
            border-color: var(--color-primary);
        }

        .price-range {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .price-input {
            flex: 1;
            padding: 8px 10px;
            border: 2px solid var(--color-border);
            border-radius: 6px;
            font-size: 0.9rem;
            outline: none;
        }

        /* 結果統計和排序 */
        .results-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding: 1rem 0;
        }

        .results-count {
            font-size: 1.1rem;
            color: var(--color-text-secondary);
        }

        .sort-controls {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .sort-label {
            font-weight: 600;
            color: var(--color-text-primary);
        }

        .sort-select {
            padding: 8px 12px;
            border: 2px solid var(--color-border);
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s ease;
        }

        /* 服務卡片網格 */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .service-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            box-shadow: 0 4px 20px var(--color-shadow);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(44, 95, 95, 0.15);
        }

        .service-image {
            height: 200px;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .service-badge {
            position: absolute;
            top: 1rem;
            left: 1rem;
            background: var(--color-accent);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .service-content {
            padding: 1.5rem;
        }

        .service-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }

        .service-creator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .creator-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: var(--gradient-cool);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            color: white;
            font-weight: 700;
        }

        .creator-name {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            font-weight: 500;
        }

        .service-description {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .service-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .service-tag {
            background: var(--color-card-blue);
            color: var(--color-primary);
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .service-tag:nth-child(3n+2) {
            background: var(--color-card-yellow);
        }

        .service-tag:nth-child(3n+3) {
            background: var(--color-card-mint);
        }

        .service-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            border-top: 1px solid var(--color-border);
        }

        .service-rating {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
        }

        .stars {
            color: #FFD700;
        }

        .rating-text {
            color: var(--color-text-muted);
        }

        .service-price {
            text-align: right;
        }

        .price-from {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        .price-amount {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-accent);
        }

        /* 分頁 */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 3rem;
        }

        .page-btn {
            padding: 10px 16px;
            border: 2px solid var(--color-border);
            background: white;
            color: var(--color-text-secondary);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .page-btn:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
        }

        .page-btn.active {
            background: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
        }

        /* 響應式設計 */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .main-content {
                padding: 1rem;
            }

            .page-title {
                font-size: 2rem;
            }

            .categories-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }

            .search-bar {
                flex-direction: column;
            }

            .filters-row {
                grid-template-columns: 1fr;
            }

            .results-header {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .sort-controls {
                width: 100%;
                justify-content: space-between;
            }
        }

        /* 載入動畫 */
        .loading {
            text-align: center;
            padding: 3rem;
            color: var(--color-text-muted);
        }

        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--color-border);
            border-top: 4px solid var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <!-- 導航欄 -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo" onclick="goHome()">Catcher</div>
            <ul class="nav-links">
                <li><a href="#creators">尋找創作者</a></li>
                <li><a href="#services" class="active">服務搜尋</a></li>
                <li><a href="#become-creator">成為創作者</a></li>
                <li><a href="#about">關於我們</a></li>
            </ul>
            <div class="nav-buttons">
                <a href="#login" class="btn-secondary">登入</a>
                <a href="#signup" class="btn-primary">免費註冊</a>
            </div>
        </div>
    </nav>

    <!-- 主要內容 -->
    <main class="main-content">
        <!-- 頁面標題 -->
        <div class="page-header">
            <h1 class="page-title">服務搜尋</h1>
            <p class="page-subtitle">探索各種專業創作服務，找到最適合您需求的解決方案</p>
        </div>

        <!-- 熱門分類 -->
        <section class="popular-categories">
            <h2 class="section-title">熱門服務分類</h2>
            <div class="categories-grid">
                <a href="#" class="category-card" onclick="filterByCategory('graphic-design')">
                    <span class="category-icon">🎨</span>
                    <h3 class="category-name">平面設計</h3>
                    <p class="category-count">1,234 個服務</p>
                </a>
                <a href="#" class="category-card" onclick="filterByCategory('web-design')">
                    <span class="category-icon">💻</span>
                    <h3 class="category-name">網頁設計</h3>
                    <p class="category-count">856 個服務</p>
                </a>
                <a href="#" class="category-card" onclick="filterByCategory('development')">
                    <span class="category-icon">⚡</span>
                    <h3 class="category-name">程式開發</h3>
                    <p class="category-count">692 個服務</p>
                </a>
                <a href="#" class="category-card" onclick="filterByCategory('marketing')">
                    <span class="category-icon">📈</span>
                    <h3 class="category-name">行銷企劃</h3>
                    <p class="category-count">543 個服務</p>
                </a>
                <a href="#" class="category-card" onclick="filterByCategory('copywriting')">
                    <span class="category-icon">✍️</span>
                    <h3 class="category-name">文案撰寫</h3>
                    <p class="category-count">789 個服務</p>
                </a>
                <a href="#" class="category-card" onclick="filterByCategory('video')">
                    <span class="category-icon">🎬</span>
                    <h3 class="category-name">影音製作</h3>
                    <p class="category-count">421 個服務</p>
                </a>
            </div>
        </section>

        <!-- 搜尋和篩選區域 -->
        <div class="search-filter-section">
            <div class="search-bar">
                <input type="text" class="search-input" placeholder="搜尋服務或關鍵字..." id="searchInput">
                <button class="search-btn" onclick="performSearch()">搜尋</button>
            </div>
            
            <div class="filters-row">
                <div class="filter-group">
                    <label class="filter-label">服務分類</label>
                    <select class="filter-select" id="categoryFilter">
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
                
                <div class="filter-group">
                    <label class="filter-label">交付時間</label>
                    <select class="filter-select" id="deliveryFilter">
                        <option value="">所有時間</option>
                        <option value="1">1天內</option>
                        <option value="3">3天內</option>
                        <option value="7">1週內</option>
                        <option value="14">2週內</option>
                        <option value="30">1個月內</option>
                    </select>
                </div>
                
                <div class="filter-group">
                    <label class="filter-label">價格範圍</label>
                    <div class="price-range">
                        <input type="number" class="price-input" placeholder="最低" id="minPrice">
                        <span>-</span>
                        <input type="number" class="price-input" placeholder="最高" id="maxPrice">
                    </div>
                </div>
                
                <div class="filter-group">
                    <label class="filter-label">評分</label>
                    <select class="filter-select" id="ratingFilter">
                        <option value="">所有評分</option>
                        <option value="5">5星</option>
                        <option value="4">4星以上</option>
                        <option value="3">3星以上</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- 結果統計和排序 -->
        <div class="results-header">
            <div class="results-count">
                找到 <strong id="resultsCount">1,847</strong> 個服務
            </div>
            <div class="sort-controls">
                <span class="sort-label">排序：</span>
                <select class="sort-select" id="sortSelect">
                    <option value="relevance">相關性</option>
                    <option value="rating">評分高到低</option>
                    <option value="price-low">價格低到高</option>
                    <option value="price-high">價格高到低</option>
                    <option value="newest">最新發布</option>
                    <option value="popular">最受歡迎</option>
                </select>
            </div>
        </div>

        <!-- 服務卡片網格 -->
        <div class="services-grid" id="servicesGrid">
            <!-- 服務卡片將由 JavaScript 動態生成 -->
        </div>

        <!-- 分頁 -->
        <div class="pagination">
            <a href="#" class="page-btn" onclick="changePage(1)">« 上一頁</a>
            <a href="#" class="page-btn active" onclick="changePage(1)">1</a>
            <a href="#" class="page-btn" onclick="changePage(2)">2</a>
            <a href="#" class="page-btn" onclick="changePage(3)">3</a>
            <a href="#" class="page-btn" onclick="changePage(4)">4</a>
            <a href="#" class="page-btn" onclick="changePage(5)">5</a>
            <a href="#" class="page-btn" onclick="changePage(2)">下一頁 »</a>
        </div>
    </main>

    <script>
        // 模擬服務資料
        const servicesData = [
            {
                id: 1,
                title: "專業Logo設計 - 品牌識別完整方案",
                creator: { name: "陳雅婷", avatar: "陳" },
                description: "提供完整的品牌Logo設計服務，包含多種風格選擇、原始檔案交付，以及後續修改服務。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23B8E6E6' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>Logo設計作品</text></svg>",
                tags: ["Logo設計", "品牌識別", "向量圖"],
                rating: 4.9,
                reviewCount: 127,
                priceFrom: 2500,
                category: "graphic-design",
                deliveryDays: 5,
                badge: "熱門"
            },
            {
                id: 2,
                title: "響應式網站開發 - 現代化企業官網",
                creator: { name: "林志明", avatar: "林" },
                description: "使用最新技術打造響應式企業網站，包含RWD設計、SEO優化、後台管理系統。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23F5E6A3' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>網站開發</text></svg>",
                tags: ["網站開發", "RWD", "SEO"],
                rating: 4.8,
                reviewCount: 89,
                priceFrom: 15000,
                category: "development",
                deliveryDays: 14,
                badge: "推薦"
            },
            {
                id: 3,
                title: "社群媒體行銷策略規劃",
                creator: { name: "王美玲", avatar: "王" },
                description: "專業的社群媒體行銷策略，包含內容規劃、視覺設計、廣告投放策略。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23C8E6C9' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>社群行銷</text></svg>",
                tags: ["社群行銷", "內容策略", "廣告投放"],
                rating: 4.7,
                reviewCount: 156,
                priceFrom: 8000,
                category: "marketing",
                deliveryDays: 7,
                badge: ""
            },
            {
                id: 4,
                title: "產品攝影 - 電商商品拍攝",
                creator: { name: "張文華", avatar: "張" },
                description: "專業的產品攝影服務，適合電商平台使用，包含去背、修圖、多角度拍攝。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23B8E6E6' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>產品攝影</text></svg>",
                tags: ["產品攝影", "修圖", "電商"],
                rating: 4.9,
                reviewCount: 203,
                priceFrom: 1200,
                category: "photography",
                deliveryDays: 3,
                badge: "快速交付"
            },
            {
                id: 5,
                title: "廣告文案撰寫 - 銷售轉換優化",
                creator: { name: "李佳穎", avatar: "李" },
                description: "專業廣告文案撰寫，提升點擊率和轉換率，適用於各種廣告平台。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23F5E6A3' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>廣告文案</text></svg>",
                tags: ["廣告文案", "轉換優化", "創意寫作"],
                rating: 4.6,
                reviewCount: 94,
                priceFrom: 800,
                category: "copywriting",
                deliveryDays: 2,
                badge: ""
            },
            {
                id: 6,
                title: "企業形象影片製作",
                creator: { name: "黃志偉", avatar: "黃" },
                description: "專業的企業形象影片製作，從腳本撰寫到後製完成，展現企業專業形象。",
                image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23C8E6C9' width='400' height='200'/><text x='200' y='100' text-anchor='middle' font-size='16' fill='%232C5F5F'>影片製作</text></svg>",
                tags: ["影片製作", "企業形象", "後製"],
                rating: 4.8,
                reviewCount: 78,
                priceFrom: 25000,
                category: "video",
                deliveryDays: 21,
                badge: "專業"
            }
        ];

        let currentServices = [...servicesData];
        let currentPage = 1;
        const servicesPerPage = 6;

        // 渲染服務卡片
        function renderServices(services) {
            const grid = document.getElementById('servicesGrid');
            
            if (services.length === 0) {
                grid.innerHTML = '<div class="loading">沒有找到符合條件的服務</div>';
                return;
            }

            grid.innerHTML = services.map(service => `
                <div class="service-card" onclick="viewServiceDetail(${service.id})">
                    <div class="service-image" style="background-image: url('${service.image}')">
                        ${service.badge ? `<div class="service-badge">${service.badge}</div>` : ''}
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">${service.title}</h3>
                        <div class="service-creator">
                            <div class="creator-avatar">${service.creator.avatar}</div>
                            <span class="creator-name">by ${service.creator.name}</span>
                        </div>
                        <p class="service-description">${service.description}</p>
                        <div class="service-tags">
                            ${service.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
                        </div>
                        <div class="service-footer">
                            <div class="service-rating">
                                <span class="stars">${'★'.repeat(Math.floor(service.rating))}${'☆'.repeat(5-Math.floor(service.rating))}</span>
                                <span class="rating-text">${service.rating} (${service.reviewCount})</span>
                            </div>
                            <div class="service-price">
                                <div class="price-from">起價</div>
                                <div class="price-amount">NT$ ${service.priceFrom.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // 更新結果數量
            document.getElementById('resultsCount').textContent = services.length.toLocaleString();
        }

        // 搜尋功能
        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const category = document.getElementById('categoryFilter').value;
            const delivery = parseInt(document.getElementById('deliveryFilter').value) || Infinity;
            const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
            const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
            const rating = parseFloat(document.getElementById('ratingFilter').value) || 0;

            currentServices = servicesData.filter(service => {
                const matchesSearch = !searchTerm || 
                    service.title.toLowerCase().includes(searchTerm) ||
                    service.description.toLowerCase().includes(searchTerm) ||
                    service.tags.some(tag => tag.toLowerCase().includes(searchTerm));
                
                const matchesCategory = !category || service.category === category;
                const matchesDelivery = service.deliveryDays <= delivery;
                const matchesPrice = service.priceFrom >= minPrice && service.priceFrom <= maxPrice;
                const matchesRating = service.rating >= rating;

                return matchesSearch && matchesCategory && matchesDelivery && matchesPrice && matchesRating;
            });

            renderServices(currentServices);
        }

        // 分類篩選
        function filterByCategory(category) {
            document.getElementById('categoryFilter').value = category;
            performSearch();
        }

        // 排序功能
        function sortServices() {
            const sortBy = document.getElementById('sortSelect').value;
            
            switch(sortBy) {
                case 'rating':
                    currentServices.sort((a, b) => b.rating - a.rating);
                    break;
                case 'price-low':
                    currentServices.sort((a, b) => a.priceFrom - b.priceFrom);
                    break;
                case 'price-high':
                    currentServices.sort((a, b) => b.priceFrom - a.priceFrom);
                    break;
                case 'newest':
                    currentServices.sort((a, b) => b.id - a.id);
                    break;
                case 'popular':
                    currentServices.sort((a, b) => b.reviewCount - a.reviewCount);
                    break;
                default:
                    // 相關性排序 (保持原順序)
                    break;
            }
            
            renderServices(currentServices);
        }

        // 查看服務詳情
        function viewServiceDetail(serviceId) {
            alert(`即將前往服務 ID: ${serviceId} 的詳情頁面`);
            // 實際應用中會跳轉到服務詳情頁
            // window.location.href = `/services/${serviceId}`;
        }

        // 分頁功能
        function changePage(page) {
            currentPage = page;
            // 更新分頁按鈕狀態
            document.querySelectorAll('.page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // 滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 導航功能
        function goHome() {
            window.location.href = '/';
        }

        // 事件監聽器
        document.addEventListener('DOMContentLoaded', function() {
            // 初始渲染
            renderServices(currentServices);

            // 搜尋框 Enter 鍵支援
            document.getElementById('searchInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });

            // 篩選器變更時自動搜尋
            ['categoryFilter', 'deliveryFilter', 'minPrice', 'maxPrice', 'ratingFilter'].forEach(id => {
                document.getElementById(id).addEventListener('change', performSearch);
            });

            // 排序變更時自動排序
            document.getElementById('sortSelect').addEventListener('change', sortServices);

            // 導航欄滾動效果
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(44, 95, 95, 0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            });
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b486bd9533a9b5',t:'MTc1NDU0NjE0MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
