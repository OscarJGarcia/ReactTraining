import React, { useRef } from "react";

import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const imgs = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram"></SubHeading>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imgs.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image${index + 1}`}
            >
              <img src={image} alt="Gallery" />
              <BsInstagram className="gallery__image-icon"></BsInstagram>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          ></BsArrowLeftShort>
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          ></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
