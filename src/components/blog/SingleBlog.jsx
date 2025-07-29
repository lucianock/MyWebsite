import { routes } from "@/config/route";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "../ui/SecondaryButton";
import { useTranslation } from "@/hooks/useTranslation";

const SingleBlog = ({ slug, image, title, tags, date, description }) => {
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

  return (
    <article className="blog-post-item">
      <div className="post-media">
        <Link href={`${routes?.blog}/${slug}`}>
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

            {/* Tag Badge */}
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
          </div>
        </Link>
      </div>
      <div className="post-details">
        <p className="date">
          {date}
          <span> - </span> 
          <Link href="#" className="tags">
            {t(tags)}
          </Link>
        </p>
        <h2 className="blog-title">
          <Link href={`${routes?.blog}/${slug}`}>{t(title)}</Link>
        </h2>
        <p className="desc">{t(description)}</p>
        <SecondaryButton text="Continue Read" url={`${routes?.blog}/${slug}`} />
      </div>
    </article>
  );
};

export default SingleBlog;
