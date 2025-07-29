import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GoogleAnalytics = () => {
  const router = useRouter();
  const GA_TRACKING_ID = 'G-GYCKZLS5ZB';

  useEffect(() => {
    // Cargar Google Analytics
    const loadGA = () => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // Crear script de Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);

        // Configurar gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', GA_TRACKING_ID);
      }
    };

    loadGA();
  }, []);

  useEffect(() => {
    // Trackear cambios de página
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default GoogleAnalytics;