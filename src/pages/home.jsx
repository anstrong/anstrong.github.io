import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import myData from '../../data.json';
import Menu from "../components/menu.jsx";

const imgs = [
  '/assets/logo.png',
  '/assets/memoji.jpeg']
var currentImg = 0;

export default function Home() {
  var data = myData;
  var pages = ["about", "resume", "projects"]; //"skills"

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
