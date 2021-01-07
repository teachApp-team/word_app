import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax'

export default function TopImgBalloon(props) {
  return (
  <div style={{zIndex:0}}>
    <ParallaxLayer 
      offset={1.1}
      speed={0.1}
      style={{
        marginLeft: "72%", 
        width: "90px",
        height: "90px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk2.png')", 
        backgroundSize: 'contain',
        zIndex: 0,
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={0.5}
      speed={1.1}
      style={{
        marginLeft: "72%", 
        width: "100px",
        height: "100px", 
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk1.png')", 
        backgroundSize: 'contain',
        zIndex: 3,
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.05}
      speed={0.1}
      style={{
        marginLeft: "90%", 
        width: "120px",
        height: "120px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk1.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.4}
      speed={0.3}
      style={{
        marginLeft: "88%", 
        width: "130px",
        height: "130px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk3.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.3}
      speed={1}
      style={{
        marginLeft: "2%", 
        width: "60px",
        height: "60px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk1.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.05}
      speed={0.1}
      style={{
        display: 'block',
        marginLeft: "5%", 
        width: "90px",
        height: "90px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk3.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.5}
      speed={0.25}
      style={{
        display: 'block',
        marginLeft: "1%", 
        width: "80px",
        height: "80px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk2.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.6}
      speed={0.2}
      style={{
        display: 'block',
        marginLeft: "20%", 
        width: "180px",
        height: "180px",
        backgroundPosition: "center", 
        backgroundImage: "url('../../static/top/ballonsk3.png')", 
        backgroundSize: 'contain' ,
        zIndex: 0,
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.8}
      speed={2}
      style={{
        marginLeft: "1%", 
        width: "120px",
        height: "120px",
        backgroundPosition: "center", 
        backgroundImage: "url('../static/top/ballonred.png')", 
        backgroundSize: 'contain' 
        }}>
    </ParallaxLayer>
  </div>
  );
}