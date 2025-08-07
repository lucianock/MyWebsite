import {
  allBlogs,
  blogComments,
  blogSocialIcons,
} from '@/staticData/blog/blog';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useThemeContext from '@/hooks/useThemeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { FaCalendarAlt, FaClock, FaTag, FaShareAlt } from 'react-icons/fa';

const SingleBlogDetails = ({ slug }) => {
  const [singlePost, setSinglePost] = useState({});
  const { rtl } = useThemeContext();
  const { t, language } = useTranslation();

  useEffect(() => {
    setSinglePost(allBlogs?.find((blog) => blog?.slug == slug));
  }, [slug]);

  // Agregar estilos CSS para el contenido del blog
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .blog-content h2 {
        font-size: 1.8rem !important;
        font-weight: 600 !important;
        margin-top: 40px !important;
        margin-bottom: 20px !important;
        color: #ffffff !important;
        line-height: 1.3 !important;
      }
      
      .blog-content h3 {
        font-size: 1.4rem !important;
        font-weight: 600 !important;
        margin-top: 30px !important;
        margin-bottom: 15px !important;
        color: #ffffff !important;
        line-height: 1.4 !important;
      }
      
      .blog-content p {
        margin-bottom: 20px !important;
        line-height: 1.8 !important;
        color: #e0e0e0 !important;
        font-size: 1rem !important;
      }
      
      .blog-content ul {
        margin-bottom: 20px !important;
        padding-left: 20px !important;
        line-height: 1.8 !important;
      }
      
      .blog-content ol {
        margin-bottom: 20px !important;
        padding-left: 20px !important;
        line-height: 1.8 !important;
      }
      
      .blog-content li {
        margin-bottom: 8px !important;
        line-height: 1.6 !important;
        color: #e0e0e0 !important;
      }
      
      .blog-content pre {
        background: #2d3748 !important;
        padding: 20px !important;
        border-radius: 8px !important;
        overflow: auto !important;
        margin-bottom: 20px !important;
        border: 1px solid #4a5568 !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
        color: #e2e8f0 !important;
      }
      
      .blog-content code {
        background: #2d3748 !important;
        padding: 2px 6px !important;
        border-radius: 4px !important;
        font-size: 0.9em !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        color: #fbb6ce !important;
      }
      
      .blog-content a {
        color: #d79d4b !important;
        text-decoration: none !important;
        transition: color 0.3s ease !important;
      }
      
      .blog-content a:hover {
        text-decoration: underline !important;
        color: #f4a261 !important;
      }
      
      .blog-content strong {
        font-weight: 600 !important;
        color: #ffffff !important;
      }
      
      .blog-content em {
        font-style: italic !important;
        color: #cbd5e0 !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Get translated content based on language
  const getTranslatedContent = () => {
    if (language === 'en') {
      return t('blog.awsEc2GratisContent') || singlePost.content;
    }
    return singlePost.content;
  };

  // If no singlePost is found, show a loading or error state
  if (!singlePost || Object.keys(singlePost).length === 0) {
    return (
      <div className="blog-details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center py-5">
                <h3>Artículo no encontrado</h3>
                <p>El artículo solicitado no pudo ser encontrado.</p>
                <Link href="/blog" style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #d79d4b, #f4a261)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Volver al Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header del artículo */}
            <div className="blog-header" style={{ marginBottom: '40px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px', 
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e0' }}>
                  <FaCalendarAlt size={14} />
                  <span>{singlePost.date}</span>
                </div>
                {singlePost.readTime && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e0' }}>
                    <FaClock size={14} />
                    <span>{singlePost.readTime}</span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e0' }}>
                  <FaTag size={14} />
                  <span>{t(singlePost.tags)}</span>
                </div>
              </div>
              
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>
                {t(singlePost.title)}
              </h1>
              
              <p style={{
                fontSize: '1.1rem',
                color: '#e0e0e0',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                {t(singlePost.description)}
              </p>
            </div>



            {/* Contenido del artículo */}
            <div className="blog-content">
              <div 
                dangerouslySetInnerHTML={{ __html: getTranslatedContent() }}
                className="blog-content-inner"
              />
            </div>

            {/* Tags */}
            {singlePost.allTags && (
              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #4a5568' }}>
                <h4 style={{ marginBottom: '15px', fontSize: '1.1rem', fontWeight: '600', color: '#ffffff' }}>
                  Tags:
                </h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {singlePost.allTags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'linear-gradient(135deg, #d79d4b, #f4a261)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Botones de acción */}
            <div style={{ 
              marginTop: '40px', 
              paddingTop: '30px', 
              borderTop: '1px solid #4a5568',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}>
              <Link href="/blog" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #d79d4b, #f4a261)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                {t('blog.backToBlog')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
