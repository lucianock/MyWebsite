import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const SingleBlog = ({
  slug,
  image,
  title,
  tags,
  date,
  description,
  readTime,
  featured = false,
  id
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <article className="blog-post-item">
      <div className="post-media">
        <Link href={`/blog/${slug}`}>
          <div className="post-image">
            {/* Solo mostrar imagen si no es placeholder */}
            {image?.thumbnail && image.thumbnail !== "/assets/images/placeholder.jpg" ? (
              <Image
                src={image.thumbnail}
                alt={t(title)}
                width={400}
                height={250}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            ) : (
              // Placeholder elegante cuando no hay imagen
              <div style={{
                width: "100%",
                height: "200px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold"
              }}>
                📝
              </div>
                         )}
             
             {/* Mostrar "Featured" solo en el primer artículo (más reciente) */}
             {id === 2 && (
               <div style={{
                 position: 'absolute',
                 top: '15px',
                 right: '15px',
                 background: 'linear-gradient(135deg, #d79d4b, #f4a261)',
                 color: 'white',
                 padding: '6px 14px',
                 borderRadius: '20px',
                 fontSize: '11px',
                 fontWeight: '600',
                 textTransform: 'uppercase',
                 letterSpacing: '0.5px',
                 boxShadow: '0 2px 8px rgba(215, 157, 75, 0.3)',
                 zIndex: 10
               }}>
                 Featured
               </div>
             )}

           </div>
        </Link>
      </div>
      <div className="post-details">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', fontSize: '12px' }}>
            <FaCalendarAlt size={10} />
            {date}
          </div>
          {readTime && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#666', fontSize: '12px' }}>
              <FaClock size={10} />
              {readTime}
            </div>
          )}
        </div>
        <h2 className="blog-title">
          <Link href={`/blog/${slug}`}>
            {t(title)}
          </Link>
        </h2>
        <p className="desc">{t(description)}</p>
        <div style={{ marginTop: '20px' }}>
          <Link 
            href={`/blog/${slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #d79d4b, #f4a261)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(215, 157, 75, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(215, 157, 75, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(215, 157, 75, 0.3)';
            }}
          >
            {t('blog.readArticle')}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
