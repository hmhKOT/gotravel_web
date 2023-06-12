import React from "react";
import "./heroImageGrid.css";

const HeroImageGrid = () => {
  return (
    <div className="c-heroImageGrid">
      <div className="container">
        <div className="column"></div>
        <div className="column">
          <div className="row"></div>
          <div className="row">
            <div>
              <div className="text">
                <h6>
                  This grid works
                  <br />
                  in Internet Explorer
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageGrid;
