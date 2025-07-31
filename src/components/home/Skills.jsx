import { useEffect, useState } from "react";
import useThemeContext from "@/hooks/useThemeContext";
import { useTranslation } from "@/hooks/useTranslation";

const Skills = () => {
  const { mode } = useThemeContext();
  const { t } = useTranslation();

  // Tecnologías organizadas por categorías
  const technologies = [
    // Backend & Frameworks
    {
      name: "Laravel",
      color: "#FF2D20",
      icon: "🔥",
      category: "Framework"
    },
    /* {
      name: "Laravel Breeze",
      color: "#FF2D20",
      icon: "💨",
      category: "Framework"
    }, */
    {
      name: "PHP 8",
      color: "#777BB4",
      icon: "🐘",
      category: "Backend"
    },
    {
      name: "Python",
      color: "#3776AB",
      icon: "🐍",
      category: "Backend"
    },
    
    // Frontend & Styling
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      icon: "🎨",
      category: "Frontend"
    },
    {
      name: "JavaScript (ES6+)",
      color: "#F7DF1E",
      icon: "⚡",
      category: "Frontend"
    },
    
    // Databases
    {
      name: "MySQL",
      color: "#4479A1",
      icon: "🗄️",
      category: "Database"
    },
    {
      name: "PostgreSQL",
      color: "#336791",
      icon: "🐘",
      category: "Database"
    },
    {
      name: "SQL Server",
      color: "#CC2927",
      icon: "💾",
      category: "Database"
    },
    
    // APIs & Testing
    {
      name: "API REST",
      color: "#FF6B6B",
      icon: "🔌",
      category: "API"
    },
    {
      name: "PHPUnit",
      color: "#4A5568",
      icon: "🧪",
      category: "Testing"
    },
    
    // Development Principles
    {
      name: "POO",
      color: "#805AD5",
      icon: "🏗️",
      category: "Principles"
    },
    {
      name: "MVC",
      color: "#38A169",
      icon: "📐",
      category: "Architecture"
    },
    {
      name: "SOLID",
      color: "#E53E3E",
      icon: "💎",
      category: "Principles"
    },
    
    // Version Control & DevOps
    {
      name: "Git",
      color: "#F05032",
      icon: "📝",
      category: "Version Control"
    },
    {
      name: "Ubuntu",
      color: "#E95420",
      icon: "🐧",
      category: "OS"
    },
    {
      name: "AWS",
      color: "#FF9900",
      icon: "☁️",
      category: "Cloud"
    },
    
    // Agile & Management
    {
      name: "Scrum",
      color: "#4A90E2",
      icon: "🔄",
      category: "Methodology"
    }
  ];

  return (
    <div className="skill" data-title="Skills" id="skill">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span className="bottom-border">{t('sections.mySkills')}</span>
          </h2>
        </div>

        {/* Sección de tecnologías */}
        <div className="technologies-section">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-card" style={{
                    background: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                    border: `2px solid ${tech.color}20`,
                    borderRadius: '20px',
                    padding: '25px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-8px)';
                    e.target.style.boxShadow = `0 15px 35px ${tech.color}25`;
                    e.target.style.borderColor = `${tech.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = `${tech.color}20`;
                  }}>
                    
                    {/* Icono de la tecnología */}
                    <div className="tech-icon" style={{
                      fontSize: '2.5rem',
                      marginBottom: '15px',
                      display: 'block'
                    }}>
                      {tech.icon}
                    </div>

                    {/* Nombre de la tecnología */}
                    <h3 className="tech-name" style={{
                      color: tech.color,
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {tech.name}
                    </h3>

                    {/* Categoría */}
                    <p className="tech-category" style={{
                      color: mode === 'dark' ? '#888' : '#666',
                      fontSize: '0.8rem',
                      marginBottom: '0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontWeight: '500'
                    }}>
                      {tech.category}
                    </p>

                    {/* Efecto de brillo */}
                    <div className="tech-glow" style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: `radial-gradient(circle, ${tech.color}10 0%, transparent 70%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none'
                    }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .technologies-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-top: 40px;
          }

          @media (max-width: 768px) {
            .technologies-grid {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
              gap: 20px;
            }
          }

          @media (max-width: 480px) {
            .technologies-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Skills;
