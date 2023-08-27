
import SideNavBar from "../../../components/SideNavBar/index"
import {ProfileCard , AttendenceCard} from "./ProfileCard";
import "./style.css";
import React from 'react';


export default function Profile() {
  return (
    <div className="home_wrapper">
      <SideNavBar />
      <div className="home_content">
        <div className="home_content_header">
          <h1>You can Check Your Attendence Here</h1>
        </div>
       <ProfileCard />
        <AttendenceCard />
       
      </div>
    </div>
  )
}

