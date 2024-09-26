let som=0;
let getal;
for(;;){
    getal=parseInt(prompt("geef een getal"));

    if(getal<0){
        break;

    }

    som+=getal;
}
console.log(som);