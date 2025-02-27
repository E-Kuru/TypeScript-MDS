abstract class Forme {
  abstract calculerSurface(): number;
}

class Rectangle2 extends Forme {
    constructor(public largeur: number, public hauteur: number) {
        super();
    }
    public calculerSurface() {
        console.log(this.largeur * this.hauteur);
        return this.largeur * this.hauteur;
      }
    
}
class Cercle2 extends Forme {
    constructor(public rayon: number) {
        super();
    }
    public calculerSurface() {
        console.log(Math.PI * this.rayon * this.rayon);
        return Math.PI * this.rayon * this.rayon;
      }    
}

const loik = new Rectangle2(45,89)
const loisk = new Cercle2(89)

loik.calculerSurface()
loisk.calculerSurface()