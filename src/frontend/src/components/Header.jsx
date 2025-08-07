import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`catcher-navbar fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="catcher-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F06F5A] to-[#FA73AE] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold catcher-text-gradient hidden sm:block">
              Catcher
            </span>
          </Link>

          {/* 桌面導航 */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/talents" className="catcher-nav-link">
              尋找創作者
            </Link>
            <Link to="/jobs" className="catcher-nav-link">
              服務搜尋
            </Link>
            <Link to="/about" className="catcher-nav-link">
              關於我們
            </Link>
            <Link to="/help" className="catcher-nav-link">
              幫助中心
            </Link>
          </nav>

          {/* 右側按鈕 */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="catcher-nav-link">
              登入
            </Link>
            <Link to="/register" className="catcher-btn catcher-btn-primary text-sm px-6 py-2">
              免費註冊
            </Link>
          </div>

          {/* 移動端菜單按鈕 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* 移動端菜單 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              <Link to="/find-talent" className="block catcher-nav-link">
                尋找人才
              </Link>
              <Link to="/find-work" className="block catcher-nav-link">
                尋找工作
              </Link>
              <Link to="/browse-projects" className="block catcher-nav-link">
                瀏覽專案
              </Link>
              <Link to="/about" className="block catcher-nav-link">
                關於我們
              </Link>
              <Link to="/help" className="block catcher-nav-link">
                幫助中心
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link to="/login" className="block catcher-nav-link">
                  登入
                </Link>
                <Link to="/register" className="block catcher-btn catcher-btn-primary text-center">
                  免費註冊
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
