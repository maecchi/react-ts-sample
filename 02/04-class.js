class Bird {
  constructor(name) {
    this.name = name;
  }

  chrip() {
    console.log(`${this.name}が泣きました`);
  }

  static explain(name) {
    console.log(`${name}が翼があって卵を生みます`);
  }
}

class FlyableBird extends Bird {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name}が飛びました`);
  }
}

const bd1 = new Bird('ペンギン');
bd1.chrip();
Bird.explain('カラス');

const bd2 = new FlyableBird('スズメ');
bd2.fly();