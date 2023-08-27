import React from "react"
 function ProfileCard() {
    return (
        <div className="card">
        <div className="imgBx">
            <img src="https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.jpg?s=612x612&w=0&k=20&c=a_p44WlIih_t4Y5TjyKY2LFqhgadWsJl6-HsZFiHeVo=" alt="profile-img"/>
        </div>
        <div className="content">
          <div className="details">
              <h2>Utkarsh Tripathi<br></br><span>RA2011003010402</span></h2>
              <div className="data">
                  <h3>Batch<br></br><span>2024</span></h3>
                  <h3>Branch<br></br><span>CSE-CORE</span></h3>
                  <h3>Section<br></br><span>F1</span></h3>
              </div>
          </div>
        </div>
      </div>
    )
}

function AttendenceCard() {
    return (
        <div className="box">
            <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                    <h2>87<span>%</span></h2>
                </div>
            </div>
            <h2 className="text">Attendence</h2>
        </div>
    )
}




export {ProfileCard , AttendenceCard ,}
