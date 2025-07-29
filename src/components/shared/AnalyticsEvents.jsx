// Función para trackear eventos personalizados
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Función para trackear descargas de CV
export const trackCVDownload = (language) => {
  trackEvent('cv_download', {
    language: language,
    cv_type: language === 'en' ? 'english' : 'spanish'
  });
};

// Función para trackear clicks en WhatsApp
export const trackWhatsAppClick = (section) => {
  trackEvent('whatsapp_click', {
    section: section,
    language: typeof window !== 'undefined' ? window.__NEXT_DATA__?.props?.pageProps?.language || 'en' : 'en'
  });
};

// Función para trackear cambios de idioma
export const trackLanguageChange = (fromLanguage, toLanguage) => {
  trackEvent('language_change', {
    from_language: fromLanguage,
    to_language: toLanguage
  });
};

// Función para trackear envío de formulario de contacto
export const trackContactForm = (formData) => {
  trackEvent('contact_form_submit', {
    has_name: !!formData.fullName,
    has_email: !!formData.email,
    has_subject: !!formData.subject,
    has_message: !!formData.message
  });
};

// Función para trackear scroll en secciones
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section: sectionName
  });
};