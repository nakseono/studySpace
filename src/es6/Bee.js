const Grub = require('./Grub');

class Bee extends Grub {
  /* constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  } */
  
  constructor(age = 5, color = 'yellow', job = 'Keep on growing'){
    super();
    this.age = age;
    this.color = color;
    this.job = job;
  }
}

module.exports = Bee;

/* Create a Bee class, in ES6 style, with:
the Grub superclass
an age property that is set to 5
a color property that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a job property that is set to Keep on growing */