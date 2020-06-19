/*
*          Tema: Andar Aleatório - Passeio aleatório , Random Walker
*          Autor: Matheus de Camargo Marques
*          Referencia: The Coding Train - A natureza do código.
*          Curso de Engenharia da Computação - UTFPR
*
*
*/

/*          Sumário
*           1 - Explicação de um vetor e seus pontos em coordenads em 2 dimensões, onde se pode movimentar.
*           2 - Explicação de "Ei! Desenhe uma elipse!", ou um ponto ou uma linha.
*           3 - Porque o exemplo acima deve merecer ser discutido?
*           4 - Explicar o loop Principal().
*           5 - A velocidade definida por x = x + vel;
*           6 - Duas funções fundamentais do Processing
*           7 - Todo código que deve ser iniciado em setup() e draw() é o loop principal. Se movimentamos particulas na tela.
*           8 - Vamos trabalhar com Orientação a objetos, queremos mostrar que os desenhos são como um objeto.
*           9 - Criar um Objeto que iremos chamar de Walker(Andador)
*           10 - Inicializar o objeto Walker
*           11 - Criaremos os methodos walk(andar) e tambey a chamada display().
*           12 - O que é orientação a objetos. São dados e funcionalidades juntos. Um Walker é uma coisa que tem localização. Se movimentar daquela localização e pode se exibir naquela localização.
*           13 - Não podemos esquecer do Construtor é o metodo que constroe o objeto, é como um setup() do objeto.
*           14 - o Andador Aleátório 
*           15 - Opções de movimento inteiro x pertence[+1,-1]  , inteiro y perntence[+1,-1] cada um com uma probabilidade igual.
*           16 -  constain(n , low , high) - inteiro Restringe um valor entre um valor mínimo e máximo.
*           17 - Técnica de probabilidade
*/


//8 - Vamos trabalhar com Orientação a objetos, queremos mostrar que os desenhos são como um objeto.
//9 - Criar um Objeto que iremos chamar de Walker(Andador)
class Walker{
    //12 - O que é orientação a objetos. São dados e funcionalidades juntos. Um Walker é uma coisa que tem localização. Se movimentar daquela localização e pode se exibir naquela localização.
    //13 - Não podemos esquecer do Construtor é o metodo que constroe o objeto, é como um setup() do objeto.
    constructor(){
      //1 - Explicação de um vetor e seus pontos em coordenads em 2 dimensões, onde se pode movimentar.
      this.x = random(0,height);
      this.y = random(0,height);
      
      
      // 11 - Criaremos os methodos walk(andar) e tambey a chamada display().
      // 14 - o Andador Aleátório 
      this.walk = function (){
         this.step();
      }
      
      this.step = function (){
        
          // 17 - Técnica de probabilidade
          var r = Math.round(random(0,4));
          
          //5 - A velocidade definida por x = x + vel;
          //15 - Opções de movimento inteiro x pertence[+1,-1]  , inteiro y perntence[+1,-1] cada um com uma probabilidade igual.
          if(r == 1){
              this.x = this.x + 1;
          }
          else if(r == 2){
              this.x = this.x  - 1;
          }
            
          else if(r == 3){
             this.y = this.y + 1 ;
          }
          else{
             this.y = this.y - 1 ;
          }  
           
          //16 -  constain(n , low , high) - inteiro Restringe um valor entre um valor mínimo e máximo.
          constrain(this.x , width,height);
          constrain(this.y , width,height);
        
          
        
      }
      
      this.display = function(){
        //2 - Explicação de "Ei! Desenhe uma elipse!", ou um ponto ou uma linha.
            noStroke();
            
            fill(255,0,0);
            //fill(random(0,255),random(0,255),random(0,255));
            
            // 17 - Técnica de probabilidade
              var r = Math.round(random(0,4));
              
              if(r == 1){
                   //fill(255,0,0);
              }
              else if(r == 2){
                 // fill(0,255,0);
              }else{
                 //fill(0,0,255);
              }
              
              
            ellipse(this.x,this.y,1,1);
        //3 - Porque o exemplo acima deve merecer ser discotido?
      }
      
    }
  
    
  
}


var w; 
var array_w = [] ;

//7 - Todo código que deve ser iniciado em setup() e draw() é o loop principal. Se movimentamos particulas na tela.
//6 - Duas funções fundamentais do Processing
function setup() {
  createCanvas(500, 500);
  background(0,0,0);
  // 10 - Inicializar o objeto Walker
  w = new Walker();
  
  
  /* Gerando muitos Walkers */
  let quantidade =100;
  for(let i=0;i<quantidade;i++){
     array_w.push( new Walker() );
  }
}

//7 - Todo código que deve ser iniciado em setup() e draw() é o loop principal. Se movimentamos particulas na tela.
//6 - Duas funções fundamentais do Processing
//4 - Explicar o loop Principal().
function draw() {
  
  for(let i=0;i<array_w.length;i++){
     array_w[i].display();
     array_w[i].walk();
  }
  w.display();
  w.walk();
  
 
}
