class Rectangle {
  constructor(public largeur: number, public hauteur: number) {}
  public calculerSurface() {
    console.log(this.largeur * this.hauteur);
    return this.largeur * this.hauteur;
  }
}

class Cercle {
  constructor(public rayon: number) {}
  public calculerSurface() {
    console.log(Math.PI * this.rayon * this.rayon);
    return Math.PI * this.rayon * this.rayon;
  }
}

const jio = new Rectangle (45,56)
const jsio = new Cercle (45)

const afficherSurface = (a) => {
    if(a instanceof Rectangle){
        console.log(`Ceci est un rectangle de surface ${a.calculerSurface()}.`);
        return `Ceci est un rectangle de surface ${a.calculerSurface()}.`
    } else if ( a instanceof Cercle){
        console.log(`Ceci est un cercle de surface ${a.calculerSurface()}.`);
        return `Ceci est un cercle de surface ${a.calculerSurface()}.`
    }
};

afficherSurface(jio)
afficherSurface(jsio)