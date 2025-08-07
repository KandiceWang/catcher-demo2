import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [searchMode, setSearchMode] = useState('talent'); // 'talent' or 'work'

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get('search');
    
    if (searchQuery) {
      console.log(`Searching for ${searchMode}:`, searchQuery);
      // 這裡會導向搜索結果頁
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 台灣漸變背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F06F5A] via-[#FA73AE] to-[#73E0D4]"></div>
      
      {/* 動態背景圖案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full catcher-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-lg rotate-45" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-white rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-white rounded-lg rotate-12" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 catcher-container text-center text-white pt-20">
        {/* 主標語 */}
        <div className="catcher-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            連接台灣
            <br />
            <span className="bg-white text-transparent bg-clip-text">頂尖人才</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            在地化的專業平台，為台灣企業與自由工作者
            <br className="hidden md:block" />
            打造最佳媒合體驗
          </p>
        </div>

        {/* 雙模式切換 */}
        <div className="mb-8 catcher-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="inline-flex bg-white/20 backdrop-blur-md rounded-2xl p-2">
            <button
              onClick={() => setSearchMode('talent')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                searchMode === 'talent'
                  ? 'bg-white text-[#F06F5A] shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              尋找人才
            </button>
            <button
              onClick={() => setSearchMode('work')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                searchMode === 'work'
                  ? 'bg-white text-[#F06F5A] shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              尋找工作
            </button>
          </div>
        </div>

        {/* 在地化搜尋介面 */}
        <div className="max-w-4xl mx-auto mb-12 catcher-fade-in-up" style={{animationDelay: '0.4s'}}>
          <form onSubmit={handleSearch} className="catcher-search-container">
            <div className="flex items-center">
              <div className="flex-1">
                <input
                  type="text"
                  name="search"
                  placeholder={
                    searchMode === 'talent'
                      ? '搜尋專業技能，例如：網頁設計、翻譯、行銷...'
                      : '搜尋工作機會，例如：React 開發、UI 設計、文案撰寫...'
                  }
                  className="catcher-search-input"
                />
              </div>
              <button
                type="submit"
                className="catcher-btn catcher-btn-primary ml-4 px-8 py-4 text-lg"
              >
                {searchMode === 'talent' ? '找人才' : '找工作'}
              </button>
            </div>
          </form>
        </div>

        {/* 快捷按鈕 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 catcher-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Link to="/post-project" className="catcher-btn catcher-btn-ghost text-lg px-8 py-4">
            發布專案
          </Link>
          <Link to="/browse-talents" className="catcher-btn catcher-btn-ghost text-lg px-8 py-4">
            瀏覽人才庫
          </Link>
        </div>

        {/* 信賴指標 - 台灣市場數據 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto catcher-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
            <div className="text-sm md:text-base opacity-80">台灣專業人才</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
            <div className="text-sm md:text-base opacity-80">成功專案</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-sm md:text-base opacity-80">客戶滿意度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24小時</div>
            <div className="text-sm md:text-base opacity-80">平均回應時間</div>
          </div>
        </div>
      </div>

      {/* 向下滾動指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
