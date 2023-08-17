import mainLogo from "./images/daily-citrus.jpeg";
import "./App.css";
import { useState } from "react";
import tachyons from "tachyons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";





function App() {
  const [dropdown, setDropdown] = useState(false);
  const toggleMenu = () => {
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("active");
    setDropdown(!dropdown);
  };
  return (
    <div className="main-container">
      <Navbar onToggle={toggleMenu} dropdown={dropdown} />
      <Content />
    </div>
  );
}

export default App;

export const Navbar = ({ dropdown, onToggle }) => {
  return (
    <div className="navbar">
      <img
        id="main-logo"
        src={mainLogo}
        alt="cool orange sun logo (trust me bro)"
      /> <h1 className="header">Citrus Sun: <span>your source for daily tech news</span></h1>
      {dropdown ? (
        <div className="dropdown">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#new">New</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}

      <div onClick={onToggle} id="hamburger" className="hamburger-container">
        <div></div>
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div id="home" className="content-container">
      {/* //!section 1 */}
      <section>
        {" "}
        <img
          id="main-img"
          src="https://img.freepik.com/free-vector/gradient-abstract-dynamic-shapes-background_23-2149121731.jpg"
          alt="mesmerizing abstract background"
        />
        <h1 className="article-title">The Bright Future of Web 3.0?</h1>
        <p>
          Lorem ipsum dolor, hit dsnkl sdnjf dfusjf sbajkda sit amet consectetur
          adipisicing elit. Officiis ut nobis saepe, alias cupiditate
          repellendus impedit. Ipsam quia quisquam eaque adipisci architecto
          temporibus dicta assumenda eos fuga ad, illum fugit.
        </p>
        <a
          class=" tachyon-btn f6 link dim ph3 pv2 mb2 dib white bg-near"
          href="#0"
        >
          Read More
        </a>
      </section>

      {/*//! section 2 */}
      <section id="new" className="section-2">
        <div>
          {/* 1 */}
          <h2>New</h2>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates?
          </p>
          <hr></hr>
          {/* 2 */}

          <h3>The Downside of AI Artistry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            reiciendis illum exercitationem libero eveniet.
          </p>
          <hr></hr>
          {/* 3 */}

          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            officiis non recusandae voluptates corporis!
          </p>
        </div>
      </section>
      {/*//! section 3 */}
      <section id="categories" className="section-3">
        {/* 1 */}
        <div className="section-3-flex">
          <div>
            <img
              src="https://as2.ftcdn.net/v2/jpg/03/66/95/39/1000_F_366953930_BYPZ7KZUyrdSEBHlis7WJ4q3P3uQSf9U.jpg"
              alt="new computer"
            />
          </div>

          <div className="section-3-text-container">
            <h1>01</h1>
            <h3>Reviving Retro PCs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corporis, culpa.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="section-3-flex">
          <div>
            <img
              src="https://www.corsair.com/wp-content/uploads/2022/09/K100_AIR_WIRELESS_03.jpg"
              alt="custom keyboard"
            />
          </div>
          <div className="section-3-text-container">
            <h1>02</h1>
            <h3>Top 10 Laptops of 2023</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        {/* 3 */}
        <div className="section-3-flex">
          <div>
            <img
              src="https://cdn.vox-cdn.com/thumbor/7bvULoedOk2mV2FlUJ3AvCAPE6I=/0x0:2040x1360/2000x1333/filters:focal(826x849:827x850)/cdn.vox-cdn.com/uploads/chorus_asset/file/24374428/236487_Sony_DualSense_Edge_AKrales_0016.jpg"
              alt="custom ps5 controller"
            />
          </div>
          <div className="section-3-text-container">
            <h1>03</h1>
            <h3>The Growth of Gaming</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>Developed by Cassius Reynolds</p>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/cassius2828?tab=repositories"
        >
          <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
        </a>
      </footer>
    </div>
  );
};
