const inputTarefas = document.querySelector(`.input-tarefas`);
const btnTarefa = document.querySelector(`.btn-tarefa`);
const tarefas = document.querySelector(`.tarefas`);


/* ------------------ criaLi ------------------*/
function criaLi () {
    let li = document.createElement(`li`);
    return li;
}
/* ---------------- Fim criaLi ----------------*/
 


/* ---------------- keypress ----------------*/

inputTarefas.addEventListener(`keypress`, function (e){
    if (e.keyCode === 13) {
        if (!inputTarefas.value) return; 
        criaTarefa(inputTarefas.value);
       
    }
    
 }) // Ley Code do Enter é = 13
/* ---------------- Fim keypress ----------------*/


/* ---------------- limpaInput() ----------------*/
 function limpaInput () {
    inputTarefas.value = ``;
    inputTarefas.focus();
 }


/* --------------- Fim limpaInput() --------------*/

/* ---------------- apagarTarefa ----------------*/
 function criaBotaoApagar(li) {
    li.innerText += ` `;
    const botaoApagar = document.createElement(`button`)
    // botaoApagar.classList.add (`apagar`)
    botaoApagar.setAttribute(`class`, `apagar`)
    botaoApagar.setAttribute(`title`, `Apagar esta tarefa`)
    botaoApagar.innerHTML =`Apagar`
    li.appendChild(botaoApagar)
 }

/* ---------------- Fim apagarTarefa ----------------*/


/* ---------------- criaTarefa ----------------*/


function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas()
}

/* -------------- Fim criaTarefa --------------*/


/* -------------- click --------------*/

btnTarefa.addEventListener(`click`, function(){
    if (!inputTarefas.value) return;  // (lembrando) if com uma linha so nao precisa da chaves{}
    criaTarefa(inputTarefas.value);
    
});

/* -------------- Fim click --------------*/


/* -------------- click Apagar --------------*/
    document.addEventListener (`click`, function(e){
        const el = e.target
        if (el.classList.contains(`apagar`)){
            // console.log(el.parentElement)  Vai mostrar o pai do elemento pra poder apagar ele
            el.parentElement.remove(); 
            salvarTarefas()
            
        }
    })


/* -------------- Fim Apagar --------------*/

/* -------------- salvarTarefas() --------------*/

 function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll(`li`);
    const listaDeTarefas = [];

    for ( let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerHTML;
        tarefaTexto = tarefaTexto.replace(`Apagar`, ``).trim();
        listaDeTarefas.push(tarefaTexto)
        
    }
    /* -------------- JSON --------------*/
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem(`tarefas`, tarefasJSON)
    /* -------------- Fim JSON --------------*/
    
 }
/* -------------- adicionaTarefasSalvas() --------------*/
    function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
  }
  adicionaTarefasSalvas();

/* -------------- Fim salvarTarefas() --------------*/


   



