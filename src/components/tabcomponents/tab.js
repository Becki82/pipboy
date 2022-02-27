import React, { useState} from "react";
import styled from "styled-components";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabstyle = styled.div `
      width: 30%;
      height: auto;
      min-height: 50%;
      background: ${({theme}) => theme.tabBackground};
      margin: 3.5rem auto 1.5rem;
      padding: 2rem 1rem;
      color: ${({theme}) => theme.formColor};
      border-radius: 2rem;
      border: 2px solid #0d0d0d;
      @media (max-width: 769px) {
        padding: 2rem 0;
      }
      
      ul.nav {
        width: 60%;
        margin: 0 auto 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #003300;
        border-radius: 2rem;
        padding-left: 0px;
        @media (max-width: 768px) {
          width: 90%;
        }
      }
      ul.nav li {
        width: 50%;
        padding: 1rem;
        list-style: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.7s;
        border-bottom-left-radius: 2rem;
        border-top-left-radius: 2rem;
      }
      ul.nav li:nth-child(2) {
        border-radius: 0;
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
      }
      ul.nav li:hover {
        background: ${({theme}) => theme.hoverColor};
      }
      ul.nav li.active {
        background: ${({theme}) => theme.activeTabBackground};
      }
`;
 
  
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <Tabstyle>
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
    </Tabstyle>
  );
};
export default Tabs;