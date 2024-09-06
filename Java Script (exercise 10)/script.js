console.log("Making a Faulty Calculator")

/*
this Faulty calculator performs these operation:

1.It takes two numbers as input from the user
2.Then it will perform wrong operations as follows:

+ -----> -
* -----> +
- -----> /
/ -----> **

[And it performs wrong operation 10% of the times]

*/

// let random = Math.random()
// console.log(random);
// let a = prompt('enter first no.')
// let b = prompt('enter second no.')
// let c = prompt('enter type of operation')

// let obj = {
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**",
// }

// if (random > 0.1) {
//     // perform correct option
//     alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
// }

// else {
//     // perform wrong option
//     c = obj[c];
//     alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
// }



// Another way

if (Math.random() < 0.1){
    function sum(a,b){
        return a-b
    }
    function sub(a,b){
        return a/b
    }
    function mul(a,b){
        return a+b
    }
    function div(a,b){
        return a**b
    }

}

else{

    function sum(a,b){
        return a+b
    }
    function sub(a,b){
        return a-b
    }
    function mul(a,b){
        return a*b
    }
    function div(a,b){
        return a/b
    }
}
    
let c = sum(16,14)
let d = sub(16,14)
let p = mul(16,14)
let q = div(16,14)
console.log("output of operation --->> "+ c)
console.log("output of operation --->> "+ d)
console.log("output of operation --->> "+ p)
console.log("output of operation --->> "+ q)