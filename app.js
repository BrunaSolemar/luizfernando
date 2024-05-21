const key = "arma"; 


const robot = {
    nome:"BleepOp",  //propriedades tipo texto (string)
    material:"aço",
    serial:15, //propriedade tipo int
    eDoMal:false, //propriedade tipo boleano (boo)
    [key]:"Lazer", //propriedade que o nome vem de uma variavel
    ["TipoTank"]:"Tank de Ozonio"  //propriedade direta
}

const robot02 = {
    nome:"BleepOp02",  //propriedades tipo texto (string)
    material:"aço",
    serial:13, //propriedade tipo int
    eDoMal:false, //propriedade tipo boleano (boo)
    correr:()=>{ //arrow function
        console.log("opa estou correndo!");
        //coloque quantas linhas quiser nessa função!!
    }

}
robot02.correr(); //arrow function
   

const robot03 = {
    nome:"BleepOp03",  //propriedades tipo texto (string)
    material:"aço",
    serial:10, //propriedade tipo int
    eDoMal:false, //propriedade tipo boleano (boo)
    correr:function(){ //
        console.log("opa estou correndo!");
        //coloque quantas linhas quiser nessa função!!
    }

}
robot03.correr(); //

const robot04 = {
    nome:"BleepOp04",  //propriedades tipo texto (string)
    material:"aço",
    serial:20, //propriedade tipo int
    eDoMal:false, //propriedade tipo boleano (boo)
    correr(){ //classelike
        console.log("opa estou correndo!");
        //coloque quantas linhas quiser nessa função!!
    }

}
robot04.correr(); 