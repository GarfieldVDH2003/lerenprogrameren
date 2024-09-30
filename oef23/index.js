let teRadenGetal=7;
let ingevoerd=parseInt(prompt("getal?"));
while(ingevoerd!=teRadenGetal){
    if(ingevoerd<teRadenGetal){
        console.log("groter raden");
    }else(ingevoerd>teRadenGetal){
        console.log("kleiner raden");
    }
    let ingevoerd=parseInt(prompt("getal?"));
}