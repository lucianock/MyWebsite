import React, { useContext, useEffect } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { trackLanguageChange } from '@/components/shared/AnalyticsEvents';
import { FaGlobe, FaFlag } from 'react-icons/fa';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(ThemeContext);
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    // Trackear el cambio de idioma
    trackLanguageChange(language, newLanguage);
  };

  // Ajustes responsivos para evitar superposición con el menú hamburguesa
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .language-toggle {
          left: 50% !important;
          right: auto !important;
          top: 20px !important;
          transform: translateX(-50%) !important;
        }
      }
      @media (max-width: 480px) {
        .language-toggle {
          left: 50% !important;
          right: auto !important;
          top: 20px !important;
          bottom: auto !important;
          transform: translateX(-50%) !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      title={language === 'en' ? t('languageSwitch.toSpanish') : t('languageSwitch.toEnglish')}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, rgba(215, 157, 75, 0.9), rgba(215, 157, 75, 0.7))',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '25px',
        padding: '10px 18px',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: '#fff',
        minWidth: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 15px rgba(215, 157, 75, 0.3)',
        fontFamily: 'inherit',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'linear-gradient(135deg, rgba(215, 157, 75, 1), rgba(215, 157, 75, 0.8))';
        e.target.style.boxShadow = '0 6px 20px rgba(215, 157, 75, 0.5)';
        e.target.style.border = '2px solid rgba(255, 255, 255, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'linear-gradient(135deg, rgba(215, 157, 75, 0.9), rgba(215, 157, 75, 0.7))';
        e.target.style.boxShadow = '0 4px 15px rgba(215, 157, 75, 0.3)';
        e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
      }}
    >
      <FaGlobe size={12} style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
      {language === 'en' ? 'ES' : 'EN'}
      <FaFlag size={10} style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }} />
    </button>
  );
};

export default LanguageToggle;