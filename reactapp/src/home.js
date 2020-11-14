import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div>
      <div className="navbar">
        <Link to="/dogs">
          <button type="button">Dog Preview</button>
        </Link>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button type="button">Sign In</button>
        </Link>
        <ReactPlayer
          url="https://raw.githubusercontent.com/jennch/misc/main/home.m4a"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
      </div>

      <section id="section1">
        <div className="main">
          <header>
            Ready to meet your new best friend?
            <br />
            Join BarkFinder today!
            <a class="scroll" href="#section2">
              <span></span>Scroll
            </a>
          </header>
        </div>
      </section>
      <section id="section2">
        <a className="scroll" href="#section1">
          <span></span>Scroll
        </a>
        <div className="main" id="second">
          <header>How does it work?</header>
          <p>
            We take dogs from foster homes all over the Bay Area and bring them
            right to your fingertips in the comfort of your own home. So once
            you've created an account, you can sit back, relax, and let us bring
            your future dog right to your computer.
          </p>
        </div>
      </section>
      <Card className="text-center">
        <Card.Footer>Contact us at dogmatching@gmail.com</Card.Footer>
        <Card.Footer className="text-muted">
          Copyright © 2020 Jennifer Chang and Katie Chong. All Rights Reserved
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Home;
