import React from "react";
import "./CSS/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer container-fluid ">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-lg-4 col-md-4 col-sm-12 footerb">
            <h1>Green Spaces</h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 footerb1">
            <h1> LINKS </h1>
            <ul>
              <li>Upload Image</li>
              <li>Image Wall</li>
              <li>Grow Your Plant</li>
              <li>Forest</li>
            </ul>
          </div>
          {/* <div className="col-lg-4 col-md-4 col-sm-12 footerb2">
            <div className="footerb21">
              <p>Subscribe For Newsletter</p>
              <div className="row newletter">
                <div className="col-sm-8 inptbox">
                  <form>
                    <input />
                  </form>
                </div>
                <div className="col-sm-4 btnbox">
                  <p>Subscribe</p>
                </div>
              </div>

              <h6>Follow us on Social Media</h6>

              <div className="row Socialbtn">
                <div className="col-sm-3 btnss">
                  <img src={Pinterest} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Facebook} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Whatsapp} />
                </div>
                <div className="col-sm-3 btnss">
                  <img src={Instagram} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
