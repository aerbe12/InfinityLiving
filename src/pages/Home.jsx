import React from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import "./home.css";
import News from "../components/News";
import Button from "../components/Button";
function Home() {
  const newsItems = [
    {
      date: "February 06, 2025",
      title:
        "ArcelorMittal to move forward with construction of a new steel facility",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title: "ArcelorMittal reports fourth quarter and full year 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "January 28, 2025",
      title: "ArcelorMittal announces publication of its Q4 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title:
        "ArcelorMittal to move forward with construction of a new steel facility",
      image: "dummy.jpg",
    },
    {
      date: "February 06, 2025",
      title: "ArcelorMittal reports fourth quarter and full year 2024 results",
      image: "dummy.jpg",
    },
    {
      date: "January 28, 2025",
      title: "ArcelorMittal announces publication of its Q4 2024 results",
      image: "dummy.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Video
        videoSrc="/video.mp4"
        phrases={[
          "Making Dreams Possible",
          "Powered by Imagination",
          "Built for Life",
        ]}
      />
      <section>
        <div className="card-container">
          <div className="card">
            <h2>Test</h2>
            <p>
              test
            </p>

            <a id="card-link" href="">
              Read, Watch, Listen Here
            </a>
          </div>

          <div className="card">
            <h2>Smarter steels for people and planet</h2>
            <p>
              Our commitment to making steel integral to a sustainable,
              low-carbon <br />
              economy
            </p>

            <a id="card-link" href="">
              Read more
            </a>
          </div>

          <div className="card">
            <h2>ArcelorMittal Multi Part Integration® </h2>
            <p>
              In a rapidly evolving automotive industry, flexibility wins.
              ArcelorMittal Multi <br />
              Part Integration® maximises automotive manufacturers’ ability to
              adapt <br />
              through the power of less: less parts, less process, less floor
              space, less time, less materials, less CO₂ and less assembly cost.
              Harness the strength of steel and the power of less.
            </p>

            <a id="card-link" href="">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="info-container">
          <div className="info-img">
            <img src="/dummy2.jpg" alt="" />
          </div>
          <div className="info-desc">
            <h2>
              ArcelorMittal reports fourth <br />
              quarter and full year 2024 <br />
              results
            </h2>
            <p>February 6, 2025</p>
            <Button text="Find Out More" />

            <p id="info-desc-link">Related Links</p>
            <a href="">Access the analyst conference call</a>
          </div>
        </div>
      </section>

      <section>
        <div className="info-container-2">
          <div className="info-desc-2">
            <h2>
              ArcelorMittal to move <br />
              forward with construction of <br />
              a new, world-class electrical <br />
              steel facility in Alabama
            </h2>
            <p>
              February 6, Schererville, IN: ArcelorMittal announced that it is{" "}
              <br />
              proceeding with plans to build an advanced, non-grain-oriented{" "}
              <br />
              electrical steel (NOES) manufacturing facility in Alabama.
            </p>
            <Button text="Find Out More" />
          </div>
          <div className="info-img">
            <img src="/dummy2.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="build-section">
        {/* Bagian kiri dengan gambar (lebih dari setengah layar) */}
        <div className="build-image">
          <div className="overlay">
            <div className="build-text">
              <h1>LET'S BUILD TOGETHER</h1>
              <a href="#" className="build-button">
                VIEW CAREER OPENINGS
              </a>
            </div>
          </div>
        </div>

        {/* Card putih pada sisa ruang di kanan */}
        <div className="build-contact">
          <h3>LET’S TALK</h3>
          <h2>NEED TO REACH US?</h2>
          <a href="#" className="contact-button">
            CONTACT US
          </a>
        </div>
      </section>

      <section className="news-container">
        <News newsItems={newsItems} />
        <Button
          text="News Article"
          onClick={() => alert("Exploring More")}
          className="custom-button-news"
        />
      </section>

      <section>
        <div className="report-container">
          <div className="report-info">
            <h1>
              Are you looking for a report, policy <br /> or procedure?
            </h1>
            <p>
              Please go to our corporate library to access our reports and
              policies.
            </p>
          </div>
          <div className="button-report">
            <Button text="Corporate Library" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
