import React, { useState } from "react";
import "./index.css";
import { menuItems } from "../../data/SideBarItems";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/Logo.svg" alt="" srcset="" />
              <h2 >AttendEase</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href={text}
            >
              <img className="menu-item-icon" src={icon} alt="" srcset="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Utkarsh</p>
              <p className="nav-footer-user-position">Student</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default SideNavBar;
