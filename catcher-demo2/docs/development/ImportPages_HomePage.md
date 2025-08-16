<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catcher - 專業創作者媒合平台</title>
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

        /* 主要內容區域 */
        .main-content {
            margin-top: 80px;
        }

        /* 推薦服務輪播 */
        .banner-section {
            position: relative;
            height: 400px;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .banner-slider {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .banner-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .banner-slide.active {
            opacity: 1;
        }

        .banner-content {
            text-align: center;
            color: white;
            background: rgba(0, 0, 0, 0.5);
            padding: 2rem;
            border-radius: 16px;
            backdrop-filter: blur(10px);
        }

        .banner-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        .banner-description {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }

        /* 輪播指示器 */
        .banner-indicators {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
        }

        .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .indicator.active {
            background: white;
            transform: scale(1.2);
        }

        /* 搜尋區塊 */
        .search-section {
            padding: 4rem 2rem;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .search-title {
            font-size: 3rem;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        .search-subtitle {
            font-size: 1.25rem;
            color: var(--color-text-secondary);
            margin-bottom: 3rem;
        }

        .search-container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 8px;
            border: 1px solid var(--color-border);
            box-shadow: 0 8px 32px var(--color-shadow);
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            gap: 8px;
        }

        .search-input {
            flex: 1;
            border: none;
            padding: 16px 20px;
            border-radius: 12px;
            font-size: 1rem;
            outline: none;
            background: transparent;
        }

        .search-btn {
            background: var(--gradient-warm);
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .search-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(240, 111, 90, 0.4);
        }

        /* 服務類型區塊 */
        .services-section {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 1rem;
            text-align: center;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: var(--color-text-secondary);
            text-align: center;
            margin-bottom: 3rem;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .service-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            border: 1px solid var(--color-border);
            box-shadow: 0 4px 20px var(--color-shadow);
            transition: all 0.3s ease;
            text-align: center;
            cursor: pointer;
        }

        .service-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 32px rgba(44, 95, 95, 0.15);
        }

        .service-card:nth-child(3n+1) {
            background: var(--color-card-blue);
        }

        .service-card:nth-child(3n+2) {
            background: var(--color-card-yellow);
        }

        .service-card:nth-child(3n+3) {
            background: var(--color-card-mint);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .service-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 0.5rem;
        }

        .service-description {
            color: var(--color-text-secondary);
            font-size: 0.9rem;
        }

        /* 信賴指標區塊 */
        .trust-section {
            background: rgba(255, 255, 255, 0.8);
            padding: 4rem 2rem;
            margin: 4rem 0;
        }

        .trust-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .trust-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-primary);
            margin-bottom: 3rem;
        }

        .trust-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .trust-item {
            padding: 1rem;
        }

        .trust-number {
            font-size: 3rem;
            font-weight: 800;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
        }

        .trust-label {
            font-size: 1.1rem;
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        /* 響應式設計 */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .search-title {
                font-size: 2rem;
            }

            .banner-title {
                font-size: 1.8rem;
            }

            .search-container {
                flex-direction: column;
                gap: 12px;
            }

            .search-input {
                width: 100%;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .search-section, .services-section {
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .services-grid {
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
        <!-- 推薦服務輪播 -->
        <section class="banner-section">
            <div class="banner-slider">
                <div class="banner-slide active" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22><rect fill=%22%23B8E6E6%22 width=%221200%22 height=%22400%22/><text x=%22600%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22%232C5F5F%22>網頁設計服務</text></svg>');">
                    <div class="banner-content">
                        <h2 class="banner-title">專業網頁設計</h2>
                        <p class="banner-description">打造獨特的品牌形象，提升您的線上影響力</p>
                        <a href="#web-design" class="btn-primary">立即查看</a>
                    </div>
                </div>
                <div class="banner-slide" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22><rect fill=%22%23F5E6A3%22 width=%221200%22 height=%22400%22/><text x=%22600%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22%232C5F5F%22>平面設計服務</text></svg>');">
                    <div class="banner-content">
                        <h2 class="banner-title">創意平面設計</h2>
                        <p class="banner-description">從Logo到海報，為您的品牌注入創意靈魂</p>
                        <a href="#graphic-design" class="btn-primary">立即查看</a>
                    </div>
                </div>
                <div class="banner-slide" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22><rect fill=%22%23C8E6C9%22 width=%221200%22 height=%22400%22/><text x=%22600%22 y=%22200%22 text-anchor=%22middle%22 font-size=%2248%22 fill=%22%232C5F5F%22>影音製作服務</text></svg>');">
                    <div class="banner-content">
                        <h2 class="banner-title">專業影音製作</h2>
                        <p class="banner-description">用動態影像說故事，傳達您的品牌價值</p>
                        <a href="#video-production" class="btn-primary">立即查看</a>
                    </div>
                </div>
            </div>
            <div class="banner-indicators">
                <div class="indicator active" onclick="goToSlide(0)"></div>
                <div class="indicator" onclick="goToSlide(1)"></div>
                <div class="indicator" onclick="goToSlide(2)"></div>
            </div>
        </section>

        <!-- 搜尋區塊 -->
        <section class="search-section">
            <h1 class="search-title">尋找最適合的創作者和專業服務</h1>
            <p class="search-subtitle">連接優秀的專業人才，實現您的專案夢想</p>
            
            <div class="search-container">
                <input type="text" class="search-input" placeholder="搜尋服務（例如：網頁設計、文案撰寫、翻譯…）" />
                <button class="search-btn" onclick="performSearch()">搜尋</button>
            </div>
        </section>

        <!-- 服務類型 -->
        <section class="services-section">
            <h2 class="section-title">服務類型</h2>
            <p class="section-subtitle">探索各種專業服務類別</p>
            
            <div class="services-grid">
                <div class="service-card" onclick="goToService('graphic-design')">
                    <div class="service-icon">🎨</div>
                    <h3 class="service-title">平面設計</h3>
                    <p class="service-description">Logo設計、海報製作、品牌識別</p>
                </div>
                <div class="service-card" onclick="goToService('web-design')">
                    <div class="service-icon">💻</div>
                    <h3 class="service-title">網頁設計</h3>
                    <p class="service-description">響應式網站、UI/UX設計</p>
                </div>
                <div class="service-card" onclick="goToService('development')">
                    <div class="service-icon">⚡</div>
                    <h3 class="service-title">程式開發</h3>
                    <p class="service-description">網站開發、APP製作、系統建置</p>
                </div>
                <div class="service-card" onclick="goToService('marketing')">
                    <div class="service-icon">📈</div>
                    <h3 class="service-title">行銷企劃</h3>
                    <p class="service-description">數位行銷、社群經營、廣告投放</p>
                </div>
                <div class="service-card" onclick="goToService('copywriting')">
                    <div class="service-icon">✍️</div>
                    <h3 class="service-title">文案撰寫</h3>
                    <p class="service-description">廣告文案、內容創作、SEO文章</p>
                </div>
                <div class="service-card" onclick="goToService('video-production')">
                    <div class="service-icon">🎬</div>
                    <h3 class="service-title">影音製作</h3>
                    <p class="service-description">企業形象影片、動畫製作</p>
                </div>
                <div class="service-card" onclick="goToService('translation')">
                    <div class="service-icon">🌐</div>
                    <h3 class="service-title">翻譯服務</h3>
                    <p class="service-description">多國語言翻譯、本地化服務</p>
                </div>
                <div class="service-card" onclick="goToService('video-editing')">
                    <div class="service-icon">🎞️</div>
                    <h3 class="service-title">影音剪輯</h3>
                    <p class="service-description">影片後製、特效製作、音效處理</p>
                </div>
                <div class="service-card" onclick="goToService('photography')">
                    <div class="service-icon">📸</div>
                    <h3 class="service-title">攝影服務</h3>
                    <p class="service-description">商業攝影、人像攝影、產品拍攝</p>
                </div>
            </div>
        </section>

        <!-- 平台信賴指標 -->
        <section class="trust-section">
            <div class="trust-container">
                <h2 class="trust-title">值得信賴的專業平台</h2>
                <div class="trust-stats">
                    <div class="trust-item">
                        <div class="trust-number">50,000+</div>
                        <div class="trust-label">專業創作者</div>
                    </div>
                    <div class="trust-item">
                        <div class="trust-number">100,000+</div>
                        <div class="trust-label">成功專案</div>
                    </div>
                    <div class="trust-item">
                        <div class="trust-number">98%</div>
                        <div class="trust-label">客戶滿意度</div>
                    </div>
                    <div class="trust-item">
                        <div class="trust-number">24/7</div>
                        <div class="trust-label">專業客服</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script>
        // 輪播功能
        let currentSlide = 0;
        const slides = document.querySelectorAll('.banner-slide');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = slides.length;

        function showSlide(index) {
            // 隱藏所有幻燈片
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // 顯示指定幻燈片
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }

        function goToSlide(index) {
            showSlide(index);
        }

        // 自動輪播
        setInterval(nextSlide, 5000);

        // 搜尋功能
        function performSearch() {
            const searchInput = document.querySelector('.search-input');
            const query = searchInput.value.trim();
            
            if (query) {
                alert(`搜尋「${query}」...\n\n將跳轉至服務列表頁面顯示搜尋結果。`);
                // 實際應用中會跳轉到服務列表頁面
                // window.location.href = `/services?search=${encodeURIComponent(query)}`;
            } else {
                alert('請輸入搜尋關鍵字');
            }
        }

        // 服務類型點擊
        function goToService(serviceType) {
            alert(`即將前往「${getServiceName(serviceType)}」服務頁面`);
            // 實際應用中會跳轉到對應服務頁面
            // window.location.href = `/services/${serviceType}`;
        }

        function getServiceName(serviceType) {
            const serviceNames = {
                'graphic-design': '平面設計',
                'web-design': '網頁設計',
                'development': '程式開發',
                'marketing': '行銷企劃',
                'copywriting': '文案撰寫',
                'video-production': '影音製作',
                'translation': '翻譯服務',
                'video-editing': '影音剪輯',
                'photography': '攝影服務'
            };
            return serviceNames[serviceType] || serviceType;
        }

        // 導航功能
        function goHome() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

        // 搜尋框 Enter 鍵支援
        document.querySelector('.search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // 信賴指標動畫
        function animateStats() {
            const trustNumbers = document.querySelectorAll('.trust-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalText = target.textContent;
                        const isPercentage = finalText.includes('%');
                        const isTime = finalText.includes('/');
                        
                        if (!isPercentage && !isTime) {
                            const numericValue = parseInt(finalText.replace(/[^\d]/g, ''));
                            if (numericValue > 0) {
                                animateNumber(target, 0, numericValue, finalText);
                            }
                        }
                    }
                });
            });
            
            trustNumbers.forEach(stat => observer.observe(stat));
        }

        function animateNumber(element, start, end, suffix) {
            const duration = 2000;
            const startTime = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);
                
                element.textContent = current.toLocaleString() + suffix.replace(/[\d,]+/g, '');
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        }

        // 頁面載入完成後執行
        document.addEventListener('DOMContentLoaded', function() {
            animateStats();
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96b4aa80b1c84a0f',t:'MTc1NDU0NzYwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
