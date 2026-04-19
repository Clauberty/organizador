
//abrir meno bola 1
var numId=0;
function openNav(){
    
document.querySelector('.menu').style.transform="translatex(0)";
  
}
//fechar menu bola1
function closeNav(){
    

            document.querySelector('.menu').style.transform="translatex(-100%)";
        
    

};
//abrir menu perfil
function openNavPerfil(){
     

    document.querySelector('.perfil').style.transform="translatex(0)";
      
    }      
//fechar menu perfil
    function closeNavPerfil(){
    
        document.querySelector('.perfil').style.transform="translatex(100%)";
        
        };
       
       /* function pop(){
            var audio = new audio();
            audio.src="img/botao.wav";
            audio.play();
        }*/

            //animações para a pagina de +rotina
       function maisRotina(){
        document.querySelector('.transparente').style.transform="translatex(100%)";
        document.querySelector('.transparente').style.visibility="hidden";
        document.querySelector('.voltar').style.transform="translatex(0)";
        document.querySelector('.criar').style.transform="translatex(0)";
        document.querySelector('.fundo').style.filter="brightness(90%) "
        
        setTimeout(function(){
            document.querySelector('.quadradoRotina').style.transform="translatex(0)";
        },150);
        document.querySelector('.quadradoRotina').style.visibility="visible";
        
        
       }
       //animaçôes para voltar pro menu
       function inicio(){

        document.querySelector('.transparente').style.transform="translatex(0)";
        document.querySelector('.transparente').style.visibility="visible";
        document.querySelector('.voltar').style.transform="translatex(130%)";
        document.querySelector('.criar').style.transform="translatex(-265%)";
        document.querySelector('.quadradoRotina').style.transform="translatex(-100%)";
        document.querySelector('.fundo').style.filter="brightness(100%) "
        setTimeout(function(){

            document.querySelector('.quadradoRotina').style.visibility="visible";

        },100);

       }
      
       //limpar campo de criação ao preencher tudo
       document.getElementsByClassName("botao_ok")[0].addEventListener("click",function(){ 


       meu_formulario=document.getElementsByClassName("criado")[0];
       var inputs = meu_formulario.querySelectorAll("input");
       var resetar = true;

       inputs.forEach(function(inputs) {
        if((inputs.type==="text"||inputs.type==="time")&& inputs.value===""){
            resetar= false;
        }
       
       });

       var checkboxs = document.getElementsByClassName("criado")[0].querySelectorAll('input[type="checkbox"]');

       var cheks_salvos = [];


       checkboxs.forEach(function(checkbox){

        if(checkbox.checked){
        cheks_salvos[checkbox.value] += checkbox.value; 
        }

       });

       var marcado = Array.from(checkboxs).some(function(checkbox){
        
            return checkbox.checked;

       });
      
       if(resetar&&marcado){

        numId++;
        

        var nome = document.querySelector(".name").value
        var horaInicial = document.querySelector(".Tinicial").value
        var horaFinal = document.querySelector(".Tfinal").value
        console.log("nome:" , nome ,"/ hora inicial:", horaInicial ,"/ hora final:", horaFinal, "/ dias: ");

        meu_formulario.reset();
       var quadrado_rotina=document.getElementsByClassName("quadradoRotina")[0];
        var novoElemento=document.createElement('div');
        //rotina criada
       
        novoElemento.classList.add("rotinaFeita");
        quadrado_rotina.appendChild(novoElemento);
        novoElemento.textContent=nome;
        novoElemento.id=numId;
        setTimeout(async function(){
          novoElemento.style.transform = await "translatex(0)";
        });
        var opRotina=document.createElement('div');
        opRotina.classList.add("rotinaEdit");
        novoElemento.appendChild(opRotina);
        opRotina.textContent="";
        opRotina.id=numId;
        

        var editar_rotina = document.createElement('div');
        editar_rotina.classList.add('editar');
        opRotina.appendChild(editar_rotina);
        editar_rotina.id=numId;
        editar_rotina.textContent='✏️';
        

        var excluir = document.createElement('div');
        excluir.classList.add('excluir');
        opRotina.appendChild(excluir);
        excluir.id=numId;
        excluir.textContent='🗑️';

        ///////editar rotina

        editar_rotina.addEventListener("click", function(){
               if(icon_edit){
                icon_edit.removeAttribute("id");
                novoElemento.removeAttribute("id");
      
               }
        
            //limpar checkboxes
             for(i=0;i<=6;i++){
                
                    document.getElementsByClassName('checkbox')[i].checked=false;
           
            }

          
             
            console.log("Evento de clique acionado");

            document.querySelector('.name').value = nome;
            document.querySelector('.Tinicial').value = horaInicial;
            document.querySelector('.Tfinal').value = horaFinal;


            var icon_edit = document.createElement('div');
            icon_edit.classList.add('icon_rotina');
            icon_edit.textContent = '✏️';  
            icon_edit.id=editar_rotina.id;
            document.querySelector('.criar').appendChild(icon_edit);
               
            for(i=0;i<=6;i++){
                checkboxs=document.getElementsByClassName('checkbox')[i]
                if(document.getElementsByClassName('checkbox')[i].checked.value!==cheks_salvos[i]){

                    checkboxs.checked=true;
           
                }
            }
        
            
        

        removeEventListener("click", editar_rotina);
            
        document.querySelector('.botao_ok').addEventListener('click',function(){
           
          

                
                
                if(novoElemento.id===icon_edit.id){
                   
                    console.log(novoElemento.id,'-',icon_edit.id);
                       novoElemento.remove();
                       icon_edit.remove();
                    

                }else{
              
                }
        
 
            });
          
                
          
         });



//excluir rotina
      excluir.addEventListener("click",function(){
        
    novoElemento.remove();

       });


    


       }
       else{
        alert("preencha todos os campos");
       }
       
       });
       
      
    
       

            
    




    


