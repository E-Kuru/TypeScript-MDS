// const spaceLine = () => {
//     console.log("\n")
//     console.log("-----------------");
//     console.log("\n")
// }

// interface Personne {
//     name : String,
//     age : Number,
// }

// const Personne : Personne = {
//     name : "Alice",
//     age : 25
// }

// const afficherPersonne = (personne:Personne) => {
//     console.log(`Bonjour, je m'appelle ${personne.name} et j'ai ${personne.age} ans.`);

// }

// afficherPersonne(Personne)

interface Personne {
  id: Number;
  name: String;
  age: Number;
  adresse?: Adresse;
}

interface Adresse {
  rue?: String;
  ville?: String;
}

const Personne2 : Personne = {
    id : 2,
    name : "Joe",
    age : 24,
    adresse : {
        rue : "48 rue de la Liberation",
        ville : "Bobigny"
    }
}

const Personne3 : Personne = {
    id : 3,
    name : "Bob",
    age : 24,
}

const afficherPersonneAvancee = (personne:Personne) => {
    personne.adresse ? 
    console.log(`Bonjour, je m'appelle ${personne.name} (ID: ${personne.id}), j'ai ${personne.age} ans et j'habite au ${personne.adresse.rue}, ${personne.adresse.ville}.`) 
    : console.log(`Bonjour, je m'appelle ${personne.name} (ID: ${personne.id}), j'ai ${personne.age} ans.`);
}

afficherPersonneAvancee(Personne2)
// spaceLine()
afficherPersonneAvancee(Personne3)
