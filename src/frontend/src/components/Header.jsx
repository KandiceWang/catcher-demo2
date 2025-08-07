import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

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

  const goHome = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={goHome}>Catcher</div>
        <ul className="nav-links">
          <li><Link to="/talents">尋找創作者</Link></li>
          <li><Link to="/jobs">服務搜尋</Link></li>
          <li><a href="#become-creator">成為創作者</a></li>
          <li><a href="#about">關於我們</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="#login" className="btn-secondary">登入</a>
          <a href="#signup" className="btn-primary">免費註冊</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
