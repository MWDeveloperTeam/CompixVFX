import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

const ImageSlider = () => {
  const imagesApi = [
    {
      image:
        "https://www.teahub.io/photos/full/14-149650_purple-flowers-wallpapers-pink-and-purple-flower-aesthetic.jpg",
    },

    { image: "https://wallpaperaccess.com/full/327035.jpg" },

    {
      image:
        "https://www.teahub.io/photos/full/79-794909_beautiful-purple-flowers-wallpaper-pretty-purple-flowers-backgrounds.jpg",
    },

    {
      image:
        "https://previews.123rf.com/images/navintar/navintar1702/navintar170200083/72450299-nat%C3%BCrliche-blume-hintergrund-erstaunlich-blick-in-die-natur-von-lila-blumen-im-garten-in-der-mitte-d.jpg",
    },
  ];

  return (
    <div className="image_slider_container" >
      <Slider dots infinite fade autoplay autoplaySpeed={2000}>
          {imagesApi.map((img, i) => (
              <div className="img_container" key={i}>
                  <img src={img.image} alt="Slide Images" />
              </div>
          ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
