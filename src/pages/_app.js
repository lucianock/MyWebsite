import BackToTop from '@/components/shared/BackToTop';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
//external libraries
import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/bootstrap.rtl.min.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-modern-drawer/dist/index.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';

// Template styles
import '../../public/assets/css/style.css';
import '../../public/assets/css/style-rtl.css';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Component {...pageProps} />
        <BackToTop />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
