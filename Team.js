const team = {
    _players: [],
    _games: [],
    addPlayer: function (newFirstName, newLastName, newAge) {
      let newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(newPlayer);
    },
    players: function () {
      return this._players;
    },
     addGame: function (newOpponent, newTeamPoints, newOpponentPoints) {
      let newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(newGame);
    },
    games: function () {
      return this._games;
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  //console.log(team.players());
  console.log(team.games());
  
  
