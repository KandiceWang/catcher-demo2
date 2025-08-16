import { useTranslation } from 'react-i18next';
import './VTSchoolSection.css';

const VTSchoolSection = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      title: 'VTuber入门基础课程',
      description: '从零开始学习VTuber制作',
      price: '¥299',
      duration: '2小时',
      level: '初级',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Live2D进阶制作',
      description: '深入学习Live2D建模技巧',
      price: '¥599',
      duration: '4小时',
      level: '中级',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: '直播运营策略',
      description: '学习VTuber直播运营技巧',
      price: '¥399',
      duration: '3小时',
      level: '中级',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="vtschool" className="vtschool-section">
      <div className="section-container">
        <div className="vtschool-header fade-in">
          <h2 className="section-title">
            {t('home.school.title')}
          </h2>
          <p className="section-subtitle">
            {t('home.school.subtitle')}
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="course-card card-shadow fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level">{course.level}</div>
              </div>
              
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <span className="course-duration">📚 {course.duration}</span>
                  <span className="course-price">{course.price}</span>
                </div>
                
                <button className="btn-primary course-cta">
                  立即学习
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="vtschool-cta fade-in">
          <button className="btn-secondary">
            {t('home.school.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VTSchoolSection;