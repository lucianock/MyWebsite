import { portfolio } from "@/staticData/home/home";
import { useTranslation } from "@/hooks/useTranslation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const { t } = useTranslation();

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
                        {item.category === 'Web Development' && '🌐'}
                        {item.category === 'Security' && '🔒'}
                        {item.category === 'Education' && '📚'}
                      </div>
                      <div className="project-category">{item.category}</div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{t(item.title)}</h3>
                      <p className="project-description">{t(item.description)}</p>
                      
                      <div className="project-tech">
                        {item.technologies.slice(0, 4).map((tech, index) => (
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
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(215, 157, 75, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 30px 25px;
          text-align: center;
          position: relative;
        }

        .project-icon {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .project-category {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #d79d4b;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .project-description {
          color: #aaa;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .project-tech {
          margin-bottom: 20px;
        }

        .tech-badge {
          display: inline-block;
          background: rgba(215, 157, 75, 0.1);
          color: #d79d4b;
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.75rem;
          margin-right: 8px;
          margin-bottom: 8px;
          border: 1px solid rgba(215, 157, 75, 0.2);
        }

        .project-buttons {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .btn-primary, .btn-secondary {
          flex: 1;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
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
        }

        .btn-secondary {
          background: transparent;
          color: #d79d4b;
          border: 1px solid #d79d4b;
        }

        .btn-secondary:hover {
          background: #d79d4b;
          color: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 20px;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
