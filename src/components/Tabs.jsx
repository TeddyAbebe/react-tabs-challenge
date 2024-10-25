import React, { useState } from "react";
import TabContent from "./TabContent";
import TabButton from "./TabButton";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {["Tab 1", "Tab 2", "Tab 3", "Tab 4"].map((tab, index) => (
          <TabButton
            key={index}
            tab={tab}
            isActive={activeTab === index + 1}
            onClick={() => setActiveTab(index + 1)}
          />
        ))}
      </div>

      <TabContent tabId={activeTab} />
    </div>
  );
};

export default Tabs;
