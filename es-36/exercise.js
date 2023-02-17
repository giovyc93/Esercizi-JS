let obj = {
    name: "g",
    cognome: "c",
    eta: 29,

}


let { name, cognome: co, eta } = obj;

console.log(co);



number = [1, 2, 3, 4, 5, 6,]


function sum(...numeri) {
   
     tot= numeri.reduce((a, b) => a + b);
    console.log(tot);


}

sum(1,2,3,4,5)


let arr= [1,2,3,4,5,6,7];

let filtrati = arr.filter((a)=> a%2==0);
console.log(filtrati);