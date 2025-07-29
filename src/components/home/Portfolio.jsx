import { portfolio } from "@/staticData/home/home";
import { useTranslation } from "@/hooks/useTranslation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const { t } = useTranslation();

  // Función para generar colores de fondo basados en la categoría
  const getCategoryColors = (category) => {
    const colors = {
      'Web Development': {
        primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        secondary: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))'
      },
      'Security': {
        primary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        secondary: 'linear-gradient(45deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.05))'
      },
      'Education': {
        primary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        secondary: 'linear-gradient(45deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.05))'
      }
    };
    return colors[category] || colors['Web Development'];
  };

  return (
    <div className="portfolio" data-title="Portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>{t('sections.portfolio')}</span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-group">
          <div className="row">
            {portfolio.map((item) => {
              const colors = getCategoryColors(item.category);
              return (
                <div key={item.id} className="col-lg-6 mb-4">
                  <div className="portfolio-item" style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 15px 40px rgba(215, 157, 75, 0.15)';
                    e.target.style.borderColor = 'rgba(215, 157, 75, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}>
                    
                    {/* Project Image */}
                    <div className="portfolio-image" style={{
                      height: '200px',
                      background: colors.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      flexShrink: 0
                    }}>
                      {/* Gradient Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: colors.secondary,
                        zIndex: 1
                      }}></div>
                      
                      {/* Project Icon */}
                      <div style={{
                        fontSize: '3rem',
                        color: 'rgba(255,255,255,0.9)',
                        textAlign: 'center',
                        zIndex: 2,
                        position: 'relative'
                      }}>
                        {item.category === 'Web Development' && '🌐'}
                        {item.category === 'Security' && '🔒'}
                        {item.category === 'Education' && '📚'}
                      </div>

                      {/* Category Badge */}
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
                        {item.category}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="portfolio-info" style={{
                      padding: '20px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <h3 className="project-title" style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: 'var(--primary-color)',
                        lineHeight: '1.3',
                        minHeight: '30px'
                      }}>
                        {t(item.title)}
                      </h3>
                      
                      <p className="project-description" style={{
                        fontSize: '0.9rem',
                        color: '#aaa',
                        marginBottom: '15px',
                        lineHeight: '1.5',
                        flex: 1,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}>
                        {t(item.description)}
                      </p>

                      {/* Technologies */}
                      <div className="technologies" style={{
                        marginBottom: '15px',
                        flexShrink: 0
                      }}>
                        {item.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} style={{
                            background: 'rgba(215, 157, 75, 0.15)',
                            color: 'var(--primary-color)',
                            padding: '4px 8px',
                            borderRadius: '10px',
                            fontSize: '0.7rem',
                            marginRight: '6px',
                            marginBottom: '6px',
                            display: 'inline-block',
                            fontWeight: '500',
                            border: '1px solid rgba(215, 157, 75, 0.2)'
                          }}>
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span style={{
                            background: 'rgba(215, 157, 75, 0.1)',
                            color: 'var(--primary-color)',
                            padding: '4px 8px',
                            borderRadius: '10px',
                            fontSize: '0.7rem',
                            fontWeight: '500'
                          }}>
                            +{item.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="portfolio-actions" style={{
                        display: 'flex',
                        gap: '10px',
                        flexShrink: 0
                      }}>
                        <button style={{
                          background: 'var(--primary-color)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '8px 16px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          flex: 1,
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 6px 20px rgba(215, 157, 75, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}>
                          <FaExternalLinkAlt size={12} />
                          View
                        </button>
                        <button style={{
                          background: 'transparent',
                          color: 'var(--primary-color)',
                          border: '1px solid var(--primary-color)',
                          borderRadius: '20px',
                          padding: '8px 16px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          flex: 1,
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'var(--primary-color)';
                          e.target.style.color = '#fff';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = 'var(--primary-color)';
                          e.target.style.transform = 'translateY(0)';
                        }}>
                          <FaGithub size={12} />
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
