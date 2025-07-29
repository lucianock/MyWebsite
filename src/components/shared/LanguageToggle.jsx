import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { trackLanguageChange } from '@/components/shared/AnalyticsEvents';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(ThemeContext);
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    // Trackear el cambio de idioma
    trackLanguageChange(language, newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid var(--primary-color)',
        borderRadius: '25px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: 'var(--primary-color)',
        minWidth: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        fontFamily: 'inherit'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'var(--primary-color)';
        e.target.style.color = '#fff';
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 20px rgba(215, 157, 75, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(0, 0, 0, 0.8)';
        e.target.style.color = 'var(--primary-color)';
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      }}
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;