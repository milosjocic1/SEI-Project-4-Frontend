import React from "react";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

export default function Home(props) {
  const slideData = [
    {
      index: 0,
      headline: "New Fashion Apparel",
      button: "Shop now",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    },
    {
      index: 1,
      headline: "In The Wilderness",
      button: "Book travel",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
    },
    {
      index: 2,
      headline: "For Your Current Mood",
      button: "Listen",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      button: "Get Focused",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
    },
  ];

  return (
    <div className="container component">
      <Search></Search>
      <div>
        <div className="buy-sell-background">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <h1 className="buy-sell-title">Buy and Sell Anything</h1>{" "}
              <br></br>
              <a href="/" className="buy-sell-btn">
                How it works
              </a>
            </div>
            <div className="col-md-5 col-sm-12">
              <img
              className="agora-image-cart"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/online-shopping-delivery-4049862-3363949.png"
                alt="agora-market"
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
      <Slider heading="Example Slider" slides={props.product} />
      <Categories category={props.category}></Categories>
    </div>
  );
}
