import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CommissionForm.css';

const CommissionForm = ({ type, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟提交到Google Sheets
    setTimeout(() => {
      alert(t(`form.${type}.success`));
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="commission-form-section">
      <div className="form-overlay" onClick={onClose}></div>
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">
            {t(`form.${type}.title`)}
          </h2>
          <button className="form-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="form-tabs">
          <button 
            className={`form-tab ${type === 'commission' ? 'active' : ''}`}
            onClick={() => window.location.reload()}
          >
            委托需求
          </button>
          <button 
            className={`form-tab ${type === 'creator' ? 'active' : ''}`}
            onClick={() => window.location.reload()}
          >
            创作者申请
          </button>
        </div>

        <form onSubmit={handleSubmit} className="commission-form">
          <div className="form-grid">
            <div className="form-group">
              <label>{t(`form.${type}.fields.name`)}</label>
              <input 
                type="text" 
                name="name" 
                required 
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{t(`form.${type}.fields.email`)}</label>
              <input 
                type="email" 
                name="email" 
                required 
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>{t(`form.${type}.fields.contact`)}</label>
              <input 
                type="text" 
                name="contact" 
                onChange={handleChange}
                className="form-input"
                placeholder="LINE ID 或手机号码"
              />
            </div>

            {type === 'commission' && (
              <>
                <div className="form-group full-width">
                  <label>{t('form.commission.fields.services')}</label>
                  <select name="services" onChange={handleChange} className="form-select">
                    <option value="">请选择服务类型</option>
                    <option value="character-design">角色设计</option>
                    <option value="live2d-basic">Live2D建模(基本)</option>
                    <option value="live2d-advanced">Live2D建模(进阶)</option>
                    <option value="3d-basic">3D建模(基本)</option>
                    <option value="3d-premium">3D建模(高端)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t('form.commission.fields.budget')}</label>
                  <select name="budget" onChange={handleChange} className="form-select">
                    <option value="">请选择预算范围</option>
                    <option value="500-1000">$500-1,000</option>
                    <option value="1000-3000">$1,000-3,000</option>
                    <option value="3000-5000">$3,000-5,000</option>
                    <option value="5000+">$5,000以上</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t('form.commission.fields.deadline')}</label>
                  <input 
                    type="date" 
                    name="deadline" 
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </>
            )}

            <div className="form-group full-width">
              <label>
                {type === 'commission' 
                  ? t('form.commission.fields.description')
                  : t('form.creator.fields.experience')
                }
              </label>
              <textarea 
                name="description"
                rows="4"
                onChange={handleChange}
                className="form-textarea"
                placeholder={type === 'commission' 
                  ? "请详细描述您的需求..."
                  : "请描述您的相关经验和技能..."
                }
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              取消
            </button>
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : t(`form.${type}.submit`)}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommissionForm;