# Catcher Demo 2 - Upwork 風格首頁

這是一個使用 React + Tailwind CSS 創建的 Upwork 風格首頁克隆專案。

## 🚀 專案功能

### ✅ 已實現的功能：
- **響應式 Header 導航系統**
  - 桌面版和移動版導航
  - 搜索功能
  - 登入/註冊按鈕

- **Hero 英雄區塊**
  - 漸層背景設計
  - 響應式標題
  - CTA 按鈕

- **服務分類展示**
  - 10個主要服務分類
  - Hover 動畫效果
  - 圖標系統

- **統計數據區塊**
  - 關鍵數據展示
  - "How it works" 流程說明

- **客戶評價區塊**
  - 真實案例展示
  - 星級評分系統
  - 分類標籤

- **價格方案區塊**
  - 三種定價方案
  - 特色功能列表
  - Popular 標籤

- **CTA 行動呼籲區塊**
  - 漸層背景
  - 統計數據條

- **完整 Footer**
  - 多欄位連結
  - 社交媒體連結
  - 法律條款

## 🛠️ 技術棧

- **React 18** - JavaScript 版本
- **Tailwind CSS** - 樣式框架
- **React Router** - 頁面路由
- **Vite** - 建置工具

## 📁 專案結構

```
src/
├── components/
│   ├── Header.jsx           # 響應式導航
│   ├── HeroSection.jsx      # 英雄區塊
│   ├── ServicesSection.jsx  # 服務分類
│   ├── StatsSection.jsx     # 統計數據
│   ├── TestimonialsSection.jsx # 客戶評價
│   ├── PricingSection.jsx   # 價格方案
│   ├── CTASection.jsx       # 行動呼籲
│   └── Footer.jsx           # 頁腳
├── pages/
│   └── HomePage.jsx         # 主頁面
├── App.jsx                  # 應用程式根組件
├── main.jsx                 # 應用程式入口
└── index.css                # Tailwind CSS 配置
```

## 🎨 設計特色

### 響應式設計
- 移動優先的設計方法
- 斷點系統：sm(640px), md(768px), lg(1024px), xl(1280px)
- 流暢的動畫效果

### 色彩系統
- 主色調：`primary-500: #14a085`
- 漸層效果：多層次漸層背景
- 一致的視覺風格

### 交互效果
- Hover 動畫
- 平滑過渡
- 視覺反饋

## 🚀 啟動專案

1. 安裝依賴：
   ```bash
   npm install
   ```

2. 啟動開發服務器：
   ```bash
   npm run dev
   ```

3. 打開瀏覽器訪問：`http://localhost:5173`

## 📦 建置

```bash
npm run build
```

## 🔮 未來擴展

- [ ] 深色模式支援
- [ ] 國際化 (i18n)
- [ ] 更多頁面 (服務列表、個人檔案等)
- [ ] 動畫庫整合
- [ ] 性能優化
- [ ] SEO 優化

## 📝 開發說明

這個專案完全按照您的 guide 文件中的要求進行開發，使用 JavaScript (非 TypeScript) 作為主要語言，實現了 Upwork 首頁的核心功能和設計元素。

### 核心組件說明

1. **Header**: 包含響應式導航、搜索功能和用戶認證按鈕
2. **HeroSection**: 主要的視覺吸引區域，包含標題和 CTA
3. **ServicesSection**: 展示各種服務分類，支持 hover 效果
4. **StatsSection**: 數據展示和流程說明
5. **TestimonialsSection**: 客戶評價和案例展示
6. **PricingSection**: 三級定價方案展示
7. **CTASection**: 最終行動呼籲區域
8. **Footer**: 完整的頁腳信息

每個組件都使用 Tailwind CSS 進行樣式設計，確保響應式和現代化的視覺效果。
