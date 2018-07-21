class Game {
  constructor() {
    this.towers = [[3, 2, 1], [], []];
  }

  promptMove(reader, cb) {
    this.print();
    reader.question("Which tower would you like to move from? ", function(start) {
      const startTower = parseInt(start);
    });
    reader.question("Which tower would you like to move to? ", function(end) {
      const endTower = parseInt(end);
    });
    cb(startTower, endTower);
  }
}
