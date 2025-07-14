import { tabsData } from '@/staticData/elements/elements';
import { useState } from 'react';

const Tabs = () => {
  const [activeState, setActiveState] = useState(0);

  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h3 className="subtitle">TABS</h3>
      </div>

      <div className="tab">
        <ul className="nav nav-tabs overflow-hidden" role="tablist">
          {tabsData.map((tab, index) => (
            <li className="nav-item" key={index} role="presentation">
              <button
                onClick={() => setActiveState(index)}
                className={`nav-link ${index === activeState ? 'active' : ''}`}
                data-bs-toggle="tab"
                data-bs-target={`#tab-${index}`}
                type="button"
                role="tab"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabsData.map((tab, index) => (
            <div
              className={`tab-pane fade ${
                index === activeState ? 'show active' : ''
              }`}
              id={`tab-${index}`}
              role="tabpanel"
              key={index}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
