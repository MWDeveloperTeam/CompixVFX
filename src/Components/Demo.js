import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

const Demo = () => {
  return (
    <div style={{}}>
        <Slider dots autoplay autoplaySpeed={4000} vertical style={{zIndex: "-1"}}>
            <div style={{zIndex: "-1"}}>
                <img src="https://www.teahub.io/photos/full/14-149650_purple-flowers-wallpapers-pink-and-purple-flower-aesthetic.jpg" alt=""  style={{width: "100%", height: '500px', objectFit: 'cover'}}/>
            </div>
            <div style={{zIndex: "-1"}}>
                <img src="https://wallpaperaccess.com/full/327035.jpg" alt=""  style={{width: "100%", height: '500px', objectFit: 'cover'}}/>
            </div>
            <div style={{zIndex: "-1"}}>
                <img src="https://www.teahub.io/photos/full/79-794909_beautiful-purple-flowers-wallpaper-pretty-purple-flowers-backgrounds.jpg" alt=""  style={{width: "100%", height: '500px', objectFit: 'cover'}}/>
            </div>
            <div style={{zIndex: "-1"}}>
                <img src="https://previews.123rf.com/images/navintar/navintar1702/navintar170200083/72450299-nat%C3%BCrliche-blume-hintergrund-erstaunlich-blick-in-die-natur-von-lila-blumen-im-garten-in-der-mitte-d.jpg" alt=""  style={{width: "100%", height: '500px', objectFit: 'cover'}}/>
            </div>
        </Slider>
    </div>
  )
}

export default Demo