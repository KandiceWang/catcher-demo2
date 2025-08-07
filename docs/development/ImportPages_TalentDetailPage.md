<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>陳雅婷 - 資深UI/UX設計師 - Catcher</title>
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

        .nav-links a:hover {
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

        .btn-outline {
            background: transparent;
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

        .btn-outline:hover {
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

        /* 麵包屑導航 */
        .breadcrumb {
            margin-bottom: 2rem;
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .breadcrumb a {
            color: var(--color-text-secondary);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
            color: var(--color-primary);
        }

        /* 創作者資訊區域 */
        .talent-profile {
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 8px 32px var(--color-shadow);
            border: 1px solid var(--color-border);
        }

        .profile-header {
            display: flex;
            gap: 2rem;
            margin-bottom: 2rem;
            align-items: flex-start;
        }

        .profile-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: var(--gradient-cool);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
            font-weight: 700;
            flex-shrink: 0;
            box-shadow: 0 8px 24px rgba(44, 95, 95, 0.2);
        }

        .profile-info {
            flex: 1;
        }

        .profile-name {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .profile-title {
            font-size: 1.3rem;
            color: var(--color-text-secondary);
            margin-bottom: 1rem;
        }

        .profile-stats {
            display: flex;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .stat-icon {
            font-size: 1.2rem;
        }

        .stat-text {
            font-weight: 600;
            color: var(--color-text-primary);
        }

        .profile-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .online-status {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--color-card-mint);
            color: var(--color-primary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background: #4CAF50;
            border-radius: 50%;
        }

        /* 內容區域佈局 */
        .content-layout {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
        }

        .main-column {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .sidebar-column {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        /* 內容卡片 */
        .content-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 20px var(--color-shadow);
            border: 1px solid var(--color-border);
        }

        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* 關於我區塊 */
        .about-text {
            color: var(--color-text-secondary);
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .skill-tag {
            background: var(--color-card-blue);
            color: var(--color-primary);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .skill-tag:nth-child(3n+2) {
            background: var(--color-card-yellow);
        }

        .skill-tag:nth-child(3n+3) {
            background: var(--color-card-mint);
        }

        /* 作品集輪播 */
        .portfolio-slider {
            position: relative;
            margin-bottom: 1rem;
        }

        .portfolio-container {
            overflow: hidden;
            border-radius: 12px;
        }

        .portfolio-slides {
            display: flex;
            transition: transform 0.5s ease;
        }

        .portfolio-slide {
            min-width: 100%;
            height: 300px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: end;
            padding: 1.5rem;
            position: relative;
        }

        .portfolio-slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.7));
        }

        .portfolio-info {
            position: relative;
            z-index: 1;
            color: white;
        }

        .portfolio-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .portfolio-description {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        .portfolio-nav {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .portfolio-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--color-border);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .portfolio-dot.active {
            background: var(--color-primary);
            transform: scale(1.2);
        }

        /* 服務項目 */
        .service-item {
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            transition: all 0.3s ease;
        }

        .service-item:hover {
            box-shadow: 0 4px 16px var(--color-shadow);
            transform: translateY(-2px);
        }

        .service-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .service-name {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .service-price {
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--color-accent);
        }

        .service-description {
            color: var(--color-text-secondary);
            margin-bottom: 1rem;
            line-height: 1.6;
        }

        .service-features {
            list-style: none;
            margin-bottom: 1rem;
        }

        .service-features li {
            color: var(--color-text-secondary);
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 1.5rem;
        }

        .service-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #4CAF50;
            font-weight: bold;
        }

        /* 評價區塊 */
        .reviews-summary {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--color-warm-bg);
            border-radius: 12px;
        }

        .rating-score {
            text-align: center;
        }

        .score-number {
            font-size: 3rem;
            font-weight: 800;
            color: var(--color-primary);
        }

        .score-stars {
            color: #FFD700;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .score-text {
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .rating-breakdown {
            flex: 1;
        }

        .rating-bar {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
        }

        .bar-label {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            width: 60px;
        }

        .bar-fill {
            flex: 1;
            height: 8px;
            background: var(--color-border);
            border-radius: 4px;
            overflow: hidden;
        }

        .bar-progress {
            height: 100%;
            background: var(--gradient-warm);
            border-radius: 4px;
        }

        .bar-count {
            font-size: 0.9rem;
            color: var(--color-text-muted);
            width: 30px;
        }

        .review-item {
            border-bottom: 1px solid var(--color-border);
            padding: 1.5rem 0;
        }

        .review-item:last-child {
            border-bottom: none;
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .reviewer-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .reviewer-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient-cool);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
        }

        .reviewer-name {
            font-weight: 600;
            color: var(--color-primary);
        }

        .review-date {
            color: var(--color-text-muted);
            font-size: 0.9rem;
        }

        .review-rating {
            color: #FFD700;
        }

        .review-text {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        /* 側邊欄卡片 */
        .contact-card {
            text-align: center;
        }

        .contact-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .response-time {
            background: var(--color-card-mint);
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 1rem;
        }

        .response-label {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
            margin-bottom: 0.5rem;
        }

        .response-value {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-primary);
        }

        /* 統計卡片 */
        .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .stat-card {
            text-align: center;
            padding: 1rem;
            background: var(--color-warm-bg);
            border-radius: 12px;
        }

        .stat-number {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }

        /* 響應式設計 */
        @media (max-width: 1024px) {
            .content-layout {
                grid-template-columns: 1fr;
            }
            
            .sidebar-column {
                order: -1;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .main-content {
                padding: 1rem;
            }

            .profile-header {
                flex-direction: column;
                text-align: center;
            }

            .profile-name {
                font-size: 2rem;
            }

            .profile-stats {
                justify-content: center;
                flex-wrap: wrap;
            }

            .profile-actions {
                justify-content: center;
            }

            .reviews-summary {
                flex-direction: column;
                text-align: center;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }
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
        <!-- 麵包屑導航 -->
        <div class="breadcrumb">
            <a href="/">首頁</a> > <a href="/talents">尋找創作者</a> > 陳雅婷
        </div>

        <!-- 創作者資訊區域 -->
        <div class="talent-profile">
            <div class="profile-header">
                <div class="profile-avatar">陳</div>
                <div class="profile-info">
                    <div class="online-status">
                        <div class="status-dot"></div>
                        線上中
                    </div>
                    <h1 class="profile-name">陳雅婷</h1>
                    <p class="profile-title">資深UI/UX設計師</p>
                    <div class="profile-stats">
                        <div class="stat-item">
                            <span class="stat-icon">⭐</span>
                            <span class="stat-text">4.9 (127則評價)</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">📍</span>
                            <span class="stat-text">台北市</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">💼</span>
                            <span class="stat-text">5年經驗</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">✅</span>
                            <span class="stat-text">89個完成專案</span>
                        </div>
                    </div>
                    <div class="profile-actions">
                        <button class="btn-primary" onclick="contactTalent()">立即聯繫</button>
                        <button class="btn-outline" onclick="hireTalent()">雇用</button>
                        <button class="btn-secondary" onclick="toggleFavorite()">❤️ 收藏</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content-layout">
            <!-- 主要內容欄 -->
            <div class="main-column">
                <!-- 關於我 -->
                <div class="content-card">
                    <h2 class="card-title">👋 關於我</h2>
                    <div class="about-text">
                        <p>您好！我是陳雅婷，一位擁有5年以上經驗的UI/UX設計師。我專精於網頁和行動應用程式設計，致力於創造直觀、美觀且用戶友好的數位體驗。</p>
                        <p>我曾與多家知名企業合作，包括科技新創公司、電商平台和傳統企業的數位轉型專案。我的設計理念是以用戶為中心，結合商業目標與美學設計，創造出既實用又吸引人的產品。</p>
                        <p>我熟練使用各種設計工具，包括Figma、Adobe XD、Sketch等，並具備前端開發的基礎知識，能夠與開發團隊有效溝通，確保設計的完美實現。</p>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--color-primary);">專業技能</h3>
                    <div class="skills-grid">
                        <span class="skill-tag">UI設計</span>
                        <span class="skill-tag">UX設計</span>
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Adobe XD</span>
                        <span class="skill-tag">Sketch</span>
                        <span class="skill-tag">Photoshop</span>
                        <span class="skill-tag">Illustrator</span>
                        <span class="skill-tag">原型設計</span>
                        <span class="skill-tag">用戶研究</span>
                        <span class="skill-tag">響應式設計</span>
                        <span class="skill-tag">設計系統</span>
                        <span class="skill-tag">HTML/CSS</span>
                    </div>
                </div>

                <!-- 作品集 -->
                <div class="content-card">
                    <h2 class="card-title">🎨 作品集</h2>
                    <div class="portfolio-slider">
                        <div class="portfolio-container">
                            <div class="portfolio-slides" id="portfolioSlides">
                                <div class="portfolio-slide" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 300%22><rect fill=%22%23B8E6E6%22 width=%22800%22 height=%22300%22/><text x=%22400%22 y=%22150%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22%232C5F5F%22>電商網站設計</text></svg>');">
                                    <div class="portfolio-info">
                                        <h3 class="portfolio-title">電商網站UI設計</h3>
                                        <p class="portfolio-description">為時尚品牌設計的現代化電商平台，提升用戶購物體驗</p>
                                    </div>
                                </div>
                                <div class="portfolio-slide" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 300%22><rect fill=%22%23F5E6A3%22 width=%22800%22 height=%22300%22/><text x=%22400%22 y=%22150%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22%232C5F5F%22>行動應用程式</text></svg>');">
                                    <div class="portfolio-info">
                                        <h3 class="portfolio-title">健康管理APP</h3>
                                        <p class="portfolio-description">直觀的健康追蹤應用程式，幫助用戶養成良好生活習慣</p>
                                    </div>
                                </div>
                                <div class="portfolio-slide" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 300%22><rect fill=%22%23C8E6C9%22 width=%22800%22 height=%22300%22/><text x=%22400%22 y=%22150%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22%232C5F5F%22>企業官網</text></svg>');">
                                    <div class="portfolio-info">
                                        <h3 class="portfolio-title">企業官網重設計</h3>
                                        <p class="portfolio-description">為科技公司打造的專業形象網站，展現企業實力與創新</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-nav">
                            <div class="portfolio-dot active" onclick="goToPortfolio(0)"></div>
                            <div class="portfolio-dot" onclick="goToPortfolio(1)"></div>
                            <div class="portfolio-dot" onclick="goToPortfolio(2)"></div>
                        </div>
                    </div>
                </div>

                <!-- 服務項目 -->
                <div class="content-card">
                    <h2 class="card-title">💼 服務項目</h2>
                    
                    <div class="service-item">
                        <div class="service-header">
                            <div>
                                <h3 class="service-name">網站UI/UX設計</h3>
                                <p class="service-description">完整的網站設計服務，從用戶研究到最終設計交付，包含響應式設計和互動原型。</p>
                            </div>
                            <div class="service-price">NT$ 1,200<span style="font-size: 0.8rem; color: var(--color-text-muted);">/小時</span></div>
                        </div>
                        <ul class="service-features">
                            <li>用戶研究與分析</li>
                            <li>資訊架構設計</li>
                            <li>線框圖與原型製作</li>
                            <li>視覺設計與風格指南</li>
                            <li>響應式設計</li>
                            <li>設計系統建立</li>
                        </ul>
                        <button class="btn-primary" onclick="orderService('web-design')">選擇此服務</button>
                    </div>

                    <div class="service-item">
                        <div class="service-header">
                            <div>
                                <h3 class="service-name">行動應用程式設計</h3>
                                <p class="service-description">iOS和Android應用程式的完整設計解決方案，注重用戶體驗和介面美觀性。</p>
                            </div>
                            <div class="service-price">NT$ 1,500<span style="font-size: 0.8rem; color: var(--color-text-muted);">/小時</span></div>
                        </div>
                        <ul class="service-features">
                            <li>APP用戶流程設計</li>
                            <li>介面設計與圖標製作</li>
                            <li>互動原型開發</li>
                            <li>多平台適配</li>
                            <li>設計規範文件</li>
                        </ul>
                        <button class="btn-primary" onclick="orderService('app-design')">選擇此服務</button>
                    </div>

                    <div class="service-item">
                        <div class="service-header">
                            <div>
                                <h3 class="service-name">設計諮詢與優化</h3>
                                <p class="service-description">現有產品的設計評估與改善建議，提供專業的UX諮詢服務。</p>
                            </div>
                            <div class="service-price">NT$ 800<span style="font-size: 0.8rem; color: var(--color-text-muted);">/小時</span></div>
                        </div>
                        <ul class="service-features">
                            <li>設計審查與評估</li>
                            <li>用戶體驗分析</li>
                            <li>改善建議報告</li>
                            <li>設計策略規劃</li>
                        </ul>
                        <button class="btn-primary" onclick="orderService('consultation')">選擇此服務</button>
                    </div>
                </div>

                <!-- 客戶評價 -->
                <div class="content-card">
                    <h2 class="card-title">⭐ 客戶評價</h2>
                    
                    <div class="reviews-summary">
                        <div class="rating-score">
                            <div class="score-number">4.9</div>
                            <div class="score-stars">★★★★★</div>
                            <div class="score-text">127則評價</div>
                        </div>
                        <div class="rating-breakdown">
                            <div class="rating-bar">
                                <span class="bar-label">5星</span>
                                <div class="bar-fill">
                                    <div class="bar-progress" style="width: 85%"></div>
                                </div>
                                <span class="bar-count">108</span>
                            </div>
                            <div class="rating-bar">
                                <span class="bar-label">4星</span>
                                <div class="bar-fill">
                                    <div class="bar-progress" style="width: 12%"></div>
                                </div>
                                <span class="bar-count">15</span>
                            </div>
                            <div class="rating-bar">
                                <span class="bar-label">3星</span>
                                <div class="bar-fill">
                                    <div class="bar-progress" style="width: 2%"></div>
                                </div>
                                <span class="bar-count">3</span>
                            </div>
                            <div class="rating-bar">
                                <span class="bar-label">2星</span>
                                <div class="bar-fill">
                                    <div class="bar-progress" style="width: 1%"></div>
                                </div>
                                <span class="bar-count">1</span>
                            </div>
                            <div class="rating-bar">
                                <span class="bar-label">1星</span>
                                <div class="bar-fill">
                                    <div class="bar-progress" style="width: 0%"></div>
                                </div>
                                <span class="bar-count">0</span>
                            </div>
                        </div>
                    </div>

                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">王</div>
                                <div>
                                    <div class="reviewer-name">王經理</div>
                                    <div class="review-date">2024年1月15日</div>
                                </div>
                            </div>
                            <div class="review-rating">★★★★★</div>
                        </div>
                        <p class="review-text">雅婷的設計非常專業，完全符合我們的需求。她不僅設計能力出色，溝通也很順暢，能夠準確理解我們的想法並提出更好的建議。整個合作過程非常愉快，強烈推薦！</p>
                    </div>

                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">李</div>
                                <div>
                                    <div class="reviewer-name">李總監</div>
                                    <div class="review-date">2024年1月8日</div>
                                </div>
                            </div>
                            <div class="review-rating">★★★★★</div>
                        </div>
                        <p class="review-text">合作了多個專案，每次都能準時交付高品質的設計作品。雅婷對細節的把控很到位，設計風格也很符合現代趋势。是值得長期合作的優秀設計師。</p>
                    </div>

                    <div class="review-item">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">張</div>
                                <div>
                                    <div class="reviewer-name">張創辦人</div>
                                    <div class="review-date">2023年12月28日</div>
                                </div>
                            </div>
                            <div class="review-rating">★★★★☆</div>
                        </div>
                        <p class="review-text">設計水準很高，特別是在用戶體驗方面有很深的理解。唯一小建議是希望能在初期多一些溝通，確保設計方向完全符合預期。整體來說非常滿意！</p>
                    </div>
                </div>
            </div>

            <!-- 側邊欄 -->
            <div class="sidebar-column">
                <!-- 聯繫卡片 -->
                <div class="content-card contact-card">
                    <h3 class="card-title">💬 聯繫方式</h3>
                    <div class="contact-buttons">
                        <button class="btn-primary" onclick="sendMessage()">發送訊息</button>
                        <button class="btn-outline" onclick="scheduleCall()">預約通話</button>
                    </div>
                    <div class="response-time">
                        <div class="response-label">平均回覆時間</div>
                        <div class="response-value">2小時內</div>
                    </div>
                </div>

                <!-- 統計資料 -->
                <div class="content-card">
                    <h3 class="card-title">📊 工作統計</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">89</div>
                            <div class="stat-label">完成專案</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">準時交付</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">127</div>
                            <div class="stat-label">客戶評價</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">95%</div>
                            <div class="stat-label">重複合作率</div>
                        </div>
                    </div>
                </div>

                <!-- 工作時間 -->
                <div class="content-card">
                    <h3 class="card-title">⏰ 工作時間</h3>
                    <div style="color: var(--color-text-secondary); line-height: 1.8;">
                        <p><strong>週一至週五：</strong> 09:00 - 18:00</p>
                        <p><strong>週六：</strong> 10:00 - 16:00</p>
                        <p><strong>週日：</strong> 休息</p>
                        <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--color-text-muted);">
                            * 緊急專案可彈性調整時間
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>
        let currentPortfolio = 0;
        const portfolioSlides = document.querySelectorAll('.portfolio-slide');
        const portfolioDots = document.querySelectorAll('.portfolio-dot');

        // 作品集輪播功能
        function goToPortfolio(index) {
            // 更新幻燈片位置
            const slidesContainer = document.getElementById('portfolioSlides');
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            
            // 更新指示器
            portfolioDots.forEach(dot => dot.classList.remove('active'));
            portfolioDots[index].classList.add('active');
            
            currentPortfolio = index;
        }

        // 自動輪播
        setInterval(() => {
            const nextIndex = (currentPortfolio + 1) % portfolioSlides.length;
            goToPortfolio(nextIndex);
        }, 5000);

        // 聯繫功能
        function contactTalent() {
            alert('即將開啟聊天視窗與陳雅婷聯繫');
            // 實際應用中會開啟聊天功能
        }

        function hireTalent() {
            alert('即將前往雇用頁面');
            // 實際應用中會跳轉到雇用流程
        }

        function toggleFavorite() {
            const btn = event.target;
            if (btn.textContent.includes('❤️')) {
                btn.textContent = '🤍 收藏';
                alert('已從收藏中移除');
            } else {
                btn.textContent = '❤️ 已收藏';
                alert('已加入收藏');
            }
        }

        function sendMessage() {
            alert('即將開啟訊息對話');
            // 實際應用中會開啟訊息功能
        }

        function scheduleCall() {
            alert('即將開啟通話預約');
            // 實際應用中會開啟預約功能
        }

        function orderService(serviceType) {
            const serviceNames = {
                'web-design': '網站UI/UX設計',
                'app-design': '行動應用程式設計',
                'consultation': '設計諮詢與優化'
            };
            alert(`即將訂購「${serviceNames[serviceType]}」服務`);
            // 實際應用中會跳轉到訂購頁面
        }

        // 導航功能
        function goHome() {
            window.location.href = '/';
        }

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

        // 平滑滾動
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b3f4e421c24a46',t:'MTc1NDU0MDE2Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
