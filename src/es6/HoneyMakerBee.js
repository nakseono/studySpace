const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  /* constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  } */
  
  constructor(age = 10, color = 'yellow', job = 'make honey', honeyPot = 0){
    super();
    this.age = age;
    this.color = color;
    this.job = job;
    this.honeyPot = honeyPot;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;

/* Create a HoneyMakerBee class, in ES6 style, with:
the Bee superclass
an age property that is set to 10
a job property that is set to make honey
a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a honeyPot property that is set to 0
a makeHoney method that adds 1 to that honeyBee's honeyPot
a giveHoney method that subtracts 1 from that honeyBee's honeyPot */