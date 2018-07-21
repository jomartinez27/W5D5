class Clock {
  constructor() {
    const currentTime = new Date();

    this.hours = Date.getHours();
    this.minutes = Date.getMinutes();
    this.seconds = Date.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(
      `${this.hours}:${this.minutes}:${this.seconds}`
    );
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1
    }

    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours = (this.hours + 1) % 24;
    }
    
    this.printTime();
  }
}

const clock = new Clock();
