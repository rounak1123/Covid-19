import React, { useState, useEffect } from "react";
import "./news.css";
import ReactCardCarousel from "react-card-carousel";
import { Link } from "react-router-dom";

const News = function () {
  let init = [
    { id: 0, img: "", url: "", tit: " " },
    { id: 1, img: "", url: "", tit: " " },
    { id: 2, img: "", url: "", tit: " " },
    { id: 3, img: "", url: "", tit: " " },
    { id: 4, img: "", url: "", tit: " " },
    { id: 5, img: "", url: "", tit: " " },
    { id: 6, img: "", url: "", tit: " " },
    { id: 7, img: "", url: "", tit: " " },
  ];

  const [arr, setArr] = useState(init);
  const [ind, setInd] = useState(0);

  let arr1 = [...init];
  useState(() => {
    const temp = async function () {
      const res1 = await fetch(
        "https://gnews.io/api/v4/search?q=health&country=in&token=85ed0074e82e6b9570edff9b98132306"
      );
      const res2 = await res1.json();
      console.log(res2);
      for (let i = 0; i < 8; i++) {
        ////  console.log(res2.articles[i]);
        let dat = res2.articles[i];
        arr1[i].img = dat.image;
        arr1[i].tit = dat.title;
        arr1[i].url = dat.url;
        arr1[i].id = dat.source.name;
      }
      setArr(arr1);
      console.log(arr);
    };

    temp();
  }, []);
  const myStyle = {
    backgroundColor: "red",
    backgroundImage: "url('" + arr[0].img + "')",
    backgroundSize: "cover",
  };

  //   useState(() => {
  //     myStyle = {
  //       backgroundColor: "red",
  //       backgroundImage: `url(${arr[ind].img})`,
  //       backgroundSize: "cover",
  //     };
  //   }, [ind]);

  return (
    <div className="mainnews">
      <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[0].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[0].url}>
            {" "}
            <div className="cntnws">
              {arr[0].tit} <br /> Source : {arr[0].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[1].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[1].url}>
            {" "}
            <div className="cntnws">
              {arr[1].tit} <br /> Source : {arr[1].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[2].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[2].url}>
            {" "}
            <div className="cntnws">
              {arr[2].tit} <br /> Source : {arr[2].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[3].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[3].url}>
            {" "}
            <div className="cntnws">
              {arr[3].tit} <br /> Source : {arr[3].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[4].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={{ pathname: arr[4].url }}>
            {" "}
            <div className="cntnws">
              {arr[4].tit} <br /> Source : {arr[4].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[5].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[5].url}>
            {" "}
            <div className="cntnws">
              {arr[5].tit} <br /> Source : {arr[5].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[6].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[6].url}>
            {" "}
            <div className="cntnws">
              {arr[6].tit} <br /> Source : {arr[6].id}
            </div>
          </a>
        </div>

        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[7].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[7].url}>
            {" "}
            <div className="cntnws">
              {arr[7].tit} <br /> Source : {arr[7].id}
            </div>
          </a>
        </div>
        {/* <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[8].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[8].url}>
            {" "}
            <div className="cntnws">
              {arr[8].tit} <br /> Source : {arr[8].id}
            </div>
          </a>
        </div>
        <div
          className="crd"
          style={{
            backgroundColor: "red",
            backgroundImage: "url('" + arr[9].img + "')",
            backgroundSize: "cover",
          }}
        >
          <a href={arr[9].url}>
            {" "}
            <div className="cntnws">
              {arr[9].tit} <br /> Source : {arr[9].id}
            </div>
          </a>
        </div> */}
      </ReactCardCarousel>
    </div>
  );
};

export default News;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import ReactCardCarousel from "react-card-carousel";

// class MyCarousel extends Component {
//   static get CONTAINER_STYLE() {
//     return {
//       position: "relative",
//       height: "100vh",
//       width: "100%",
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "middle",
//     };
//   }

//   static get CARD_STYLE() {
//     return {
//       height: "200px",
//       width: "200px",
//       paddingTop: "80px",
//       textAlign: "center",
//       background: "#52C0F5",
//       color: "#FFF",
//       fontFamily: "sans-serif",
//       fontSize: "12px",
//       textTransform: "uppercase",
//       borderRadius: "10px",
//       boxSizing: "border-box",
//     };
//   }

//   render() {}
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyCarousel />, rootElement);
