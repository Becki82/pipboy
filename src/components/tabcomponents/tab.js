import React, { useState} from "react";
import './tabs.css';
import FirstTab from "./firsttab";
import SecondTab from "./secondtab";



 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Sign In
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Sign Up
        </li>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;