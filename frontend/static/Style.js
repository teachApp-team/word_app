
export default <style jsx>{`
.box27 {
  position: relative;
  margin: 2em 0;
  padding: 1.5em 0.5em;
  border: solid 3px #62c1ce;
}
.box27 .box-title {
  position: absolute;
  display: inline-block;
  top: -27px;
  left: -3px;
  padding: 0 9px;
  height: 25px;
  line-height: 25px;
  font-size: 17px;
  background: #62c1ce;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
}

.alternative-ul {
  padding: 0;
}

.alternative-ul > li {
  position: relative;
  list-style-type: none!important;
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-bottom: 5px;
  line-height: 1.5;
  background: #dbebf8;
  vertical-align: middle;
  color: #505050;
  border-radius: 15px 0px 0px 15px;
}

.alternative-ul >  li:before{ 
  display:inline-block; 
  vertical-align: middle;
  content:'';
  width:1em;
  height: 1em;
  background: #fff;
  border-radius: 50%;
  margin-right: 8px;
}
.batsu {
  width: 100px;
  height: 100px;
  position: relative;
  text-align: center;
  margin: 0 auto;
}

.batsu::before, .batsu::after {
  content: "";
  width: 100%;
  height: 10px;
  background: blue;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
  position: absolute;
  top: calc(14% - 5px);
  left: 14%;
}

.batsu::after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
  left: auto;
  right: 14%;
}

.seikai {
  width: 100px;
  height: 100px;
  border: 10px solid red;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  line-height: 80px;
}

.imgContainer {
  background-image: url("../static/profile/climb.jpg");
  height: 740px;
  position: relative;
  width: 100%;
  background-size: cover;
}

.borderFrame {
  position: absolute;
  border: 1px solid #fff;
  top: 85px;
  left: 95px;
  width: calc(100% - 190px);
  height: calc(100% - 100px);
}


.topJpMessageContainer {
  position: absolute;
  bottom: 80%;
  color:  white;
}

.topEngMessageContainer {
  position: absolute;
  bottom: 15%;
  color:  white;
}

.loginWrapper {
  position: absolute;
  color:  white;
  bottom: 40%;
  width: 100%;
  text-align: center;
  z-index: 1; 
}


nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1; 
  height: 650px;
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
}

.MenuToggleButton {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
}
.MenuToggleButton:focus {
	outline:0;
}

.NavigationUl,
.MenuItemLi {
  margin: 0;
  padding: 0;
}

.NavigationUl {
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 350px;
}

.MenuItemLi {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.icon-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 7px;
}

.text-placeholder {
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
}

.TopContainer:before {
  content:'';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #0a2a43, transparent);
  z-index: 100000;
}
.subTitle {
	padding: 20px;
	position: relative;
}

.subTitle::before, .subTitle::after {
	content: '';
	width: 30px;
	height: 30px;
	position: absolute;
}

.subTitle::before {
	border-left: solid 2px #000000;
	border-top: solid 2px #000000;
	top: 0;
	left: 0;
}

.subTitle::after {
	border-right: solid 2px #000000;
	border-bottom: solid 2px #000000;
	bottom: 0;
	right: 0;
}


@media screen and (max-width: 480px) {
  .topJpMessageContainer {
    position: absolute;
    top: 5%;
    color:  white;
  }

  .imgContainer {
    height: 650px;
  }
  .borderFrame {
    border: none;
    top: 70px;
    left: 20px;
    width: calc(100% - 80px);
    height: calc(100% - 80px);
  }
}


`}</style>