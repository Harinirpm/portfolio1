import React from "react";
import "./Skills.css";
import Skill from "../assets/skillIcon.png";
import Mui from "../assets/mui.jpg";
function Skills() {
  return (
    <>
      <div className="skills">
        <div className="star-bg"></div>
        <h1>
          Skills{" "}
          <img
            src={Skill}
            alt="Skill"
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "5px",
            }}
          />
        </h1>

        <div className="languages">
          <div className="icons moving-right">
            <div className="tools">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25oYJlp2wL_GAT2FOKBaOlCt1fbn56-hXDg&s"
                alt="c-lang"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="js-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://i.pinimg.com/originals/bd/e9/75/bde975558b82fd6c2cb9c8e2a15339fc.png"
                alt="spring-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://assets.codegrip.tech/wp-content/uploads/2021/09/28165502/Html_Logo.png"
                alt="html-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://pngimg.com/uploads/mysql/small/mysql_PNG23.png"
                alt="sql-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png"
                alt="vs-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className="icons moving-left">
          <div className="tools">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                alt="git-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://static.macupdate.com/products/11662/l/eclipse-ide-logo.png?v=1617819161"
                alt="eclipse-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />

            </div>
            <div className="tools">
              <img
                src={Mui}
                alt="mui-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px" }}
              />
            </div>
            
            <div className="tools">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
                alt="css-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s"
                alt="react-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
            <div className="tools">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuknVQSvP-rCaQ51XKQ3EQ2Ub5UODgWCwoQ&s"
                alt="java-logo"
                className="lang-icon"
                style={{ height: "50px", width: "100px", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

