<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>響應式網站開發 - 現代化企業官網 - Catcher</title>
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

        /* 服務詳情佈局 */
        .service-detail-layout {
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

        /* 服務標題區域 */
        .service-header {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 20px var(--color-shadow);
            border: 1px solid var(--color-border);
        }

        .service-title-main {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 1rem;
            line-height: 1.3;
        }

        .service-meta {
            display: flex;
            gap: 2rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }

        .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--color-text-secondary);
        }

        .meta-icon {
            font-size: 1.1rem;
        }

        .service-creator-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: var(--color-warm-bg);
            border-radius: 12px;
        }

        .creator-avatar-large {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: var(--gradient-cool);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            font-weight: 700;
        }

        .creator-details h3 {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.25rem;
        }

        .creator-stats {
            display: flex;
            gap: 1rem;
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }

        /* 服務圖片展示 */
        .service-gallery {
            position: relative;
            margin-bottom: 1rem;
        }

        .main-screenshot {
            width: 100%;
            height: 400px;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 1rem;
            position: relative;
            cursor: pointer;
        }

        .main-screenshot img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .main-screenshot:hover img {
            transform: scale(1.05);
        }

        .screenshot-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%);
            display: flex;
            align-items: flex-end;
            padding: 1.5rem;
        }

        .screenshot-info {
            color: white;
        }

        .screenshot-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .screenshot-desc {
            font-size: 0.9rem;
            opacity: 0.9;
        }

        .thumbnail-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
        }

        .thumbnail {
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .thumbnail:hover {
            border-color: var(--color-primary);
            transform: translateY(-2px);
        }

        .thumbnail.active {
            border-color: var(--color-accent);
        }

        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* 服務描述 */
        .service-description {
            color: var(--color-text-secondary);
            line-height: 1.8;
        }

        .service-description h3 {
            color: var(--color-primary);
            margin: 1.5rem 0 1rem 0;
            font-size: 1.3rem;
        }

        .service-description h4 {
            color: var(--color-primary);
            margin: 1rem 0 0.5rem 0;
            font-size: 1.1rem;
        }

        .service-description ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
        }

        .service-description li {
            margin-bottom: 0.5rem;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .feature-item {
            background: var(--color-warm-bg);
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--color-accent);
        }

        .feature-item h5 {
            color: var(--color-primary);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .feature-item p {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }

        /* 技術規格 */
        .tech-specs {
            background: var(--color-card-blue);
            padding: 1.5rem;
            border-radius: 12px;
            margin: 1.5rem 0;
        }

        .tech-specs h4 {
            color: var(--color-primary);
            margin-bottom: 1rem;
        }

        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(44, 95, 95, 0.1);
        }

        .spec-label {
            font-weight: 600;
            color: var(--color-primary);
        }

        .spec-value {
            color: var(--color-text-secondary);
        }

        /* 時程規劃 */
        .timeline {
            margin: 1.5rem 0;
        }

        .timeline-item {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            position: relative;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 40px;
            bottom: -20px;
            width: 2px;
            background: var(--color-border);
        }

        .timeline-item:last-child::before {
            display: none;
        }

        .timeline-marker {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: var(--color-accent);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9rem;
            flex-shrink: 0;
        }

        .timeline-content {
            flex: 1;
            padding-top: 0.25rem;
        }

        .timeline-title {
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .timeline-desc {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .timeline-duration {
            color: var(--color-text-muted);
            font-size: 0.8rem;
            font-weight: 500;
        }

        /* 側邊欄訂購卡片 */
        .order-card {
            position: sticky;
            top: 100px;
        }

        .price-display {
            text-align: center;
            margin-bottom: 1.5rem;
            padding: 1.5rem;
            background: var(--color-warm-bg);
            border-radius: 12px;
        }

        .price-label {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .price-amount {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
        }

        .price-note {
            color: var(--color-text-muted);
            font-size: 0.8rem;
        }

        .service-includes {
            margin-bottom: 1.5rem;
        }

        .includes-list {
            list-style: none;
            margin-top: 1rem;
        }

        .includes-list li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }

        .includes-list li::before {
            content: '✓';
            color: #4CAF50;
            font-weight: bold;
        }

        .order-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .btn-order {
            background: var(--gradient-warm);
            color: white;
            border: none;
            padding: 16px 24px;
            border-radius: 12px;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(240, 111, 90, 0.3);
            cursor: pointer;
        }

        .btn-order:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(240, 111, 90, 0.4);
        }

        .delivery-info {
            background: var(--color-card-mint);
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 1rem;
        }

        .delivery-time {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.25rem;
        }

        .delivery-note {
            font-size: 0.9rem;
            color: var(--color-text-secondary);
        }

        .guarantee-info {
            background: var(--color-card-yellow);
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
            font-size: 0.9rem;
            color: var(--color-text-primary);
        }

        /* 創作者資訊卡片 */
        .creator-card {
            text-align: center;
        }

        .creator-avatar-sidebar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--gradient-cool);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            font-weight: 700;
            margin: 0 auto 1rem;
        }

        .creator-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .creator-title {
            color: var(--color-text-secondary);
            margin-bottom: 1rem;
        }

        .creator-stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .stat-item {
            text-align: center;
            padding: 0.75rem;
            background: var(--color-warm-bg);
            border-radius: 8px;
        }

        .stat-number {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--color-primary);
        }

        .stat-label {
            font-size: 0.8rem;
            color: var(--color-text-muted);
        }

        /* 響應式設計 */
        @media (max-width: 1024px) {
            .service-detail-layout {
                grid-template-columns: 1fr;
            }
            
            .sidebar-column {
                order: -1;
            }

            .order-card {
                position: static;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .main-content {
                padding: 1rem;
            }

            .service-title-main {
                font-size: 1.8rem;
            }

            .service-meta {
                flex-direction: column;
                gap: 1rem;
            }

            .service-creator-info {
                flex-direction: column;
                text-align: center;
            }

            .main-screenshot {
                height: 250px;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }

            .specs-grid {
                grid-template-columns: 1fr;
            }

            .creator-stats-grid {
                grid-template-columns: 1fr;
            }

            .price-amount {
                font-size: 2rem;
            }
        }

        /* 模態框 */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
        }

        .modal-content {
            position: relative;
            margin: 5% auto;
            max-width: 90%;
            max-height: 80%;
        }

        .modal-content img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover {
            opacity: 0.7;
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
        <!-- 麵包屑導航 -->
        <div class="breadcrumb">
            <a href="/">首頁</a> > <a href="/services">服務搜尋</a> > <a href="/services/web-development">網站開發</a> > 響應式網站開發
        </div>

        <!-- 服務標題區域 -->
        <div class="service-header">
            <h1 class="service-title-main">響應式網站開發 - 現代化企業官網</h1>
            <div class="service-meta">
                <div class="meta-item">
                    <span class="meta-icon">⭐</span>
                    <span>4.8 (45則評價)</span>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">📦</span>
                    <span>23個已完成訂單</span>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">🏷️</span>
                    <span>網站開發</span>
                </div>
                <div class="meta-item">
                    <span class="meta-icon">🕒</span>
                    <span>最後更新：2024年1月</span>
                </div>
            </div>
            <div class="service-creator-info">
                <div class="creator-avatar-large">李</div>
                <div class="creator-details">
                    <h3>李建宏</h3>
                    <div class="creator-stats">
                        <span>⭐ 4.9</span>
                        <span>📦 156個完成專案</span>
                        <span>📍 台北市</span>
                        <span>💼 8年經驗</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="service-detail-layout">
            <!-- 主要內容欄 -->
            <div class="main-column">
                <!-- 服務截圖展示 -->
                <div class="content-card">
                    <h2 class="card-title">🖥️ 作品展示</h2>
                    <div class="service-gallery">
                        <div class="main-screenshot" onclick="openModal('main-img')">
                            <img id="main-img" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect fill='%23f8f9fa' width='800' height='400'/><rect fill='%232C5F5F' x='0' y='0' width='800' height='80'/><rect fill='%23ffffff' x='50' y='20' width='120' height='40' rx='4'/><text x='110' y='45' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23F06F5A' x='650' y='25' width='100' height='30' rx='15'/><text x='700' y='45' text-anchor='middle' font-size='14' fill='white'>聯絡我們</text><rect fill='%23ffffff' x='50' y='120' width='700' height='200' rx='8'/><rect fill='%23B8E6E6' x='70' y='140' width='300' height='160' rx='4'/><text x='220' y='230' text-anchor='middle' font-size='18' fill='%232C5F5F' font-weight='bold'>主要內容區域</text><rect fill='%23F5E6A3' x='400' y='140' width='320' height='75' rx='4'/><text x='560' y='185' text-anchor='middle' font-size='14' fill='%232C5F5F'>功能介紹</text><rect fill='%23C8E6C9' x='400' y='225' width='320' height='75' rx='4'/><text x='560' y='270' text-anchor='middle' font-size='14' fill='%232C5F5F'>服務特色</text><rect fill='%232C5F5F' x='0' y='350' width='800' height='50'/><text x='400' y='380' text-anchor='middle' font-size='14' fill='white'>© 2024 企業官網. All rights reserved.</text></svg>" alt="企業官網首頁">
                            <div class="screenshot-overlay">
                                <div class="screenshot-info">
                                    <div class="screenshot-title">企業官網首頁</div>
                                    <div class="screenshot-desc">現代化設計，完整響應式佈局</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="thumbnail-gallery">
                            <div class="thumbnail active" onclick="changeMainImage(0)">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect fill='%23f8f9fa' width='200' height='100'/><rect fill='%232C5F5F' x='0' y='0' width='200' height='20'/><rect fill='%23B8E6E6' x='10' y='30' width='180' height='60' rx='4'/><text x='100' y='65' text-anchor='middle' font-size='12' fill='%232C5F5F'>首頁</text></svg>" alt="首頁">
                            </div>
                            <div class="thumbnail" onclick="changeMainImage(1)">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect fill='%23f8f9fa' width='200' height='100'/><rect fill='%232C5F5F' x='0' y='0' width='200' height='20'/><rect fill='%23F5E6A3' x='10' y='30' width='85' height='60' rx='4'/><rect fill='%23C8E6C9' x='105' y='30' width='85' height='60' rx='4'/><text x='100' y='65' text-anchor='middle' font-size='12' fill='%232C5F5F'>關於我們</text></svg>" alt="關於我們">
                            </div>
                            <div class="thumbnail" onclick="changeMainImage(2)">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect fill='%23f8f9fa' width='200' height='100'/><rect fill='%232C5F5F' x='0' y='0' width='200' height='20'/><rect fill='%23B8E6E6' x='10' y='30' width='55' height='30' rx='4'/><rect fill='%23F5E6A3' x='75' y='30' width='55' height='30' rx='4'/><rect fill='%23C8E6C9' x='140' y='30' width='50' height='30' rx='4'/><rect fill='%23B8E6E6' x='10' y='65' width='55' height='25' rx='4'/><rect fill='%23F5E6A3' x='75' y='65' width='55' height='25' rx='4'/><rect fill='%23C8E6C9' x='140' y='65' width='50' height='25' rx='4'/><text x='100' y='50' text-anchor='middle' font-size='10' fill='%232C5F5F'>服務項目</text></svg>" alt="服務項目">
                            </div>
                            <div class="thumbnail" onclick="changeMainImage(3)">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect fill='%23f8f9fa' width='200' height='100'/><rect fill='%232C5F5F' x='0' y='0' width='200' height='20'/><rect fill='%23F06F5A' x='10' y='30' width='180' height='40' rx='4'/><rect fill='%23B8E6E6' x='10' y='75' width='85' height='15' rx='2'/><rect fill='%23F5E6A3' x='105' y='75' width='85' height='15' rx='2'/><text x='100' y='55' text-anchor='middle' font-size='12' fill='white'>聯絡我們</text></svg>" alt="聯絡我們">
                            </div>
                            <div class="thumbnail" onclick="changeMainImage(4)">
                                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'><rect fill='%23f8f9fa' width='200' height='100'/><rect fill='%232C5F5F' x='0' y='0' width='200' height='15'/><rect fill='%23B8E6E6' x='20' y='25' width='160' height='50' rx='4'/><text x='100' y='55' text-anchor='middle' font-size='10' fill='%232C5F5F'>手機版</text><rect fill='%23F06F5A' x='80' y='80' width='40' height='10' rx='5'/></svg>" alt="手機版">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 服務詳細說明 -->
                <div class="content-card">
                    <h2 class="card-title">📋 服務說明</h2>
                    <div class="service-description">
                        <p>專為現代企業打造的響應式官方網站，結合最新的網頁技術與使用者體驗設計，為您的品牌建立專業且具有競爭力的線上形象。</p>
                        
                        <h3>🎯 服務特色</h3>
                        <div class="feature-grid">
                            <div class="feature-item">
                                <h5>📱 完全響應式設計</h5>
                                <p>適配所有裝置，從桌機到手機都有完美的顯示效果</p>
                            </div>
                            <div class="feature-item">
                                <h5>⚡ 高效能優化</h5>
                                <p>載入速度優化，提升使用者體驗與SEO排名</p>
                            </div>
                            <div class="feature-item">
                                <h5>🔒 安全性保障</h5>
                                <p>SSL憑證、資料加密、定期安全更新</p>
                            </div>
                            <div class="feature-item">
                                <h5>🎨 客製化設計</h5>
                                <p>根據品牌特色量身打造獨特的視覺風格</p>
                            </div>
                        </div>

                        <h3>🛠️ 技術規格</h3>
                        <div class="tech-specs">
                            <h4>開發技術與工具</h4>
                            <div class="specs-grid">
                                <div class="spec-item">
                                    <span class="spec-label">前端框架</span>
                                    <span class="spec-value">React.js / Vue.js</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">樣式框架</span>
                                    <span class="spec-value">Tailwind CSS</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">後端技術</span>
                                    <span class="spec-value">Node.js / Express</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">資料庫</span>
                                    <span class="spec-value">MongoDB / MySQL</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">部署平台</span>
                                    <span class="spec-value">AWS / Vercel</span>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-label">版本控制</span>
                                    <span class="spec-value">Git / GitHub</span>
                                </div>
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

                <!-- 開發時程 -->
                <div class="content-card">
                    <h2 class="card-title">📅 開發時程</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker">1</div>
                            <div class="timeline-content">
                                <div class="timeline-title">需求分析與規劃</div>
                                <div class="timeline-desc">深入了解客戶需求、目標客群分析、競品研究、功能規格制定</div>
                                <div class="timeline-duration">預計時間：3-5個工作天</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker">2</div>
                            <div class="timeline-content">
                                <div class="timeline-title">視覺設計與原型</div>
                                <div class="timeline-desc">網站架構設計、視覺風格確立、頁面原型製作、設計稿確認</div>
                                <div class="timeline-duration">預計時間：5-7個工作天</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker">3</div>
                            <div class="timeline-content">
                                <div class="timeline-title">前端開發</div>
                                <div class="timeline-desc">響應式頁面開發、互動功能實作、瀏覽器相容性測試</div>
                                <div class="timeline-duration">預計時間：8-10個工作天</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker">4</div>
                            <div class="timeline-content">
                                <div class="timeline-title">後端開發與整合</div>
                                <div class="timeline-desc">資料庫設計、API開發、後台管理系統、第三方服務整合</div>
                                <div class="timeline-duration">預計時間：6-8個工作天</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker">5</div>
                            <div class="timeline-content">
                                <div class="timeline-title">測試與優化</div>
                                <div class="timeline-desc">功能測試、效能優化、SEO設定、安全性檢查</div>
                                <div class="timeline-duration">預計時間：3-4個工作天</div>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker">6</div>
                            <div class="timeline-content">
                                <div class="timeline-title">上線與交付</div>
                                <div class="timeline-desc">網站部署、域名設定、SSL憑證安裝、操作教學、文件交付</div>
                                <div class="timeline-duration">預計時間：2-3個工作天</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 側邊欄 -->
            <div class="sidebar-column">
                <!-- 訂購卡片 -->
                <div class="content-card order-card">
                    <div class="price-display">
                        <div class="price-label">專案總價</div>
                        <div class="price-amount">NT$ 45,000</div>
                        <div class="price-note">包含所有開發與設計費用</div>
                    </div>
                    
                    <div class="service-includes">
                        <h4 style="color: var(--color-primary); margin-bottom: 1rem;">📦 服務包含</h4>
                        <ul class="includes-list">
                            <li>完整響應式網站開發</li>
                            <li>客製化視覺設計</li>
                            <li>後台管理系統</li>
                            <li>SEO基礎優化</li>
                            <li>SSL安全憑證</li>
                            <li>一年免費維護</li>
                            <li>操作教學與文件</li>
                            <li>網站效能優化</li>
                        </ul>
                    </div>
                    
                    <div class="delivery-info">
                        <div class="delivery-time">25-30個工作天</div>
                        <div class="delivery-note">完整開發週期</div>
                    </div>
                    
                    <div class="order-buttons">
                        <button class="btn-order" onclick="orderNow()">立即訂購</button>
                        <button class="btn-secondary" onclick="contactCreator()">聯繫討論</button>
                    </div>
                    
                    <div class="guarantee-info">
                        <strong>🛡️ 服務保障</strong><br>
                        30天不滿意退款<br>
                        一年免費技術支援
                    </div>
                </div>

                <!-- 創作者資訊 -->
                <div class="content-card creator-card">
                    <div class="creator-avatar-sidebar">李</div>
                    <div class="creator-name">李建宏</div>
                    <div class="creator-title">資深全端工程師</div>
                    
                    <div class="creator-stats-grid">
                        <div class="stat-item">
                            <div class="stat-number">4.9</div>
                            <div class="stat-label">平均評分</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">156</div>
                            <div class="stat-label">完成專案</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">8年</div>
                            <div class="stat-label">開發經驗</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">客戶滿意度</div>
                        </div>
                    </div>
                    
                    <button class="btn-secondary" onclick="viewCreatorProfile()" style="width: 100%;">查看完整檔案</button>
                </div>

                <!-- 相關服務推薦 */
                <div class="content-card">
                    <h3 class="card-title">🔗 相關服務</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="padding: 1rem; border: 1px solid var(--color-border); border-radius: 8px; cursor: pointer;" onclick="viewRelatedService('ecommerce')">
                            <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">電商網站開發</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">完整購物車功能</p>
                            <div style="color: var(--color-accent); font-weight: 700;">NT$ 65,000</div>
                        </div>
                        <div style="padding: 1rem; border: 1px solid var(--color-border); border-radius: 8px; cursor: pointer;" onclick="viewRelatedService('webapp')">
                            <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">網頁應用程式</h4>
                            <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 0.5rem;">客製化系統開發</p>
                            <div style="color: var(--color-accent); font-weight: 700;">NT$ 80,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- 圖片模態框 -->
    <div id="imageModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img id="modalImage" src="" alt="放大檢視">
        </div>
    </div>

    <script>
        // 圖片資料
        const images = [
            {
                src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect fill='%23f8f9fa' width='800' height='400'/><rect fill='%232C5F5F' x='0' y='0' width='800' height='80'/><rect fill='%23ffffff' x='50' y='20' width='120' height='40' rx='4'/><text x='110' y='45' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23F06F5A' x='650' y='25' width='100' height='30' rx='15'/><text x='700' y='45' text-anchor='middle' font-size='14' fill='white'>聯絡我們</text><rect fill='%23ffffff' x='50' y='120' width='700' height='200' rx='8'/><rect fill='%23B8E6E6' x='70' y='140' width='300' height='160' rx='4'/><text x='220' y='230' text-anchor='middle' font-size='18' fill='%232C5F5F' font-weight='bold'>主要內容區域</text><rect fill='%23F5E6A3' x='400' y='140' width='320' height='75' rx='4'/><text x='560' y='185' text-anchor='middle' font-size='14' fill='%232C5F5F'>功能介紹</text><rect fill='%23C8E6C9' x='400' y='225' width='320' height='75' rx='4'/><text x='560' y='270' text-anchor='middle' font-size='14' fill='%232C5F5F'>服務特色</text><rect fill='%232C5F5F' x='0' y='350' width='800' height='50'/><text x='400' y='380' text-anchor='middle' font-size='14' fill='white'>© 2024 企業官網. All rights reserved.</text></svg>",
                title: "企業官網首頁",
                desc: "現代化設計，完整響應式佈局"
            },
            {
                src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect fill='%23f8f9fa' width='800' height='400'/><rect fill='%232C5F5F' x='0' y='0' width='800' height='80'/><rect fill='%23ffffff' x='50' y='20' width='120' height='40' rx='4'/><text x='110' y='45' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23F5E6A3' x='50' y='120' width='350' height='200' rx='8'/><text x='225' y='230' text-anchor='middle' font-size='18' fill='%232C5F5F' font-weight='bold'>關於我們</text><rect fill='%23C8E6C9' x='420' y='120' width='330' height='95' rx='4'/><text x='585' y='175' text-anchor='middle' font-size='14' fill='%232C5F5F'>公司介紹</text><rect fill='%23B8E6E6' x='420' y='225' width='330' height='95' rx='4'/><text x='585' y='280' text-anchor='middle' font-size='14' fill='%232C5F5F'>團隊成員</text><rect fill='%232C5F5F' x='0' y='350' width='800' height='50'/><text x='400' y='380' text-anchor='middle' font-size='14' fill='white'>© 2024 企業官網. All rights reserved.</text></svg>",
                title: "關於我們頁面",
                desc: "公司介紹與團隊展示"
            },
            {
                src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect fill='%23f8f9fa' width='800' height='400'/><rect fill='%232C5F5F' x='0' y='0' width='800' height='80'/><rect fill='%23ffffff' x='50' y='20' width='120' height='40' rx='4'/><text x='110' y='45' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23B8E6E6' x='50' y='120' width='220' height='120' rx='8'/><text x='160' y='185' text-anchor='middle' font-size='14' fill='%232C5F5F' font-weight='bold'>服務項目 1</text><rect fill='%23F5E6A3' x='290' y='120' width='220' height='120' rx='8'/><text x='400' y='185' text-anchor='middle' font-size='14' fill='%232C5F5F' font-weight='bold'>服務項目 2</text><rect fill='%23C8E6C9' x='530' y='120' width='220' height='120' rx='8'/><text x='640' y='185' text-anchor='middle' font-size='14' fill='%232C5F5F' font-weight='bold'>服務項目 3</text><rect fill='%23B8E6E6' x='50' y='260' width='220' height='60' rx='4'/><text x='160' y='295' text-anchor='middle' font-size='12' fill='%232C5F5F'>詳細說明</text><rect fill='%23F5E6A3' x='290' y='260' width='220' height='60' rx='4'/><text x='400' y='295' text-anchor='middle' font-size='12' fill='%232C5F5F'>詳細說明</text><rect fill='%23C8E6C9' x='530' y='260' width='220' height='60' rx='4'/><text x='640' y='295' text-anchor='middle' font-size='12' fill='%232C5F5F'>詳細說明</text><rect fill='%232C5F5F' x='0' y='350' width='800' height='50'/><text x='400' y='380' text-anchor='middle' font-size='14' fill='white'>© 2024 企業官網. All rights reserved.</text></svg>",
                title: "服務項目頁面",
                desc: "完整服務展示與說明"
            },
            {
                src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'><rect fill='%23f8f9fa' width='800' height='400'/><rect fill='%232C5F5F' x='0' y='0' width='800' height='80'/><rect fill='%23ffffff' x='50' y='20' width='120' height='40' rx='4'/><text x='110' y='45' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23F06F5A' x='50' y='120' width='700' height='150' rx='8'/><text x='400' y='205' text-anchor='middle' font-size='20' fill='white' font-weight='bold'>聯絡我們</text><rect fill='%23B8E6E6' x='50' y='290' width='340' height='30' rx='4'/><text x='220' y='310' text-anchor='middle' font-size='12' fill='%232C5F5F'>聯絡表單</text><rect fill='%23F5E6A3' x='410' y='290' width='340' height='30' rx='4'/><text x='580' y='310' text-anchor='middle' font-size='12' fill='%232C5F5F'>地圖與地址</text><rect fill='%232C5F5F' x='0' y='350' width='800' height='50'/><text x='400' y='380' text-anchor='middle' font-size='14' fill='white'>© 2024 企業官網. All rights reserved.</text></svg>",
                title: "聯絡我們頁面",
                desc: "聯絡表單與地圖整合"
            },
            {
                src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'><rect fill='%23f8f9fa' width='400' height='600'/><rect fill='%232C5F5F' x='0' y='0' width='400' height='60'/><rect fill='%23ffffff' x='20' y='15' width='80' height='30' rx='4'/><text x='60' y='35' text-anchor='middle' font-size='12' fill='%232C5F5F' font-weight='bold'>LOGO</text><rect fill='%23B8E6E6' x='20' y='80' width='360' height='200' rx='8'/><text x='200' y='190' text-anchor='middle' font-size='16' fill='%232C5F5F' font-weight='bold'>手機版首頁</text><rect fill='%23F5E6A3' x='20' y='300' width='360' height='80' rx='4'/><text x='200' y='345' text-anchor='middle' font-size='12' fill='%232C5F5F'>功能介紹</text><rect fill='%23C8E6C9' x='20' y='400' width='360' height='80' rx='4'/><text x='200' y='445' text-anchor='middle' font-size='12' fill='%232C5F5F'>服務特色</text><rect fill='%23F06F5A' x='150' y='500' width='100' height='40' rx='20'/><text x='200' y='525' text-anchor='middle' font-size='12' fill='white'>聯絡我們</text><rect fill='%232C5F5F' x='0' y='560' width='400' height='40'/><text x='200' y='585' text-anchor='middle' font-size='10' fill='white'>© 2024 企業官網</text></svg>",
                title: "手機版響應式設計",
                desc: "完美適配行動裝置"
            }
        ];

        // 切換主要圖片
        function changeMainImage(index) {
            const mainImg = document.getElementById('main-img');
            const thumbnails = document.querySelectorAll('.thumbnail');
            const overlay = document.querySelector('.screenshot-overlay .screenshot-info');
            
            // 更新主圖
            mainImg.src = images[index].src;
            
            // 更新覆蓋資訊
            overlay.querySelector('.screenshot-title').textContent = images[index].title;
            overlay.querySelector('.screenshot-desc').textContent = images[index].desc;
            
            // 更新縮圖狀態
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
        }

        // 開啟圖片模態框
        function openModal(imgId) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const img = document.getElementById(imgId);
            
            modal.style.display = 'block';
            modalImg.src = img.src;
        }

        // 關閉模態框
        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
        }

        // 立即訂購
        function orderNow() {
            alert('即將前往訂購頁面，開始您的網站開發專案！');
            // 實際應用中會跳轉到訂購流程
        }

        // 聯繫創作者
        function contactCreator() {
            alert('即將開啟與李建宏的聊天視窗，討論專案細節');
            // 實際應用中會開啟聊天功能
        }

        // 查看創作者檔案
        function viewCreatorProfile() {
            alert('即將前往李建宏的完整創作者檔案頁面');
            // 實際應用中會跳轉到創作者頁面
        }

        // 查看相關服務
        function viewRelatedService(serviceType) {
            const serviceNames = {
                'ecommerce': '電商網站開發',
                'webapp': '網頁應用程式'
            };
            alert(`即將前往「${serviceNames[serviceType]}」服務頁面`);
            // 實際應用中會跳轉到其他服務頁面
        }

        // 導航功能
        function goHome() {
            window.location.href = '/';
        }

        // 事件監聽器
        document.addEventListener('DOMContentLoaded', function() {
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

            // 點擊模態框外部關閉
            window.addEventListener('click', function(event) {
                const modal = document.getElementById('imageModal');
                if (event.target === modal) {
                    closeModal();
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
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b497a490084a16',t:'MTc1NDU0NjgzMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
