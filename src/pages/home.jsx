import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import myData from '../../data.json';
import Menu from "../components/menu.jsx";

const imgs = ["https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360",]
var currentImg = 0;

export default function Home() {
  var data = myData;
  var pages=["about", "resume","projects"];
  
  return (
    <div className = "content">
      <img class="profile" src={imgs[currentImg]}></img>
      <div className="heading">
          <h1 className="title">Annabelle Strong</h1>
      </div>
      <Menu
        pages={pages}
        data={data}
      />
    </div>
  );
}
