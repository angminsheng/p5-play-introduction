# p5.js | Introduction to p5.play

This code along is a small introduction on [p5.play](https://molleindustria.github.io/p5.play/). p5.play is a [p5.js](http://p5js.org/) library for the creation of games and playthings.


## Introduction

Lets create a simple parking lot with p5.js and p5.play.

## Instructions

This code along will help you to:
- Learn what is a sprite image and how to load them into your game.
- Learn how to detect collision between different sprite image.
- Implementing p5 sound and p5 dom addon library into the small game.

To start coding along with the lab. Head over to [this repository](www.google.de) to get a boiler plate which comes with all the addon libraries for p5.js.

### Iteration 1 - Creating the correct folder structure for our p5 project.

Let's start with structuring our folder.

```
|-assets
|-js
|-p5
index.html
README.md
```

The ``p5`` folder contains all javascripts for the p5 library as well as the addon libraries like p5.play and p5.sound.

The ``js`` folder is the folder where we will be working on.

We start by creating a ``main.js`` file inside the ``js`` folder. In this file, the main function from p5 library will be called. 

``js
// main.js

function setup() {
  createCanvas(800, 800);
}

function draw() {
background(0)
}
``

Don't forget to link all your javascript file in your ``index.html``.

## Iteration 2 - Creating our Game class.
Inside the ``js`` folder, create a ``Game.js`` where we will create our Game class.
This Game class will be the main class that will contain all the other classes we need later on.
For the moment let's just keep it simple.

```js
class Game {
  constructor() {
   
  }

  setup() {
 
  }

  draw() {

  }
}
```







