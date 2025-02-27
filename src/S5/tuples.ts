const creerScore = ():[string, number] => {
    return ["Pablo",12]
}
const afficherScore = (score: [string, number]) => {
    console.log(`Le joueur ${score[0]} a un score de ${score[1]}`)
    return `Le joueur ${score[0]} a un score de ${score[1]}`
}

afficherScore(creerScore())