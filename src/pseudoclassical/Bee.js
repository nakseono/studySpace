var Grub = require('./Grub');

var Bee = function () {
    Grub.call(this);
    this.age = 5;
    this.color = 'yellow'
    this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


module.exports = Bee;



/* Create a Bee class, in ES6 style, with:
the Grub superclass
an age property that is set to 5
a color property that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
a job property that is set to Keep on growing */