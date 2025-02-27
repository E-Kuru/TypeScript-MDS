// const lo = ["dyghu","gyhuijok","ujik"]
// const lok = [4,56,897,5]
// const hj = [
//     {
//         hello : "Hello"
//     },
//     {
//         kikp : "Kiopo   "
//     }
// ]

// const premierElement = (a:Array<any>) => {
//     console.log(a[0]);
//     return a[0]

// }

interface Lengthwise {
  length: number;
}

const gh = []
const ghdf = ["12","4596"]

const premierElement =<Type extends Lengthwise>(a: Type): any  => {

  a.length > 0 ? console.log(a[0]) : console.log("Pas un vrai tableau")
  
  return a.length > 0 ? a[0] : "Pas un vrai tableau"
};

premierElement(gh)
premierElement(ghdf)
