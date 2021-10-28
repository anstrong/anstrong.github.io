import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import myData from '../../data.json';

const imgs = ["https://cdn.glitch.me/47315a0e-1265-4e95-aa84-887a21ec6fb2%2Flogo.png?v=1635296262360",
             ]
var currentImg = 0;

function switchPicture() {
  
}

const Nav = props => (
  <ul class="nav justify-content-center">
    {props.pages.map(page => (
        <Link href={"/" + page} title={page} className="home-nav-button">
          <i className={props.data[page].icon + " fa-3x home-nav-icon"}></i>
          <p className="button-label">{page}</p>
        </Link>
      ))} 
  </ul>
)

export default function Home() {
  var data = myData;
  var pages=["about", "resume","projects"];
  
  return (
    <div className = "content">
      <img class="profile" src={imgs[currentImg]}></img>
      <div className="heading">
           <h1 className="title">Annabelle Strong</h1>
      </div>
      <Nav
        pages={pages}
        data={data}
      />
    </div>
  );
}
