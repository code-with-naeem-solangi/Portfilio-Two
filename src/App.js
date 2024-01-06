import { CopyrightTwoTone, DiffTwoTone, Html5TwoTone, MenuOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
 
      {/* First section */}
      
      <div className="mainContainer">
           {/* mobile view */}
   <div>
   <MenuOutlined onClick={showDrawer} className="mobileview"/>
      <Drawer title="Mobile View" placement="right" onClose={onClose} open={open}>
      <div className="center">
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Courses</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Techdegree</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Teams</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Community</p>
            </div>
          </div>
          <div className="right">
            <div>
              <p  className="pdng">Sing in</p>
            </div>
            <div>
              <p className="pdng">Register</p>
            </div>
            </div>
      </Drawer>
   </div>
        <div className="navbar">
          <div className="left">
            <h2>MY PORTFLIO</h2>
          </div>

          <div className="center">
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Courses</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Techdegree</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Teams</p>
            </div>
            <div className="pdng">
              <p style={{ cursor: "pointer" }}>Community</p>
            </div>
          </div>
          <div className="right">
            <div>
              <p className="privatepng">Sing in</p>
            </div>
            <div>
              <button>Register Now</button>
            </div>
          </div>
        </div>
        <div className="secndContainr">
          <div className="text">
            <p>-----THE NEW ERA HAS BEEN STARTED</p>
            <h1 className="color">
              MY NAME IS MUHAMMAD NAEEM SOLANGI I AM FRONTEND DEVELOPER
            </h1>
            <p>
              Hello Every One The Most Wellcome In My Portfilio Website I Am
              Front End Developer My Projects Uploaded In Vercel & Github I Am
              Currently Study In Mern Stack Development.
            </p>
            <br />
            <div className="flex">
              <div>
                <button>
                  <a
                    href="https://github.com/code-with-naeem-solangi"
                    target="_blank"
                  >
                    My Github Account
                  </a>
                </button>
              </div>
              <div>
                <button>
                  <a
                    href="https://vercel.com/m-naeem-solangis-projects"
                    target="_blank"
                  >
                    My Vercel Account
                  </a>
                </button>
              </div>
            </div>
          </div>

          
            <img src="./InShot_20240105_153235213.png" className="myimg" />
          
        </div>
      </div>
      {/* Second section */}
      <div className="seconmaincontaine">
        <h1>I Am Complete This Programing Languages</h1>
        <div className="cardcontainer">
          <div className="card">
            <Html5TwoTone className="iconsize" />
            <div className="width">
              <h1>HTML</h1>
              <p>I Am Complete HTML & My Experince Is 1 Year</p>
            </div>
          </div>
          <div className="card">
            <CopyrightTwoTone  className="iconsize" />
            <div className="width">
              <h1>CSS</h1>
              <p>I Am Complete CSS & My Experince Is 1 Year</p>
            </div>
          </div>
          <div className="card">
            <DiffTwoTone  className="iconsize" />
            <div className="width">
              <h1>JAVASCRIPT</h1>
              <p>I Am Complete JAVASCRIPT & My Experince Is 8 Months</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
