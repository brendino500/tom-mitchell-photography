import React from "react";

const ImageLayout = ({ name, imgClassName, number, imgSrc }) => {
  return (
    <figure className="gallery-item">
      <div className="gallery-item-img">
        <img src={imgSrc} alt="model" className={imgClassName} />
        <figcaption className="gallery-item-caption">
          <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">
            {name}
          </h2>
          <span className="gallery__item-number">{number}</span>
        </figcaption>
      </div>
    </figure>
  );
};

export default ImageLayout;
