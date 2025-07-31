import { routes } from "@/config/route";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "../ui/SecondaryButton";
import { useTranslation } from "@/hooks/useTranslation";
import { FaMedium, FaExternalLinkAlt, FaClock } from "react-icons/fa";

const SingleBlog = ({ 
  slug, 
  image, 
  title, 
  tags, 
  date, 
  description, 
  type = "internal", 
  externalUrl, 
  readTime,
  featured = false 
}) => {
  const { t } = useTranslation();

  // Función para generar colores de fondo basados en las tags
  const getTagColors = (tag) => {
    const colors = {
      'blog.technology': {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        icon: '💻'
      },
      'blog.trash': {
        primary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        icon: '🔄'
      },
      'blog.development': {
        primary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        icon: '⚡'
      }
    };
    return colors[tag] || colors['blog.technology'];
  };

  const colors = getTagColors(tags);
  const isMediumPost = type === "medium";

  return (
    <article className="blog-post-item">
      <div className="post-media">
        <Link href={isMediumPost ? externalUrl : `${routes?.blog}/${slug}`} target={isMediumPost ? "_blank" : "_self"}>
          <div style={{
            width: '325px',
            height: '205px',
            background: colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}>
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(215, 157, 75, 0.1), rgba(215, 157, 75, 0.05))',
              zIndex: 1
            }}></div>
            
            {/* Blog Icon */}
            <div style={{
              fontSize: '3rem',
              color: 'rgba(255,255,255,0.9)',
              textAlign: 'center',
              zIndex: 2,
              position: 'relative'
            }}>
              {colors.icon}
            </div>

            {/* Medium Badge */}
            {isMediumPost && (
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                zIndex: 3,
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <FaMedium size={10} />
                Medium
              </div>
            )}

            {/* Featured Badge */}
            {featured && (
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                zIndex: 3,
                backdropFilter: 'blur(10px)'
              }}>
                Featured
              </div>
            )}

            {/* Tag Badge */}
            {!featured && (
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(215, 157, 75, 0.9)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                zIndex: 3,
                backdropFilter: 'blur(10px)'
              }}>
                {t(tags)}
              </div>
            )}
          </div>
        </Link>
      </div>
      <div className="post-details">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <p className="date">
            {date}
            <span> - </span> 
            <Link href="#" className="tags">
              {t(tags)}
            </Link>
          </p>
          {readTime && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              fontSize: '0.8rem',
              color: '#666'
            }}>
              <FaClock size={10} />
              {readTime}
            </div>
          )}
        </div>
        <h2 className="blog-title">
          <Link href={isMediumPost ? externalUrl : `${routes?.blog}/${slug}`} target={isMediumPost ? "_blank" : "_self"}>
            {t(title)}
          </Link>
        </h2>
        <p className="desc">{t(description)}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isMediumPost ? (
            <SecondaryButton 
              text={t('blog.readMore')} 
              url={externalUrl}
              external={true}
              icon={<FaMedium />}
            />
          ) : (
            <SecondaryButton text="Continue Read" url={`${routes?.blog}/${slug}`} />
          )}
          {isMediumPost && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              <FaExternalLinkAlt size={10} />
              {t('blog.externalLink')}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
