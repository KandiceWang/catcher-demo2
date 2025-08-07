import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // 台灣本土化服務分類
  const services = [
    {
      title: '開發與資訊科技',
      icon: '💻',
      description: 'Web 開發、App 開發、系統整合',
      skills: ['React', 'Node.js', 'Python', 'iOS', 'Android'],
      color: 'from-[#F06F5A] to-[#FA73AE]'
    },
    {
      title: '設計與創意',
      icon: '🎨',
      description: 'UI/UX 設計、平面設計、品牌設計',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'Sketch'],
      color: 'from-[#84FACE] to-[#73E0D4]'
    },
    {
      title: '數位行銷',
      icon: '📱',
      description: 'SEO、社群行銷、廣告投放',
      skills: ['Google Ads', 'Facebook', 'Instagram', 'SEO'],
      color: 'from-[#FA73AE] to-[#F0EC92]'
    },
    {
      title: '內容與翻譯',
      icon: '✍️',
      description: '文案撰寫、多語翻譯、內容策劃',
      skills: ['中英翻譯', '日文', '韓文', '內容行銷'],
      color: 'from-[#73E0D4] to-[#84FACE]'
    },
    {
      title: '商業顧問',
      icon: '�',
      description: '策略顧問、財務規劃、營運優化',
      skills: ['商業分析', '市場研究', '財務規劃', '專案管理'],
      color: 'from-[#F06F5A] to-[#73E0D4]'
    },
    {
      title: '影音製作',
      icon: '🎬',
      description: '影片剪輯、動畫製作、音效設計',
      skills: ['After Effects', 'Premiere Pro', '3D 動畫', '配音'],
      color: 'from-[#84FACE] to-[#F06F5A]'
    },
    {
      title: '數據分析',
      icon: '�',
      description: '資料分析、商業智慧、機器學習',
      skills: ['Python', 'R', 'SQL', 'Power BI', 'Tableau'],
      color: 'from-[#FA73AE] to-[#84FACE]'
    },
    {
      title: '專案管理',
      icon: '⚙️',
      description: '敏捷開發、流程優化、團隊協作',
      skills: ['Scrum', 'Kanban', 'Jira', 'Trello', 'Slack'],
      color: 'from-[#F0EC92] to-[#73E0D4]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="catcher-container">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <h2 className="catcher-heading-section text-center">
            探索專業服務分類
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            從軟體開發到創意設計，從數位行銷到商業顧問
            <br className="hidden md:block" />
            在 Catcher 找到您需要的專業服務
          </p>
        </div>

        {/* 8x2 網格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="catcher-card-feature group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 服務圖標 */}
              <div className="catcher-service-icon" style={{ background: `linear-gradient(135deg, ${service.color.split(' ')[1]} 0%, ${service.color.split(' ')[3]} 100%)` }}>
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* 服務標題 */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#F06F5A] transition-colors">
                {service.title}
              </h3>

              {/* 服務描述 */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* 熱門技能標籤 */}
              <div className="flex flex-wrap gap-2">
                {service.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="catcher-tag text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部行動召喚 */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              找不到您需要的服務分類？
            </p>
            <Link 
              to="/browse-all-services" 
              className="catcher-btn catcher-btn-secondary mr-4"
            >
              瀏覽所有服務
            </Link>
            <Link 
              to="/post-project" 
              className="catcher-btn catcher-btn-primary"
            >
              發布您的專案需求
            </Link>
          </div>

          {/* 服務統計 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="catcher-stat-number">8+</div>
              <div className="catcher-stat-label">主要服務分類</div>
            </div>
            <div className="text-center">
              <div className="catcher-stat-number">500+</div>
              <div className="catcher-stat-label">專業技能標籤</div>
            </div>
            <div className="text-center">
              <div className="catcher-stat-number">100%</div>
              <div className="catcher-stat-label">台灣本土化</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
