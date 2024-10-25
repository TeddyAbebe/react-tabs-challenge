import React from "react";
import { useQuery } from "react-query";
import { fetchTabContent } from "../services/apiService";

const TabContent = ({ tabId }) => {
  const { data, error, isLoading } = useQuery(
    ["tabContent", tabId],
    fetchTabContent,
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className="error-message">Error getting contents.</p>;
  }

  return (
    <div className="tab-content">
      <h1>Title {tabId}</h1>
      <p>{data}</p>
    </div>
  );
};

export default TabContent;
