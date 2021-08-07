class Frog {
  constructor(name, isMammal) {
    this.name = name;
    this.isMammal = isMammal;
  }
  jump() {
    console.log("Hop hop..");
  }
}
const result = new Frog("Hop hop");
result.jump();

class Ape extends Frog {
  constructor(name, isMammal) {
    super(name);
    this.isMammal = isMammal;
  }
  yell() {
    console.log(`Auoooo`);
  }
}
const hasil = new Ape("Auoooo");
hasil.yell();
