import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Grid from "@material-ui/core/Grid";

export default function Main() {
  const scrollRef = React.createRef();
  // const scroll = new LocomotiveScroll({
  //   el: scrollRef.current,
  //   smooth: true,
  // });
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // direction: "horizontal",
    });
  });
  return (
    <div>
      <div data-scroll-container ref={scrollRef}>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
        <div data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </div>
      </div>
    </div>
  );
}
