import React, { useState } from "react";
import "../css/Login.scss"
import sideImage from "../images/league-of-legends-hero-splash.jpeg"
import logo from "../images/logo.png";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedInChecked, setStaySignedInChecked] = useState(false);
  const [userInfoEntered, setUserInfoEntered] = useState(false);

  const handleLogin = (e) => {
    console.log(e.target.value);
    if (e.target.name === "username") {
      setUserName(e.target.value);
      if (e.target.value === "") {
        setUserInfoEntered(false);
      } else if (password !== "") {
        setUserInfoEntered(true);
      }
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
      if (e.target.value === "") {
        setUserInfoEntered(false);
      } else if (userName !== "") {
        setUserInfoEntered(true);
      }
    }
  };
  return (
      <div className="login-grid">
        <div className="login-grid-column-1">
          <img src={logo} alt="" className="logo" />
          <h4>Sign in</h4>
          <form>
            <div className="input-box">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="summoner"
                value={userName}
                onChange={(e) => handleLogin(e)}
              />
              <label>USERNAME</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => handleLogin(e)}
              />

              <label>PASSWORD</label>
            </div>
          </form>

          <div className="social-media">
            <a href="#void" className="btn btn-facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="btn btn-google">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="btn btn-apple">
              <i className="fab fa-apple"></i>
            </a>
          </div>

          <div className="signed-in">
            <label>
              {/* read checked status to dynamically change label font color */}
              <input
                type="checkbox"
                checked={staySignedInChecked}
                onChange={() => setStaySignedInChecked((state) => !state)}
              />
              <span></span>
              <p
                className="text"
                style={
                  staySignedInChecked ? { color: "#333" } : { color: "grey" }
                }
              >
                Stay signed in
              </p>
            </label>
          </div>

          <div className="login-button">
            <a href="#" className={userInfoEntered ? "" : "login-disabled"}>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="login-issues">
            <a href="#">
              <p>CAN'T SIGN IN</p>
            </a>
            <a href="#">
              <p>CREATE ACCOUNT</p>
            </a>
          </div>

          <p className="version">V40.0.1</p>
          <div className="question-tooltip">
            <div className="tooltip-content">
              <i className="fas fa-question-circle tooltip"></i>
              <span className="tooltiptext">
                You don't have to select your region anymore! How the heck do
                they know what region you want???
              </span>
            </div>
          </div>
        </div>

        <div className="login-grid-column-2">
          <div className="actions">
            <div className="actions-atag dash">
              <a href="#">-</a>
            </div>
            <div className="actions-atag">
              <a href="#">
                <i className="fas fa-question question"></i>
              </a>
            </div>
            <div className="actions-close">
              <a href="#">
                <i className="fas fa-times"></i>
              </a>
            </div>
          </div>

          <img src={sideImage} alt="league of legends" />
        </div>
      </div>
  );
};

export default Login;
