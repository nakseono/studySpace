// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    let result = [];
    let player = this.players;
    for(let i = 0; i < player.length; i++){
      result.push(player[i]["name"] + ' plays ' + this.name);
    }
    return result;
  }
};

module.exports = sport;