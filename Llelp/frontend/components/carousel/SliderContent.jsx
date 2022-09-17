import React from "react";
import icon1 from '../../../../Llelp/app/assets/images/llelp_logos/search_icon.png';


function SliderContent({ activeIndex, sliderImages }) {
  return (
    <section>
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
					
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text"><img src={icon1} width='20px' height="20px" />{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;