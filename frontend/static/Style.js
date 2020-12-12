
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
  /*枠の大きさ*/
  height: 100px;
  /*枠の大きさ*/
  position: relative;
  text-align: center;
  margin: 0 auto;
}

.batsu::before, .batsu::after {
  content: "";
  width: 100%;
  /*バツ線の長さ*/
  height: 10px;
  /*バツ線の太さ*/
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
  /* ←上下20pxのボーダー */
  background-color: #fff;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  line-height: 80px;
  /* ←円の高さ100px - 上下のボーダー20px */
}

`}</style>