import { portfolio } from "@/staticData/home/home";
import { useTranslation } from "@/hooks/useTranslation";
import { FaExternalLinkAlt, FaGithub, FaShieldAlt, FaGlobe, FaGraduationCap } from "react-icons/fa";

const Portfolio = () => {
  const { t } = useTranslation();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <FaGlobe size={32} />;
      case 'Security':
        return <FaShieldAlt size={32} />;
      case 'Education':
        return <FaGraduationCap size={32} />;
      default:
        return <FaGlobe size={32} />;
    }
  };

  return (
    <div className="portfolio" data-title="Portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span className="bottom-border">{t('sections.portfolio')}</span>
          </h2>
        </div>

        <div className="portfolio-inner">
          <div className="row">
            {portfolio.map((item) => (
              <div key={item.id} className="col-lg-6 portfolio-item">
                <div className="item">
                  <div className="item-label">
                    <p>{t(item.title)}</p>
                  </div>
                  
                  <div className="project-card">
                    <div className="project-header">
                      <div className="project-icon">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div className="project-category">{item.category}</div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{t(item.title)}</h3>
                      <p className="project-description">{t(item.description)}</p>
                      
                      <div className="project-tech">
                        {item.technologies.slice(0, 7).map((tech, index) => (
                          <span key={index} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                      
                      <div className="project-buttons">
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <FaExternalLinkAlt size={14} />
                          Visit Website
                        </a>
                        
                        {item.github !== "#" && (
                          <a 
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                          >
                            <FaGithub size={14} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-item {
          margin-bottom: 40px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 580px; /* Aumenté la altura */
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(215, 157, 75, 0.4);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .project-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 35px 25px;
          text-align: center;
          position: relative;
          min-height: 140px; /* Aumenté la altura del header */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-icon {
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 12px;
          font-size: 28px; /* Iconos más grandes */
        }

        .project-category {
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .project-content {
          padding: 30px 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.4rem; /* Título más grande */
          font-weight: 700;
          color: #d79d4b;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .project-description {
          color: #bbb;
          font-size: 0.95rem; /* Texto más grande */
          line-height: 1.6;
          margin-bottom: 25px;
          flex: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5; /* Más líneas de descripción */
          -webkit-box-orient: vertical;
        }

        .project-tech {
          margin-bottom: 25px;
        }

        .tech-badge {
          display: inline-block;
          background: rgba(215, 157, 75, 0.15);
          color: #d79d4b;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          margin-right: 8px;
          margin-bottom: 8px;
          border: 1px solid rgba(215, 157, 75, 0.3);
          font-weight: 500;
        }

        .project-buttons {
          display: flex;
          gap: 15px;
          margin-top: auto;
        }

        .btn-primary, .btn-secondary {
          flex: 1;
          padding: 12px 18px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: #d79d4b;
          color: #fff;
        }

        .btn-primary:hover {
          background: #c08a3a;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(215, 157, 75, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #d79d4b;
          border: 2px solid #d79d4b;
        }

        .btn-secondary:hover {
          background: #d79d4b;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(215, 157, 75, 0.3);
        }

        @media (max-width: 768px) {
          .project-card {
            height: auto;
            min-height: 500px;
          }
          
          .project-content {
            padding: 25px 20px;
          }
          
          .project-title {
            font-size: 1.3rem;
          }
          
          .project-description {
            -webkit-line-clamp: 6;
            font-size: 0.9rem;
          }
          
          .project-buttons {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
