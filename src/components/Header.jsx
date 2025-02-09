import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router";

function Header() {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isNavHovered ? "white-bg" : ""} ${
        isScrollingDown ? "hide-header" : ""
      }`}
    >
      <div className="logo">
        <NavLink to="/">
          <img
            src={isNavHovered ? "/logo-black.png" : "/logo-white.png"}
            alt="INFINITY LIVING"
            style={{ cursor: "pointer" }} // Membuat logo terlihat bisa diklik
          />
        </NavLink>
      </div>
      <nav>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/about">About</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>About</h2>
                  <p>
                    Meet the world's leading <br /> light gauge steel
                    manufacturer and builder
                  </p>
                  <NavLink to="/about">
                    <u>Go to About page</u>
                  </NavLink>
                </div>
                <div id="submenu-links">
                  <NavLink to="/about/our-purpose">Our purpose</NavLink>
                  <NavLink to="/about/our-value">Our values</NavLink>
                  <NavLink to="/about/our-culture">Our culture</NavLink>
                  <NavLink to="/about/our-strategy">Strategy</NavLink>
                  <NavLink to="/about/leadership">Leadership</NavLink>
                  <NavLink to="/about/research-development">
                    Research & Development
                  </NavLink>
                  <NavLink to="/about/health-safety">Health & Safety</NavLink>
                  <NavLink to="/about/supplier">Supplier</NavLink>
                  <NavLink to="/about/making-steel">Making steel</NavLink>
                  <NavLink to="/about/faq">FAQ</NavLink>
                </div>
              </div>
            </div>
          </li>

          {/* Climate Action */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/ClimateAction">Climate Action</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Climate Action</h2>
                  <p>
                    Our journey to net-zero <br /> steelmaking
                  </p>
                  <a href="">
                    <u>Go to Climate action page</u>
                  </a>
                </div>
                <div id="submenu-links">
                  <a href="#">Steel's sustainability credentials </a>
                  <a href="#">Leading our industry’s efforts to decarbonise </a>
                  <a href="#">Technology pathways to net-zero steel </a>
                  <a href="#">Decarbonisation technologies </a>
                  <a href="#">Decarbonisation investment plans</a>
                  <a href="#">Partnering to drive systems-wide change</a>
                  <a href="#">XCarb®</a>
                  <a href="#">Progress, latest news and updates</a>
                  <a href="#">Climate Action Reports</a>
                </div>
              </div>
            </div>
          </li>

          {/* Smarter Future */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/SmarterFuture">Smarter Future</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Smarter Future</h2>
                  <p>
                    Our journey to net-zero <br /> steelmaking
                  </p>
                  <a href="">
                    <u>Go to Smarter Future page</u>
                  </a>
                </div>
                <div id="submenu-links">
                  <a href="#">The Steel Works</a>
                  <a href="#">The Futurising Podcast</a>
                </div>
              </div>
            </div>
          </li>

          {/* PRODUCTS  */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/Products">Products</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Products</h2>
                  <p>
                    Our journey to net-zero <br /> steelmaking
                  </p>
                  <a href="">
                    <u>Go to Products page</u>
                  </a>
                </div>
                <div id="submenu-links">
                  <a href="#">Our purpose</a>
                  <a href="#">Our values</a>
                </div>
              </div>
            </div>
          </li>

          {/* Investors  */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/Investors">Investors</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Investors</h2>
                  <p>
                    Financial results, investor <br />
                    resources and upcoming <br /> events
                  </p>
                  <a href="">
                    <u>Go to Investors page</u>
                  </a>
                </div>
                <div id="submenu-links">
                  <a href="#">Investment proposition</a>
                  <a href="#">Results</a>
                  <a href="#">Presentations</a>
                  <a href="#">Financial reports</a>
                  <a href="#">Share monitor</a>
                  <a href="#">Financial calendar</a>
                  <a href="#">Equity investors</a>
                  <a href="#">Fixed income investors</a>
                  <a href="#">Corporate governance</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </li>

          {/* Sustainablity */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="/Sustainability">Sustainability</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Sustainability</h2>
                  <p>
                    Our commitment to making <br />
                    steel integral to a <br />
                    sustainable, low-carbon <br />
                    economy
                  </p>
                  <a href="">
                    <u>Go to Sustainability page</u>
                  </a>
                </div>

                <div id="submenu-links">
                  <a href="#">Our 10 SD Outcomes</a>
                  <a href="#">Approach</a>
                  <a href="#">ResponsibleSteel</a>
                  <a href="#">UN Sustainable Development Goals</a>
                  <a href="#">Governance</a>
                  <a href="#">Human Rights</a>
                </div>
              </div>
            </div>
          </li>
          {/* Projects  */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="Projects">Projects</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Projects</h2>
                  <p>
                    Our journey to net-zero <br /> steelmaking
                  </p>
                  <a href="">
                    <u>Go to Projects page</u>
                  </a>
                </div>

                <div id="submenu-links">
                  <a href="#">Rewards and benefits</a>
                  <a href="#">Career progression</a>
                  <a href="#">Graduates and students</a>
                  <a href="#">Experienced professionals</a>
                  <a href="#">Diverse talent enables smarter steels</a>
                  <a href="#">Frequently asked questions</a>
                  <a href="#">Search our jobs</a>
                </div>
              </div>
            </div>
          </li>

          {/*Careers */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="Careers">Careers</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Careers</h2>
                  <p>
                    Latest news and <br />
                    announcements
                  </p>
                  <a href="">
                    <u>Go to Careers page</u>
                  </a>
                </div>

                <div id="submenu-links">
                  <a href="#">Rewards and benefits</a>
                  <a href="#">Career progression</a>
                  <a href="#">Graduates and students</a>
                  <a href="#">Experienced professionals</a>
                  <a href="#">Diverse talent enables smarter steels</a>
                  <a href="#">Frequently asked questions</a>
                  <a href="#">Search our jobs</a>
                </div>
              </div>
            </div>
          </li>
          {/*Media */}
          <li
            className="nav-item"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <NavLink to="Media">Media</NavLink>
            <div className="submenu">
              <div className="submenu-content">
                <div className="submenu-left">
                  <h2>Media</h2>
                  <p>
                    Our journey to net-zero <br /> steelmaking
                  </p>
                  <a href="">
                    <u>Go to Media page</u>
                  </a>
                </div>

                <div id="submenu-links">
                  <a href="#">News articles</a>
                  <a href="#">Press releases</a>
                  <a href="#">Get in touch</a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {/* <div className="extras">
        <span className="stock-price">MT:NA €24.39</span>
        <span className="icon globe">🌍</span>
        <span className="icon search">🔍</span>
      </div> */}
    </header>
  );
}

export default Header;
