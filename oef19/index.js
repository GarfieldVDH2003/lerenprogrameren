let getal=parseInt(prompt("heef een geral in"));
let output=""
for(let teller=1;teller <= getal;teller = teller *2){
    if (teller * 2 < getal){
        output = output + `${teller},`
    }else{
        output = output + `${teller},`
    }
}

console.log(output)