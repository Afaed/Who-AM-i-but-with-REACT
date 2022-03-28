import React, { useState } from "react";
import Projects from "../Projects";
import Project from "../Projects";

const projects = [

{
id: 0,
title: "Activently",
languages: "CSS, JS, Mongoose, HTML",
image:"../assets/images/Activently.JPG",
description: "Allows you to trade pokemon and create a team. I did the design and front end!",
repo: "https://github.com/dbottoni/PokeTrader",
live: "https://pocket-traders.herokuapp.com/",
},
{
    id: 1,
    title: "LazEat",
    languages: "CSS, HTML, Javascript",
    image: '../assets/images/lazeat-screenshot.PNG',
    repo: "https://github.com/Afaed/LazEat",
    live: "https://afaed.github.io/LazEat/"
}];


function Portfolio() {
    return (
        <div class="box2">
        <div class="flex-row"> 
        <section id="Selected-Works">
            <h2>Selected Works</h2>
            <p>Please browse some of my projects I have ben working on! 
                This includes my webpage, resume, and others!</p>
            <div class="images">

            <Projects projects = {Project}/> 
            </div>
</section>
</div>
      </div>
    );
  }

export default Portfolio;