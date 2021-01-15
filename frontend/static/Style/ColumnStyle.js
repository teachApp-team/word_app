

export default <style jsx>{`
.headTitle {
  text-align: center;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  margin: 1rem 1rem 3rem 1rem;
}
.headTitle:before, .headTitle:after {
  content: '';
  position: absolute;
  top: -7px;
  width: 2px;
  height: -webkit-calc(100% + 14px);
  height: calc(100% + 14px);
  background-color: black;
}
.headTitle:before {
  left: 7px;
}
.headTitle:after {
  right: 7px;
}
.subTitle {
  text-align: center;
  background:rgba(0, 0, 0, 0) linear-gradient(transparent 60%, #cce5ff 0%) repeat scroll 0 0;
}
.columnContent {
  margin: 2rem 1rem 3rem 1rem;
}

.columnContentContent {
  margin: 2rem 1rem 2rem 1rem;
}

`}</style>