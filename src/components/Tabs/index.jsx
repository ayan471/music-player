import React from "react";
import "./style.css";

const Tabs = () => {
  return (
    <div className="tab-container">
      {/* tab header*/}
      <div className="tab-header flex">
        <a className="active" href="#commercial">
          Commercial
        </a>
        <a href="#freeLicense">Free License</a>
      </div>
      {/* tab content */}
      <div className="tab-contents">
        <div className="tab-content" id="commercial">
          <div className="content-wrapper flex justify-sb m-20">
            <div className="content-item">
              <img />
            </div>
            <div className="content-item">
              <img />
            </div>
          </div>
        </div>
        <div className="tab-content" id="freelicense">
          freelicense
        </div>
      </div>
    </div>
  );
};

export default Tabs;
