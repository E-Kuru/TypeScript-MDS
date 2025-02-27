interface Vehicule {
    marque : string,
    annee : number
}

const isVehicule = (obj: Vehicule): boolean | undefined => {
    typeof obj.marque === "string" ? console.log(true) : console.log(false)
    typeof obj.annee === "number" ? console.log(true) : console.log(false)

   if(typeof obj.annee === "number" && typeof obj.marque === "string"){
    return true
   }

}
const hsfj: Vehicule = {
    marque : "Ford Mustang",
    annee : 1989
}

const hsfjsd = {
    marque : 788,
    annee : "1989"
}
const afficherVehicule = (obj:any) => {
    isVehicule(obj) === true ? console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`) : console.log("Objet invalide pour un véhicule.")

    return isVehicule(obj) === true ? `Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.` : "Objet invalide pour un véhicule."
}

afficherVehicule(hsfj)
afficherVehicule(hsfjsd)