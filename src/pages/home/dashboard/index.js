import SideNavBar from "../../../components/SideNavBar/index"
import "./style.css";
import React from 'react';


export default function Dashboard() {
  return (
    <div className="home_wrapper">
      <SideNavBar />
      <div className="home_content">
        <div className="home_content_header">
          <h1 >Welcome to AttendEase</h1>
          <img className="img" src = "https://media.giphy.com/media/kvazz2A4Pa2LHDMzwZ/giphy.gif"  alt="" />
        </div>
        
        <div className="home_content_body">
        <form>
        <input type="text" placeholder="Registration Number"/>
        <input type="submit" value="Search"/>
        </form>
        <button className="markButton">Mark Attendence</button>
       
        </div>
      </div>
    </div>
  );
}
