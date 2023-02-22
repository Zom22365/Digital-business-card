import React from "react";
import Avatar from "../avatar.png";
const Card = (props) => {
  return (
    <div className="card-item">
      <img src={Avatar} alt="" />
      <div className={`card-info ${props.theme}`}>
        <h3 className="intro name">Laura Smith</h3>
        <div className="intro task">Frontand Developer</div>
        <div className="intro website">laurasmith.website</div>
        <div className="block-btn">
          <button className="btn email">email</button>
          <button
            className="btn linkedIn"
            style={{ display: ` ${props.displayBtn}` }}
          >
            LinkedIn
          </button>
        </div>
        <div>
          <h3 className="about">About</h3>I am a frontend developer with a
          particular interest in making things simple and automating daily
          tasks. I try to keep up with security and best practices, and am
          always looking for new things to learn.
        </div>
        <div>
          <h3 className="interests">Interests</h3>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </div>
      </div>
      <div className="footer">
        <ul className="list-social">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </ul>
      </div>
    </div>
  );
};
export default Card;
