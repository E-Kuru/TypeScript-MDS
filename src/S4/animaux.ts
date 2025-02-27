interface IAnimal {
  nom: string;
  seDeplacer(): any;
}

class Animal {
  constructor(public animal: IAnimal) {}
  public seDeplacer = () => {
    console.log(`L'animal ${this.animal.nom} se déplace.`);
    return `L'animal ${this.animal.nom} se déplace.`;
  };
}

// const jhgtf = new Animal({
//     nom : "Athénatis",
//     seDeplacer(){}
// })

// jhgtf.seDeplacer()

class Chien extends Animal {
  constructor() {
    super({
      nom: "Athéchiante",
      seDeplacer() {
        console.log(`Le chien ${this.nom} court.`);
        return `Le chien ${this.nom} court.`;
      },
    });
  }
}

class Chat extends Animal {
  constructor() {
    super({
      nom: "AthéPabien",
      seDeplacer() {
        console.log(`Le chat ${this.nom} saute.`);
        return `Le chat ${this.nom} saute.`;
      },
    });
  }
}

const ff = new Chien();
const hjo = new Chat();

const gyhu = [ff.animal, hjo.animal];

const faireSeDeplacer = (animaux: IAnimal[]) => {
  animaux.map((e) => e.seDeplacer());
};

faireSeDeplacer(gyhu)