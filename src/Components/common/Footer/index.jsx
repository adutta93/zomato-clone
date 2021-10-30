import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="heading">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
          alt="zomato"
        />
      </div>
      <div className="content">
        <div classNames="services">
          <h4>COMPANY</h4>
          <p>
            <a href="/">Who We Are</a>
          </p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">Careers</a>
          </p>
          <p>
            <a href="/">Report Fraud</a>
          </p>
          <p>
            <a href="/">Contact</a>
          </p>
          <p>
            <a href="/">Investor Relations</a>
          </p>
        </div>
        <div className="social-media">
          <h4>FOR FOODIES</h4>
          <p>
            <a href="/">Code of Conduct</a>
          </p>
          <p>
            <a href="/">Community</a>
          </p>
          <p>
            <a href="/">Blogger Help</a>
          </p>
          <p>
            <a href="/">Mobile Apps</a>
          </p>
        </div>
        <div cclassName="links">
          <h4>FOR RESTURANTS</h4>
          <p>
            <a href="/">Add restaurant</a>
          </p>
        </div>
        <div cclassName="links">
          <h4>FOR YOU</h4>
          <p>
            <a href="/">Privacy</a>
          </p>
          <p>
            <a href="/">Terms</a>
          </p>
          <p>
            <a href="/">Security</a>
          </p>
          <p>
            <a href="/">Sitemap</a>
          </p>
        </div>
        <div className="details">
          <h4 className="address">SOCIAL LINKS</h4>
          <div className="social-links">
            <div className="links">
              {" "}
              <AiFillLinkedin size="1.5rem" />
            </div>
            <div className="links">
              <AiFillGithub size="1.5rem" />
            </div>
            <div className="links">
              <AiFillTwitterCircle size="1.5rem" />
            </div>
          </div>
          <h4 className="mobile">Mobile</h4>
          <div className="download-link">
            <div>
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="app-link"
              />
            </div>

            <div>
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="app-link"
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <hr style={{ color: "grey" }} />
        &copy; 2021 ABCDEF Technologies Pvt. Ltd.
      </footer>
    </div>
  );
};

export default Footer;
