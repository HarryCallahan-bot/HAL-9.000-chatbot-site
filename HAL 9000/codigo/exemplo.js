const readline = require('readline');

const menu = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


const texto='   HALL 9000\n ================================================================='

console.log(texto)


function telainicial(){
    console.log('olá, sou climebot, seu robo do tempo');
    primeirapergunta();
}

function primeirapergunta(){    
    menu.question('o céu está claro?\n 1 - sim\n 2 - não\n', (resposta)=>{

    if(resposta=='1'){
        menu.question(`que belo dia.\n 1 - aceitar afirmação\n 2 - rejeitar afirmação\n`, (resposta2)=>{
                if(resposta2=='1'){
                console.log('show de bola')
                telainicial();
                }
                else if(resposta2=='2'){
                menu2();
                };

            })
        }

    else if(resposta=='2'){
        console.log('que chato')
        telainicial();
    }
    
    })

};


function menu2(){
     menu.question('porque? \n 1 - tá muito quente\n 2- tá muito frio\n',(resposta3)=>{
    
    


})}
        
       
 

telainicial();