import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 中文翻译资源
const zhResources = {
  translation: {
    // 导航
    nav: {
      home: '首頁',
      services: '服務',
      portfolio: '作品',
      about: '關於',
      commission: '我要委託',
      language: '語言'
    },
    // 主页
    home: {
      hero: {
        title: '專業VTuber製作',
        subtitle: '一站式服務',
        description: '從角色設計到直播上線，打造專屬於您的虛擬形象',
        cta_commission: '立即委託',
        cta_creator: '成為創作者'
      },
      services: {
        title: '核心服務',
        subtitle: '專業VTuber製作服務',
        items: {
          'character-design': {
            name: '角色設計',
            description: '專業角色設計，包含三視圖',
            price: '$375-1,000'
          },
          'live2d-basic': {
            name: 'Live2D建模(基本)',
            description: '基礎Live2D建模與動作',
            price: '$600-1,800'
          },
          'live2d-advanced': {
            name: 'Live2D建模(進階)',
            description: '進階Live2D建模與特效',
            price: '$1,725-4,600'
          },
          '3d-basic': {
            name: '3D建模(基本)',
            description: '基礎3D虛擬形象建模',
            price: '$1,150-3,450'
          },
          '3d-premium': {
            name: '3D建模(高端)',
            description: '高端3D建模與渲染',
            price: '$5,750-16,100'
          },
          'illustration': {
            name: '插圖封面',
            description: '精美插圖與封面設計',
            price: '$65-520'
          },
          'video-production': {
            name: '影片製作',
            description: '專業影片製作與後製',
            price: '$250-1,200'
          },
          'obs-setup': {
            name: 'OBS設定',
            description: '直播軟體設定與調試',
            price: '$100-250'
          },
          'planning': {
            name: '企劃發想',
            description: 'VTuber企劃與定位規劃',
            price: '$200-800'
          }
        }
      },
      process: {
        title: '合作流程',
        subtitle: '簡單四步驟，輕鬆完成您的VTuber夢想',
        steps: {
          1: {
            title: '提交需求',
            description: '填寫詳細需求表單，告訴我們您的想法'
          },
          2: {
            title: '專業媒合',
            description: '我們會為您匹配最適合的專業創作者'
          },
          3: {
            title: '開始製作',
            description: '創作者開始製作，全程透明化進度追蹤'
          },
          4: {
            title: '完成交付',
            description: '獲得滿意成果，享受專業售後服務'
          }
        }
      },
      school: {
        title: 'VT學堂',
        subtitle: '專業課程，助您成為VTuber',
        cta: '查看更多課程'
      },
      contact: {
        title: '關於我們',
        subtitle: '專業VTuber製作團隊，為您實現虛擬夢想',
        email: '聯繫郵箱',
        social: '追蹤我們'
      }
    },
    // 表单
    form: {
      commission: {
        title: '委託需求',
        fields: {
          name: '姓名/稱呼',
          email: '電子郵箱',
          contact: '聯繫方式',
          services: '需要的服務',
          budget: '預算範圍',
          deadline: '期望完成時間',
          description: '詳細需求描述',
          references: '參考資料'
        },
        submit: '提交委託',
        success: '提交成功！我們會在1-2個工作天內聯繫您。'
      },
      creator: {
        title: '創作者申請',
        fields: {
          name: '創作者名稱',
          email: '電子郵箱',
          contact: '聯繫方式',
          skills: '專業技能',
          portfolio: '作品集連結',
          experience: '相關經驗',
          pricing: '報價範圍'
        },
        submit: '提交申請',
        success: '申請提交成功！我們會在1-3個工作天內回覆審核結果。'
      }
    }
  }
};

// 英文翻译资源
const enResources = {
  translation: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      commission: 'Commission',
      language: 'Language'
    },
    // Homepage
    home: {
      hero: {
        title: 'Professional VTuber',
        subtitle: 'Creation Services',
        description: 'From character design to live streaming, create your unique virtual identity',
        cta_commission: 'Start Commission',
        cta_creator: 'Become Creator'
      },
      services: {
        title: 'Core Services',
        subtitle: 'Professional VTuber Creation Services',
        items: {
          'character-design': {
            name: 'Character Design',
            description: 'Professional character design with orthographic views',
            price: '$375-1,000'
          },
          'live2d-basic': {
            name: 'Live2D (Basic)',
            description: 'Basic Live2D modeling and animations',
            price: '$600-1,800'
          },
          'live2d-advanced': {
            name: 'Live2D (Advanced)',
            description: 'Advanced Live2D modeling with effects',
            price: '$1,725-4,600'
          },
          '3d-basic': {
            name: '3D Modeling (Basic)',
            description: 'Basic 3D virtual avatar modeling',
            price: '$1,150-3,450'
          },
          '3d-premium': {
            name: '3D Modeling (Premium)',
            description: 'High-end 3D modeling and rendering',
            price: '$5,750-16,100'
          },
          'illustration': {
            name: 'Illustration',
            description: 'Beautiful illustrations and cover designs',
            price: '$65-520'
          },
          'video-production': {
            name: 'Video Production',
            description: 'Professional video production and editing',
            price: '$250-1,200'
          },
          'obs-setup': {
            name: 'OBS Setup',
            description: 'Streaming software setup and optimization',
            price: '$100-250'
          },
          'planning': {
            name: 'Planning',
            description: 'VTuber concept and positioning planning',
            price: '$200-800'
          }
        }
      },
      process: {
        title: 'Work Process',
        subtitle: '4 simple steps to realize your VTuber dream',
        steps: {
          1: {
            title: 'Submit Requirements',
            description: 'Fill out the detailed requirement form and share your ideas'
          },
          2: {
            title: 'Professional Matching',
            description: 'We match you with the most suitable professional creators'
          },
          3: {
            title: 'Start Creation',
            description: 'Creators begin work with transparent progress tracking'
          },
          4: {
            title: 'Delivery',
            description: 'Receive satisfactory results with professional after-sales service'
          }
        }
      },
      school: {
        title: 'VT Academy',
        subtitle: 'Professional courses to help you become a VTuber',
        cta: 'View More Courses'
      },
      contact: {
        title: 'About Us',
        subtitle: 'Professional VTuber creation team, making virtual dreams come true',
        email: 'Contact Email',
        social: 'Follow Us'
      }
    },
    // Forms
    form: {
      commission: {
        title: 'Commission Request',
        fields: {
          name: 'Name/Title',
          email: 'Email Address',
          contact: 'Contact Information',
          services: 'Required Services',
          budget: 'Budget Range',
          deadline: 'Expected Completion',
          description: 'Detailed Requirements',
          references: 'Reference Materials'
        },
        submit: 'Submit Commission',
        success: 'Submission successful! We will contact you within 1-2 business days.'
      },
      creator: {
        title: 'Creator Application',
        fields: {
          name: 'Creator Name',
          email: 'Email Address',
          contact: 'Contact Information',
          skills: 'Professional Skills',
          portfolio: 'Portfolio Link',
          experience: 'Relevant Experience',
          pricing: 'Pricing Range'
        },
        submit: 'Submit Application',
        success: 'Application submitted successfully! We will respond within 1-3 business days.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: zhResources,
      en: enResources,
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;