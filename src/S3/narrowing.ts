const hj = "Hellowww"
const jik = 78

const traiterValeur = (a: string | number) => {
  if (typeof a === "string") {
    console.log(a.length);
    return a.length;
  } else if (typeof a === "number") {
    console.log(a * 2);
    return a * 2;
  }
};

traiterValeur(hj)
traiterValeur(jik)