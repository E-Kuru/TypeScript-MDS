const spaceLine = () => {
    console.log("\n")
    console.log("-----------------");
    console.log("\n")
}

interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

const Employe1 : Employe = {
    nom : "Michel",
    poste : "Sous-fifre"
}
const Client1 : Client = {
    nom : "Jakçon",
    entreprise : "Totyota"
}

type PersonnePro = Client | Employe

const afficherInfoProfessionnelle  = (PersonnePro: PersonnePro) => {
    if ( 'poste' in PersonnePro){
        console.log(`Employé: ${PersonnePro.poste} travaille comme ${PersonnePro.poste}.`);
    } else if ('entreprise' in PersonnePro){
        console.log(`Client: ${PersonnePro.nom} est associé à l'entreprise ${PersonnePro.entreprise}.`);
    } else {
        console.log("C'est personne ton gars là !!");
    }
}

afficherInfoProfessionnelle(Employe1)
spaceLine()
afficherInfoProfessionnelle(Client1)

// const PersonnePro : Employe | Client = ""